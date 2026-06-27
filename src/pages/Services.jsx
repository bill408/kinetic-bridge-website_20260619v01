import { Link } from 'react-router-dom'
import './Page.css'

export default function Services() {
  return (
    <main className="page">
      <section className="page-hero" style={{backgroundImage:'linear-gradient(rgba(10,16,26,0.65),rgba(10,16,26,0.72)),url(/images/services-engineering.jpg)',backgroundSize:'cover',backgroundPosition:'center'}}>
        <div className="container">
          <p className="section-label">What We Do</p>
          <h1 className="section-heading" style={{fontSize:'clamp(2rem,4vw,3rem)'}}>End-to-End Engineering Solutions</h1>
          <p className="section-subhead">From strategy to integration, supply chain to support.</p>
        </div>
      </section>

      <section>
        <div className="container content-block">
          <div className="content-text">
            <p className="section-label">Engineering Advisory</p>
            <h2 className="section-heading">Strategic Technical Advisory</h2>
            <p className="body-text">Kinetic Bridge provides strategic technical advisory across electrification programs — helping teams translate complex engineering, product, and market constraints into practical execution plans. We bring decades of experience across aerospace, automotive, defense, and energy to every engagement.</p>
          </div>
        </div>
      </section>

      <section className="page-image-banner" style={{backgroundImage:'linear-gradient(rgba(10,16,26,0.45),rgba(10,16,26,0.55)),url(/images/industries-ev.jpg)',backgroundSize:'cover',backgroundPosition:'center'}}>
        <div className="container">
          <p className="section-label" style={{color:'rgba(255,255,255,0.7)'}}>Industries Served</p>
          <h2 className="section-heading" style={{color:'var(--white)'}}>Electrification Across Every Sector</h2>
        </div>
      </section>

      <section style={{padding:'64px 0',background:'#f8f9fa',borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div className="container" style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'20px',textAlign:'center'}}>
          <p style={{fontFamily:'var(--font-label)',fontSize:'11px',fontWeight:'600',letterSpacing:'0.2em',textTransform:'uppercase',color:'#40625d'}}>In Partnership With</p>
          <a href="https://www.motiveworkforce.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/Motive_Workforce_Logo.png" alt="Motive Workforce Solutions" style={{height:'72px',objectFit:'contain'}} />
          </a>
          <p style={{fontFamily:'var(--font-subtitle)',fontStyle:'italic',fontSize:'1.1rem',color:'#555',maxWidth:'480px',lineHeight:'1.5'}}>Delivering top-tier engineering talent matched precisely to your project and program needs.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <p className="section-label">Talent Partnership</p>
          <a href="https://www.motiveworkforce.com/" target="_blank" rel="noopener noreferrer" className="partner-logo-wrap">
            <img src="/images/Motive_Workforce_Logo.png" alt="Motive Workforce Solutions" />
          </a>
          <h2 className="section-heading">Top-Tier Talent, On Demand</h2>
          <div className="content-block">
            <div className="content-text">
              <p className="body-text">Through our partnership with Motive Workforce Solutions, Kinetic Bridge sources and deploys highly qualified engineering talent from across the United States — matched precisely to serve our client's project needs.</p>
              <div className="talent-callout">
                <p className="callout-label">UNIQUE VALUE-ADD</p>
                <p>Clients retain the option to hire placed resources full-time at project completion. No other engineering consultancy offers this flexibility.</p>
              </div>
            </div>
            <div className="talent-features">
              {[
                'Nationwide talent network across all engineering disciplines',
                'Blended model — leadership + sourced specialists',
                'Rapid deployment to keep programs on schedule',
                'Cost-efficient staffing without sacrificing quality',
                'Seamless transition path from contract to full-time hire',
              ].map(f => (
                <div key={f} className="talent-feature">
                  <span className="feature-dot" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent cta-section">
        <div className="container" style={{textAlign:'center'}}>
          <h2 className="section-heading">Ready to Engage?</h2>
          <Link to="/contact" className="btn-primary">Contact Us</Link>
        </div>
      </section>
    </main>
  )
}
