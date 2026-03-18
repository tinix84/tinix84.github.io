import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from './PageTransition'
import { projects, langColors, categories } from '../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? projects : projects.filter(p => p.cat === filter)

  return (
    <PageTransition>
      <section className="section">
        <div className="section-header">
          <div className="section-overline">03 / Projects</div>
          <h2 className="section-title">Open-source <em>work</em></h2>
        </div>

        <div className="project-filters">
          {categories.map(c => (
            <button
              key={c.key}
              className={`filter-btn${filter === c.key ? ' active' : ''}`}
              onClick={() => setFilter(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map(p => (
              <motion.div
                key={p.name}
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="project-card-head">
                  <h4><a href={p.url} target="_blank" rel="noopener noreferrer">{p.name}</a></h4>
                  {p.stars > 0 && <span className="project-stars">{'\u2605'} {p.stars}</span>}
                </div>
                <p>{p.desc}</p>
                <div className="project-meta">
                  <span className="project-lang">
                    <span className="lang-dot" style={{ background: langColors[p.lang] || '#d4874a' }} />
                    {p.lang}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </PageTransition>
  )
}
