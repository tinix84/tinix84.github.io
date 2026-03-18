import { motion } from 'framer-motion'
import PageTransition from './PageTransition'

const posts = [
  { icon: '\u26A1', category: 'Motor Control', date: 'Sep 2025', title: 'Weekly Engineering Diary \u2014 Debugging FOC at 800V', desc: 'Notes from the lab: field-oriented control tuning on the latest SiC inverter platform, and what happens when your current sensor offset drifts.' },
  { icon: '\uD83D\uDCBB', category: 'Automation', date: 'Aug 2025', title: 'Automating PLECS Simulations with Python', desc: 'How pyplecs achieves 5x faster batch simulations through caching, parallel execution, and a REST API for language-agnostic integration.' },
  { icon: '\uD83E\uDD16', category: 'Community', date: 'Aug 2025', title: 'Building the GeckoCIRCUITS Power Library', desc: 'How a community of power electronics engineers is building the most comprehensive open-source component library for circuit simulation.' },
]

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }

export default function Blog() {
  return (
    <PageTransition>
      <section className="section">
        <div className="section-header">
          <div className="section-overline">05 / Writing</div>
          <h2 className="section-title">Engineering <em>notes</em></h2>
        </div>
        <motion.div
          className="blog-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {posts.map(p => (
            <motion.div className="blog-card" key={p.title} variants={fadeUp} whileHover={{ y: -4 }}>
              <div className="blog-card-icon">{p.icon}</div>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span className="category">{p.category}</span>
                  <span>{p.date}</span>
                </div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </PageTransition>
  )
}
