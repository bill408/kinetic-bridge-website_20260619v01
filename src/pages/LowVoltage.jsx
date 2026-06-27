import { Link } from 'react-router-dom'
import './Page.css'

const certs = ['IATF 16949','FCC Part 15','UL 2580','IPC-A-610','UN 38.3','IEC 62660','UL 1973','SAE J2464','AS9100','ISO 9001','NRTL','MIL-STD-810']

const capabilities = [
  'Ideal for Defense, Aerospace, and Low-Cost Commercial Products',
  'North American based manufacturing',
  'End-to-end engineering support',
]

export default function LowVoltage() {
  return (
    <main className="page">
      <section className="page-hero" style={{backgroundImage:'linear-gradient(rgba(10,16,26,0.65),rgba(10,16,26,0.72)),url(/images/industries-drone.jpg)',backgroundSize:'cover',backgroundPosition:'center'}}>
        <div className="container">
          <p className="section-label">Low Voltage Pack Manufacturing</p>
          <h1 className="section-heading" style={{fontSize:'clamp(2rem,4vw,3rem)'}}>North American Manufacturing.<br />Engineering-Led. Mission-Ready.</h1>
          <p className="section-subhead">Low-voltage battery product manufacturing at highest quality and lowest cost.</p>
          <Link to="/contact?type=manufacturing" className="btn-primary">Request a Manufacturing Quote</Link>
        </div>
      </section>

      <section>
        <div className="container content-block">
          <div className="content-text">
            <p className="section-label">How It Works</p>
            <h2 className="section-heading">Engineering-Led Production</h2>
            <p className="body-text">Kinetic Bridge leads design, requirements, and program management while our North American manufacturing partner executes production and scale — delivering the highest quality at the lowest cost.</p>
            <div style={{marginTop:'2rem',display:'flex',flexDirection:'column',gap:'14px'}}>
              {capabilities.map(c => (
                <div key={c} className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="section-label">Standards & Certifications</p>
            <h2 className="section-heading">Built to the Highest Standards</h2>
            <p className="body-text" style={{marginBottom:'1.5rem'}}>Our manufacturing process is designed to meet the most demanding industry and regulatory requirements.</p>
            <div className="cert-grid">
              {certs.map(c => (
                <div key={c} className="cert-badge">{c}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-image-banner" style={{backgroundImage:'linear-gradient(rgba(10,16,26,0.45),rgba(10,16,26,0.55)),url(/images/testing-lab.jpg)',backgroundSize:'cover',backgroundPosition:'center'}}>
        <div className="container">
          <p className="section-label" style={{color:'rgba(255,255,255,0.7)'}}>Our Facilities</p>
          <h2 className="section-heading" style={{color:'var(--white)'}}>Rigorous Testing. Every Build.</h2>
        </div>
      </section>

      <section className="bg-accent cta-section">
        <div className="container" style={{textAlign:'center'}}>
          <h2 className="section-heading">Start Your Program</h2>
          <p className="body-text" style={{margin:'0 auto 2rem',textAlign:'center'}}>Share your design and production requirements and we'll scope a solution.</p>
          <Link to="/contact" className="btn-primary">Request a Manufacturing Quote</Link>
        </div>
      </section>
    </main>
  )
}
