import { useState } from 'react'
import PageTransition from './PageTransition'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', msg: '' })

  const send = () => {
    if (form.name && form.email && form.msg) {
      window.location.href = `mailto:tinix84@gmail.com?subject=Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.msg)}%0A%0AFrom: ${encodeURIComponent(form.name)} (${encodeURIComponent(form.email)})`
    }
  }

  return (
    <PageTransition>
      <section className="section">
        <div className="section-header">
          <div className="section-overline">06 / Contact</div>
          <h2 className="section-title">Let's <em>connect</em></h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info-list">
            <ContactItem icon="mail" label="Email" value={<a href="mailto:tinix84@gmail.com">tinix84@gmail.com</a>} />
            <ContactItem icon="location" label="Location" value="Buchs, SG, Switzerland" />
            <ContactItem icon="company" label="Company" value="BRUSA HyPower AG" />
            <ContactItem icon="edu" label="Education" value="Politecnico di Torino" />
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 12 }}>
              Open to consulting, technical collaboration, and open-source contributions in power electronics,
              simulation tooling, and AI-assisted engineering.
            </p>
          </div>
          <div className="contact-form-card">
            <h4>Send a message</h4>
            <div className="form-row">
              <input className="calc-input" placeholder="Your name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
              <input className="calc-input" placeholder="Email address" type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
            </div>
            <textarea className="calc-input" placeholder="Your message..." value={form.msg} onChange={e => setForm(f => ({ ...f, msg: e.target.value }))} style={{ minHeight: 100, resize: 'vertical', marginBottom: 16 }} />
            <button className="calc-btn" onClick={send}>Send Message</button>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

const icons = {
  mail: <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />,
  location: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />,
  company: <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />,
  edu: <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />,
}

function ContactItem({ icon, label, value }) {
  return (
    <div className="contact-item">
      <div className="contact-icon"><svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: 'var(--copper-bright)' }}>{icons[icon]}</svg></div>
      <div>
        <div className="contact-label">{label}</div>
        <div className="contact-value">{value}</div>
      </div>
    </div>
  )
}
