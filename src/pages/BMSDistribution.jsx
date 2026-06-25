import { Link } from 'react-router-dom'
import LithiumBalanceLogo from '../components/LithiumBalanceLogo'
import './Page.css'

const valueProps = [
  'Intimate product knowledge from engineering-level engagement',
  'Direct supply chain access with no middlemen',
  'Full integration support from our engineering team',
  'Suitable for automotive, aerospace, energy storage, and industrial applications',
]

export default function BMSDistribution() {
  return (
    <main className="page">
      <section className="page-hero">
        <div className="container">
          <p className="section-label">BMS Distribution</p>
          <h1 className="section-heading" style={{fontSize:'clamp(2rem,4vw,3rem)'}}>Authorized U.S. Distributor<br />of Lithium Balance BMS</h1>
          <p className="section-subhead">Engineering-level knowledge. Direct supply chain. Full integration support.</p>
          <Link to="/contact?type=bms" className="btn-primary">Inquire About BMS Solutions</Link>
        </div>
      </section>

      <section style={{padding:'64px 0',background:'#f8f9fa',borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div className="container" style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'20px',textAlign:'center'}}>
          <p style={{fontFamily:'var(--font-label)',fontSize:'11px',fontWeight:'600',letterSpacing:'0.2em',textTransform:'uppercase',color:'#40625d'}}>In Partnership With</p>
          <LithiumBalanceLogo height={72} />
          <p style={{fontFamily:'var(--font-subtitle)',fontStyle:'italic',fontSize:'1.1rem',color:'#555',maxWidth:'480px',lineHeight:'1.5'}}>Authorized U.S. distributor — delivering Lithium Balance BMS products with full engineering integration support.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <p className="section-label">About the Partnership</p>
          <p className="body-text" style={{maxWidth:'700px',marginBottom:'3rem'}}>Kinetic Bridge is an authorized distributor of Lithium Balance BMS products in the United States — providing intimate product knowledge from engineering-level engagement, direct supply chain access with no middlemen, and full integration support from our engineering team.</p>

          <div className="bms-products">
            <div className="bms-card">
              <p className="bms-card-label">Introducing</p>
              <h3>k-BMS</h3>
              <p className="bms-card-sub">1500V BMS for the Next Generation of E-Mobility and Stationary Applications</p>
              <div className="bms-features">
                {['1500V architecture','Cybersecurity-ready','ISO 26262 Certified','Extreme EMC Protection','Next-gen EV & stationary storage'].map(f => (
                  <div key={f} className="bms-feature">
                    <span className="bms-dot" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bms-card">
              <p className="bms-card-label">Returning</p>
              <h3>i-BMS</h3>
              <p className="bms-card-sub">Integrated BMS with all key battery components on-board</p>
              <div className="bms-features">
                {['On-board: shunt, MOSFET, pre-charge, power supply','ISO 13849 Capable','Parallel Pack support','Battery Swap ready','SOX Algorithms'].map(f => (
                  <div key={f} className="bms-feature">
                    <span className="bms-dot" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container">
          <p className="section-label">Why Kinetic Bridge for BMS</p>
          <h2 className="section-heading">More Than a Distributor</h2>
          <div className="feature-grid" style={{marginTop:'2rem'}}>
            {valueProps.map(v => (
              <div key={v} className="feature-item">
                <span className="feature-check">✓</span>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{textAlign:'center'}}>
          <h2 className="section-heading">Ready to Spec a BMS Solution?</h2>
          <Link to="/contact" className="btn-primary">Inquire About BMS Solutions</Link>
        </div>
      </section>
    </main>
  )
}
