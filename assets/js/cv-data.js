class CVDataManager {
  constructor() {
    this.cvData = null;
  }
  
  async loadCVData() {
    try {
      const response = await fetch('./data/cv.json');
      this.cvData = await response.json();
      this.populatePersonalInfo();
      this.populateContactInfo(); 
      this.populateSocialLinks();
      this.populateSkills();
    } catch (error) {
      console.error('Error loading CV data:', error);
    }
  }
  
  populatePersonalInfo() {
    const { personal } = this.cvData;
    
    // Update avatar
    const avatar = document.querySelector('.avatar-box img');
    if (avatar) {
      avatar.src = personal.avatar;
      avatar.alt = personal.name;
    }
    
    // Update name and title
    const nameEl = document.querySelector('.name');
    if (nameEl) nameEl.textContent = personal.name;
    
    const titleEl = document.querySelector('.title');
    if (titleEl) titleEl.textContent = personal.title;
  }
  
  populateContactInfo() {
    const { contact } = this.cvData;
    
    // Update email
    const emailLink = document.querySelector('a[href*="mailto"]');
    if (emailLink) {
      emailLink.href = `mailto:${contact.email}`;
      emailLink.textContent = contact.email;
    }
    
    // Update location
    const locationEl = document.querySelector('.contact-info address');
    if (locationEl) {
      locationEl.textContent = contact.location;
    }
    
    // Add more contact items as needed
    this.addContactItem('school-outline', 'Education', contact.education);
    this.addContactItem('business-outline', 'Institution', contact.institution);
  }
  
  addContactItem(iconName, title, value) {
    const contactList = document.querySelector('.contact-list');
    if (!contactList) return;
    
    const contactItem = document.createElement('li');
    contactItem.className = 'contact-item';
    contactItem.innerHTML = `
      <div class="icon-box">
        <ion-icon name="${iconName}"></ion-icon>
      </div>
      <div class="contact-info">
        <p class="contact-title">${title}</p>
        <address>${value}</address>
      </div>
    `;
    contactList.appendChild(contactItem);
  }
  
  populateSocialLinks() {
    const { social } = this.cvData;
    const socialList = document.querySelector('.social-list');
    if (!socialList) return;
    
    // Clear existing links
    socialList.innerHTML = '';
    
    // Add new links
    const socialLinks = [
      { url: social.linkedin, icon: 'logo-linkedin' },
      { url: social.github, icon: 'logo-github' }, 
      { url: social.twitter, icon: 'logo-twitter' },
      { url: social.researchgate, icon: 'school-outline' }
    ];
    
    socialLinks.forEach(link => {
      const socialItem = document.createElement('li');
      socialItem.className = 'social-item';
      socialItem.innerHTML = `
        <a href="${link.url}" class="social-link" target="_blank">
          <ion-icon name="${link.icon}"></ion-icon>
        </a>
      `;
      socialList.appendChild(socialItem);
    });
  }
  
  populateSkills() {
    const { skills } = this.cvData;
    const skillsList = document.querySelector('.skills-list');
    if (!skillsList) return;
    
    skillsList.innerHTML = '';
    
    skills.forEach(skill => {
      const skillItem = document.createElement('li');
      skillItem.className = 'skills-item';
      skillItem.innerHTML = `
        <div class="title-wrapper">
          <h5 class="h5">${skill.icon} ${skill.category}</h5>
          <data value="${skill.level}">${skill.level}%</data>
        </div>
        <div class="skill-progress-bg">
          <div class="skill-progress-fill" style="width: ${skill.level}%"></div>
        </div>
        <p class="skill-description">${skill.description}</p>
      `;
      skillsList.appendChild(skillItem);
    });
  }
  
  generateCVPage() {
    const { education, experience, awards } = this.cvData;
    
    // Generate CV content dynamically
    let cvHTML = '<h2 class="h2 article-title">Curriculum Vitae</h2>';
    
    // Education section
    cvHTML += '<section class="timeline"><h3 class="h3 timeline-title">Education</h3><ol class="timeline-list">';
    education.forEach(edu => {
      cvHTML += `
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">${edu.degree}</h4>
          <span>${edu.institution}</span>
          <span>${edu.year}</span>
          <p class="timeline-text">${edu.description}</p>
        </li>
      `;
    });
    cvHTML += '</ol></section>';
    
    // Experience section  
    cvHTML += '<section class="timeline"><h3 class="h3 timeline-title">Experience</h3><ol class="timeline-list">';
    experience.forEach(exp => {
      cvHTML += `
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">${exp.title}</h4>
          <span>${exp.institution}</span>
          <span>${exp.period}</span>
          <p class="timeline-text">${exp.description}</p>
        </li>
      `;
    });
    cvHTML += '</ol></section>';
    
    // Awards section
    cvHTML += '<section class="timeline"><h3 class="h3 timeline-title">Awards</h3><ol class="timeline-list">';
    awards.forEach(award => {
      cvHTML += `
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">${award.title}</h4>
          <span>${award.organization}</span>
          <span>${award.year}</span>
        </li>
      `;
    });
    cvHTML += '</ol></section>';
    
    // Insert CV content
    const cvPage = document.querySelector('[data-page="resume"]');
    if (cvPage) {
      cvPage.innerHTML = cvHTML;
    }
  }
}

// Initialize CV data manager
const cvManager = new CVDataManager();

// Load CV data when page loads
document.addEventListener('DOMContentLoaded', function() {
  cvManager.loadCVData();
});
