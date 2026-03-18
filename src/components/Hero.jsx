import { motion } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-overline">Head of System Power Engineering</div>
          <h1>Building the future of <em>automotive power</em></h1>
          <p className="hero-subtitle">
            Leading 30 engineers at BRUSA HyPower on high-voltage power converters for automotive OEMs.
            I build open-source tools that bridge hardware design with modern software &mdash; from circuit simulation
            automation to AI-assisted engineering workflows.
          </p>
          <motion.div
            className="hero-metrics"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Metric value={15} suffix="+" label="Years Experience" />
            <Metric value={30} label="Engineers Led" />
            <Metric value={70} suffix="+" label="Citations" />
            <Metric value={80} suffix="+" label="GitHub Repos" />
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src="/assets/images/riccardo-avatar.png" alt="Riccardo Tinivella" className="avatar" />
          <h3>Riccardo Tinivella</h3>
          <p>MSc EE, Politecnico di Torino</p>
          <div className="social-row">
            <SocialBtn href="https://linkedin.com/in/riccardotinivella" label="LinkedIn" icon={<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>} />
            <SocialBtn href="https://github.com/tinix84" label="GitHub" icon={<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>} />
            <SocialBtn href="https://www.researchgate.net/profile/Riccardo-Tinivella" label="ResearchGate" icon={<path d="M19.586 0c-1.326 0-2.4 1.074-2.4 2.4s1.074 2.4 2.4 2.4 2.4-1.074 2.4-2.4S20.912 0 19.586 0zM8.4 4.8C3.764 4.8 0 8.563 0 13.2S3.764 21.6 8.4 21.6c3.009 0 5.646-1.586 7.131-3.967l-2.476-1.232c-.94 1.48-2.584 2.399-4.655 2.399-2.894 0-5.24-2.347-5.24-5.24s2.346-5.24 5.24-5.24c2.07 0 3.715.92 4.655 2.4l2.476-1.233C14.046 6.386 11.409 4.8 8.4 4.8zm11.186 6h-1.2v-1.8h-1.8v1.8h-1.2v1.8h1.2v1.8h1.8v-1.8h1.2v-1.8z"/>} />
            <SocialBtn href="https://riccardotinivella.substack.com" label="Substack" icon={<path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>} />
          </div>
          <div className="hero-card-info">
            <div><MapPin /><span>Buchs, SG, Switzerland</span></div>
            <div><Building /><span>BRUSA HyPower AG</span></div>
            <div><Mail /><a href="mailto:tinix84@gmail.com">tinix84@gmail.com</a></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Metric({ value, suffix = '', label }) {
  return (
    <div className="metric">
      <span className="metric-value"><AnimatedCounter target={value} />{suffix}</span>
      <span className="metric-label">{label}</span>
    </div>
  )
}

function SocialBtn({ href, label, icon }) {
  return (
    <a href={href} className="social-btn" target="_blank" rel="noopener noreferrer" aria-label={label}>
      <svg viewBox="0 0 24 24">{icon}</svg>
    </a>
  )
}

function MapPin() {
  return <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
}
function Building() {
  return <svg viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
}
function Mail() {
  return <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
}
