// Dynamic markdown project loader with debug logs
console.log('Attaching markdown project loader...');
document.querySelectorAll('.load-md-project').forEach(link => {
  console.log('Found project link:', link);
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const mdPath = this.getAttribute('data-md');
    console.log('Clicked project, loading markdown from:', mdPath);
    fetch(mdPath)
      .then(res => {
        console.log('Fetch response:', res);
        return res.text();
      })
      .then(md => {
        console.log('Fetched markdown:', md.slice(0, 200));
        // Remove YAML front matter if present
        const cleanMd = md.replace(/^---[\s\S]*?---/, '').trim();
        const html = window.marked ? marked.parse(cleanMd) : cleanMd;
        document.getElementById('md-project-content').innerHTML = html;
        document.getElementById('md-project-modal').style.display = 'flex';
        console.log('Markdown rendered and modal shown.');
      })
      .catch(err => {
        console.error('Error loading markdown:', err);
      });
  });
});
'use strict';

// AUTO-DETECT markdown project links
const mdLinks = Array.from(document.querySelectorAll('.load-md-project')).map(a => ({
  path: a.getAttribute('data-md'),
  title: a.querySelector('.project-title')?.innerText || a.getAttribute('data-md'),
  thumb: a.querySelector('img')?.src || '' ,
  el: a
}));

const mdCache = {};
const mdModal = document.getElementById('md-project-modal');
const mdContent = document.getElementById('md-project-content');
const mdSpinner = document.getElementById('md-spinner');
const mdError = document.getElementById('md-error');
const mdTitle = document.getElementById('md-project-title');
const mdCloseBtn = document.getElementById('md-modal-close');

let lastActiveTrigger = null;

function showSpinner(show){ if(mdSpinner) mdSpinner.classList.toggle('active', !!show); }
function openModal(){ if(mdModal){ mdModal.classList.add('active'); mdModal.setAttribute('aria-hidden','false'); document.body.style.overflow = 'hidden'; if(mdCloseBtn) mdCloseBtn.focus(); attachModalKeyHandlers(); } }
function closeModal(){ if(mdModal){ mdModal.classList.remove('active'); mdModal.setAttribute('aria-hidden','true'); document.body.style.overflow = ''; } if(mdContent) mdContent.innerHTML = ''; if(mdError){ mdError.style.display = 'none'; mdError.innerText = ''; } releaseModalFocus(); if(lastActiveTrigger) lastActiveTrigger.focus(); }

// Keyboard accessibility: close on Escape, basic focus trap
function onModalKeydown(e){
  if(e.key === 'Escape'){
    closeModal();
  }
  if(e.key === 'Tab'){
    // basic focus trap inside modal
    const focusable = mdModal.querySelectorAll('a, button, input, textarea, [tabindex]:not([tabindex="-1"])');
    if(focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length -1];
    if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
  }
}

function attachModalKeyHandlers(){ document.addEventListener('keydown', onModalKeydown); }
function releaseModalFocus(){ document.removeEventListener('keydown', onModalKeydown); }

if(mdCloseBtn) mdCloseBtn.addEventListener('click', closeModal);
// close when clicking overlay outside dialog
if(mdModal){ mdModal.addEventListener('click', function(e){ if(e.target === mdModal) closeModal(); }); }

// Preload discovered markdown files
mdLinks.forEach(link => {
  if(!link.path) return;
  fetch(link.path).then(r => { if(!r.ok) throw new Error('Fetch failed ' + r.status); return r.text(); }).then(md => { mdCache[link.path] = md; console.log('Preloaded', link.path); }).catch(err => { console.warn('Preload failed for', link.path, err); });
});

// Build project index UI
const projectIndex = document.getElementById('project-index');
if(projectIndex){
  const grid = document.createElement('div'); grid.className = 'project-index-grid';
  mdLinks.forEach(link => {
    const btn = document.createElement('button'); btn.className = 'project-index-btn'; btn.setAttribute('data-md', link.path); btn.innerHTML = `\n      <img src="${link.thumb}" class="project-index-thumb" alt="${link.title}"/>\n      <div class="project-index-meta"><strong>${link.title}</strong></div>`;
    btn.addEventListener('click', function(){ loadAndShowMarkdown(link.path, link.el || this); });
    const item = document.createElement('div'); item.className = 'project-index-item'; item.appendChild(btn); grid.appendChild(item);
  });
  projectIndex.appendChild(grid);
}

