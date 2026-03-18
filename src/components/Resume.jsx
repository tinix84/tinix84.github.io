import { motion } from 'framer-motion'
import PageTransition from './PageTransition'

const experience = [
  { period: '2023 \u2014 Present', role: 'Head of System Power Engineering', company: 'BRUSA HyPower AG, Sennwald', desc: 'Leading 30 engineers across system architecture, hardware, firmware, and validation for automotive HV power converters. Defining system requirements and driving architecture for 400V/800V powertrain platforms. Technology scouting for next-gen SiC and GaN topologies.' },
  { period: '2020 \u2014 2023', role: 'Senior Power Electronics Engineer', company: 'BRUSA HyPower AG, Sennwald', desc: 'Designed and validated SiC-based DC/DC converters and on-board chargers. Led EMC testing and certification (EU, US, CN, JP). Created pyplecs, an open-source Python package for PLECS automation (30+ stars).' },
  { period: '2015 \u2014 2020', role: 'Research Engineer / Lecturer', company: 'NTB/OST, Buchs', desc: 'R&D on medium-frequency transformers, GaN power converters, and FPGA-based digital predistortion. Taught power electronics laboratory courses. Supervised BSc/MSc thesis projects.' },
  { period: '2008 \u2014 2010', role: 'Researcher', company: 'Politecnico di Torino', desc: 'GaN HEMT device modeling, high-efficiency Class B and Class F power amplifier design, real-time FPGA-based digital predistortion. 8 publications, 70+ citations.' },
]

const education = [
  { period: '2006 \u2014 2008', role: 'MSc Electronic Engineering', company: 'Politecnico di Torino \u2014 110/110 cum laude', desc: 'Thesis: GaN HEMT power amplifier design and characterization. Optime Award 2006 \u2014 Top 100 engineering graduates in Piemonte.' },
  { period: '2003 \u2014 2006', role: 'BSc Electronic Engineering', company: 'Politecnico di Torino', desc: 'Gold Medal for academic excellence. Nobile Collegio Caccia scholarships (2003\u20132007).' },
]

const skills = [
  ['Power Electronics', 'Expert'], ['SiC / GaN Devices', 'Expert'], ['Magnetics Design', 'Expert'],
  ['EMC Compliance', 'Expert'], ['Python', 'Advanced'], ['MATLAB / Simulink', 'Advanced'],
  ['Circuit Simulation', 'Expert'], ['C / C++ Embedded', 'Advanced'], ['AI / LLM Agents', 'Intermediate'],
  ['Motor Control', 'Advanced'], ['System Architecture', 'Expert'], ['Altium Designer', 'Advanced'],
]

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
const fadeLeft = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } } }

export default function Resume() {
  return (
    <PageTransition>
      <section className="section">
        <div className="section-header">
          <div className="section-overline">02 / Resume</div>
          <h2 className="section-title">Career <em>trajectory</em></h2>
        </div>

        <motion.div className="timeline" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}>
          {experience.map(e => (
            <motion.div className="timeline-block" key={e.period} variants={fadeLeft}>
              <div className="timeline-date">{e.period}</div>
              <div className="timeline-role">{e.role}</div>
              <div className="timeline-company">{e.company}</div>
              <div className="timeline-desc">{e.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="timeline" style={{ marginTop: 48 }}>
          <div className="section-overline" style={{ marginBottom: 24, paddingLeft: 32 }}>Education</div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {education.map(e => (
              <motion.div className="timeline-block" key={e.period} variants={fadeLeft}>
                <div className="timeline-date">{e.period}</div>
                <div className="timeline-role">{e.role}</div>
                <div className="timeline-company">{e.company}</div>
                <div className="timeline-desc">{e.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="skills-section">
          <div className="section-overline" style={{ marginBottom: 20 }}>Core Skills</div>
          <motion.div
            className="skills-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map(([name, level]) => (
              <motion.div className="skill-tag" key={name} variants={fadeLeft}>
                {name} <span className="skill-level">{level}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
