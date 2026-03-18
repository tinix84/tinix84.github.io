import { useState, useEffect } from 'react'

const links = [
  { key: 'about', label: 'About' },
  { key: 'resume', label: 'Resume' },
  { key: 'projects', label: 'Projects' },
  { key: 'calculators', label: 'Calculators' },
  { key: 'blog', label: 'Blog' },
  { key: 'contact', label: 'Contact' },
]

export default function Nav({ activePage, onNavigate }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`site-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-brand"><span>R</span>T_</div>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {links.map(l => (
            <li key={l.key}>
              <a
                href={`#${l.key}`}
                className={activePage === l.key ? 'active' : ''}
                onClick={e => { e.preventDefault(); onNavigate(l.key); setOpen(false) }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="nav-hamburger"
          onClick={() => setOpen(v => !v)}
          aria-label="Menu"
        >
          {open ? '\u2715' : '\u2630'}
        </button>
      </div>
    </nav>
  )
}