function loadAndShowMarkdown(path, triggerEl){
  if(!path) return;
  lastActiveTrigger = triggerEl || document.activeElement;
  mdTitle.innerText = triggerEl?.querySelector('.project-title')?.innerText || triggerEl?.innerText || 'Project';
  showSpinner(true);
  if(mdError){ mdError.style.display = 'none'; mdError.innerText = ''; }
  const render = (md) => { const cleanMd = md.replace(/^---[\s\S]*?---/, '').trim(); const html = window.marked ? marked.parse(cleanMd) : cleanMd; if(mdContent) mdContent.innerHTML = html; showSpinner(false); openModal(); };
  if(mdCache[path]){ try{ render(mdCache[path]); } catch(err){ console.error(err); if(mdError){ mdError.style.display='block'; mdError.innerText='Failed to render content.'; } showSpinner(false);} return; }
  fetch(path).then(r => { if(!r.ok) throw new Error('Network response was not ok: ' + r.status); return r.text(); }).then(md => { mdCache[path] = md; render(md); }).catch(err => { console.error('Failed to load markdown', err); if(mdError){ mdError.style.display='block'; mdError.innerText='Failed to load project content.'; } showSpinner(false); });
}

// wire original project card links as well
document.querySelectorAll('.load-md-project').forEach(a => { a.addEventListener('click', function(e){ e.preventDefault(); loadAndShowMarkdown(this.getAttribute('data-md'), this); }); });



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
} else {
  console.warn('sidebar or sidebarBtn not found', { sidebar, sidebarBtn });
}



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items (guarded)
if (testimonialsItem.length && modalContainer && modalCloseBtn && overlay && modalImg && modalTitle && modalText) {
  for (let i = 0; i < testimonialsItem.length; i++) {

    testimonialsItem[i].addEventListener("click", function () {

      const avatar = this.querySelector("[data-testimonials-avatar]");
      const titleEl = this.querySelector("[data-testimonials-title]");
      const textEl = this.querySelector("[data-testimonials-text]");

      if (avatar && avatar.src) modalImg.src = avatar.src;
      if (avatar && avatar.alt) modalImg.alt = avatar.alt;
      if (titleEl) modalTitle.innerHTML = titleEl.innerHTML;
      if (textEl) modalText.innerHTML = textEl.innerHTML;

      testimonialsModalFunc();

    });

  }

  // add click event to modal close button
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  overlay.addEventListener("click", testimonialsModalFunc);
} else {
  console.warn('Testimonials or modal elements missing - skipping modal wiring', {
    testimonialsItemLength: testimonialsItem.length,
    modalContainer, modalCloseBtn, overlay, modalImg, modalTitle, modalText
  });
}



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
} else {
  console.warn('select element not found');
}

// add event in all select items (guarded)
if (selectItems.length && selectValue && select) {
  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {

      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);

    });
  }
} else {
  console.warn('selectItems or selectValue missing', { selectItemsLength: selectItems.length, selectValue, select });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn.length ? filterBtn[0] : null;

if (filterBtn.length) {
  for (let i = 0; i < filterBtn.length; i++) {

    filterBtn[i].addEventListener("click", function () {

      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      if (lastClickedBtn) lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;

    });

  }
} else {
  console.warn('No filter buttons found');
}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field (guarded)
if (form && formInputs.length && formBtn) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {

      // check form validation
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }

    });
  }
} else {
  console.warn('Form elements missing or incomplete', { form, formInputsLength: formInputs.length, formBtn });
}



// page navigation variables
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navigationLinks.forEach(link => {
  link.addEventListener('click', function () {
    const target = this.getAttribute('data-nav-link');
    console.log('Nav clicked:', target);
    // Remove active from all
    navigationLinks.forEach(l => l.classList.remove('active'));
    pages.forEach(page => page.classList.remove('active'));
    // Add active to the clicked link
    this.classList.add('active');
    
    // Handle projects navigation (maps to portfolio page)
    let pageSelector = `[data-page="${target}"]`;
    if (target === 'projects') {
      pageSelector = '[data-page="projects"]'; // Use projects data-page directly
    }
    
    const pageToShow = document.querySelector(pageSelector);
    if (pageToShow) {
      pageToShow.classList.add('active');
      console.log('Added active class to page:', pageToShow.tagName, pageToShow.className);
      
      // Force display as backup in case CSS doesn't work
      if (target === 'projects') {
        pageToShow.style.display = 'block';
        console.log('Forced display block on projects page');
      }
      
      window.scrollTo(0, 0);
      // Special handling for projects page: ensure project index is visible
      try {
        if (target === 'projects') {
          console.log('Ensuring project index is visible');
          const idx = document.getElementById('project-index');
          if (idx) { idx.style.display = 'block'; }
          // focus first project index button if present
          const firstBtn = document.querySelector('#project-index .project-index-btn');
          if (firstBtn) firstBtn.focus();
        }
      } catch (e) { console.warn('Error ensuring projects visible', e); }
    } else {
      console.warn('No page found for target:', target, 'tried selector:', pageSelector);
    }
  });
});

// Debug: ensure pages and nav counts
console.log('Navigation links found:', navigationLinks.length, 'Pages found:', pages.length);

// Ensure at least one page is active on load
if (!Array.from(pages).some(p=>p.classList.contains('active'))) {
  if (pages[0]) {
    pages[0].classList.add('active');
    console.log('No active page found - defaulting to first page:', pages[0]);
  }
}