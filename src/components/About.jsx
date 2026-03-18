import { motion } from 'framer-motion'
import PageTransition from './PageTransition'

const expertise = [
  { icon: '\u26A1', title: 'Power Electronics', desc: 'SiC/GaN-based converter design for automotive platforms. Topology selection, loss modeling, thermal management, EMC compliance.' },
  { icon: '\u2699', title: 'Magnetics Design', desc: 'Transformer and inductor optimization using FEM simulation. Core loss modeling (iGSE, MSE), Litz wire analysis, automated design flows.' },
  { icon: '\uD83D\uDCBB', title: 'Simulation Automation', desc: 'Python frameworks for PLECS, GeckoCIRCUITS, and LTspice. Batch parametric sweeps, caching, REST APIs for simulation-as-a-service.' },
  { icon: '\uD83E\uDD16', title: 'AI for Engineering', desc: 'LLM-based agents for design automation, homologation support, and intelligent search across technical standards (IEC, ISO, CISPR).' },
]

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }

export default function About() {
  return (
    <PageTransition>
      <section className="section">
        <div className="section-header">
          <div className="section-overline">01 / About</div>
          <h2 className="section-title">What I <em>do</em></h2>
        </div>
        <div className="about-intro">
          <p>
            I'm a <strong>power electronics engineering leader</strong> with 15+ years spanning automotive high-voltage systems,
            wide-bandgap semiconductor design, and academic research. At <strong>BRUSA HyPower</strong>, I lead system architecture
            for 400V/800V powertrain platforms &mdash; DCDC converters, on-board chargers, and inverters for major automotive OEMs.
          </p>
          <br />
          <p>
            Beyond the day job, I maintain <strong>open-source simulation tools</strong> used by the power electronics community
            (pyplecs, GeckoCIRCUITS, OpenMagnetics ecosystem) and experiment with AI-assisted engineering workflows.
            I bridge hardware and software because that's where the real leverage is.
          </p>
        </div>

        <motion.div
          className="expertise-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {expertise.map(e => (
            <motion.div className="expertise-card" key={e.title} variants={fadeUp}>
              <span className="expertise-icon">{e.icon}</span>
              <h4>{e.title}</h4>
              <p>{e.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </PageTransition>
  )
}
