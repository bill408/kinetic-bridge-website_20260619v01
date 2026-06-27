import { useState } from 'react'
import './Page.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', type: '', message: ''
  })

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="page">
      <section className="page-hero" style={{backgroundImage:'linear-gradient(rgba(10,16,26,0.65),rgba(10,16,26,0.72)),url(/images/contact.jpg)',backgroundSize:'cover',backgroundPosition:'center'}}>
        <div className="container">
          <p className="section-label">Contact</p>
          <h1 className="section-heading" style={{fontSize:'clamp(2rem,4vw,3rem)'}}>Let's Engineer What's Next.</h1>
          <p className="section-subhead">INNOVATE. &nbsp; INTEGRATE. &nbsp; DELIVER.</p>
        </div>
      </section>

      <section>
        <div className="container contact-grid">
          <div>
            {submitted ? (
              <div style={{padding:'40px',background:'var(--bg-accent)',border:'1px solid var(--accent-green)'}}>
                <p className="section-label">Message Sent</p>
                <h2 className="section-heading">Thank you.</h2>
                <p className="body-text">We'll be in touch shortly to discuss your project.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handle} placeholder="Jane Smith" />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company *</label>
                  <input id="company" name="company" type="text" required value={form.company} onChange={handle} placeholder="Acme Corp" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handle} placeholder="jane@acme.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone (optional)</label>
                  <input id="phone" name="phone" type="tel" value={form.phone} onChange={handle} placeholder="+1 (555) 000-0000" />
                </div>
                <div className="form-group">
                  <label htmlFor="type">Inquiry Type *</label>
                  <select id="type" name="type" required value={form.type} onChange={handle}>
                    <option value="" disabled>Select an inquiry type</option>
                    <option value="services">Services</option>
                    <option value="sourcing">Battery Cell / Pack Sourcing Request</option>
                    <option value="manufacturing">Low Voltage Pack Manufacturing Request</option>
                    <option value="bms">Battery Management Systems Request</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message / Project Description *</label>
                  <textarea id="message" name="message" required value={form.message} onChange={handle} placeholder="Tell us about your project, requirements, and timeline..." />
                </div>
                <button type="submit" className="btn-primary" style={{alignSelf:'flex-start'}}>Send Inquiry</button>
              </form>
            )}
          </div>

          <div className="contact-info">
            <div>
              <p className="contact-info-label">Email</p>
              <p className="contact-info-value"><a href="mailto:info@kinetic-bridge.com" style={{color:'var(--white)'}}>info@kinetic-bridge.com</a></p>
            </div>
            <div style={{marginTop:'16px',paddingTop:'32px',borderTop:'1px solid var(--lines-subtle)'}}>
              <p className="contact-info-label">Company Information</p>
              <p className="body-text" style={{marginBottom:'8px'}}>Greater Los Angeles Area, CA</p>
              <p className="contact-info-label" style={{marginTop:'24px',marginBottom:'12px'}}>What to Expect</p>
              <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:'10px'}}>
                {[
                  'We typically respond within 1–2 business days',
                  'Initial consultations focus on understanding your platform and requirements',
                  'We will provide a scoped proposal based on your project needs',
                ].map(item => (
                  <li key={item} style={{fontFamily:'var(--font-body)',fontSize:'0.9rem',color:'var(--text-muted)',paddingLeft:'16px',position:'relative'}}>
                    <span style={{position:'absolute',left:0,top:'6px',width:'6px',height:'1px',background:'var(--accent-green)',display:'inline-block'}} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
