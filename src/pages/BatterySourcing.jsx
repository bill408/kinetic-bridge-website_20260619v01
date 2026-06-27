import { Link } from 'react-router-dom'
import './Page.css'

const features = [
  'All form factors: cylindrical, prismatic, pouch',
  'Verified genuine cells — no grey market supply',
  'Actively expanding U.S.-based manufacturing network for BABA and NDAA compliance',
  'Serving government agencies, municipalities, and commercial clients',
]

export default function BatterySourcing() {
  return (
    <main className="page">
      <section className="page-hero" style={{backgroundImage:'linear-gradient(rgba(10,16,26,0.65),rgba(10,16,26,0.72)),url(/images/sourcing.jpg)',backgroundSize:'cover',backgroundPosition:'center'}}>
        <div className="container">
          <p className="section-label">Battery Cell & Pack Sourcing</p>
          <h1 className="section-heading" style={{fontSize:'clamp(2rem,4vw,3rem)'}}>Genuine Cells. Global Network.<br />Door-to-Door Delivery.</h1>
          <p className="section-subhead">Verified supply chain for defense, commercial, and government clients.</p>
          <Link to="/contact?type=sourcing" className="btn-primary">Request a Sourcing Quote</Link>
        </div>
      </section>

      <section>
        <div className="container content-block">
          <div className="content-text">
            <p className="section-label">What We Offer</p>
            <h2 className="section-heading">End-to-End Cell and Product Supply</h2>
            <p className="body-text">Kinetic Bridge maintains a global network of verified manufacturing partners to deliver genuine battery cells, packs, and energy products across all form factors — with direct supply chain access and no middlemen.</p>
            <div className="feature-grid" style={{marginTop:'2rem'}}>
              {features.map(f => (
                <div key={f} className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="map-image-wrap">
            <img src="/images/Kinetic_Bridge_v1.pptx.png" alt="Global supply chain network — Asia-Pacific manufacturing partners shipping to North America" />
          </div>
        </div>
      </section>

      <section className="bg-accent cta-section">
        <div className="container" style={{textAlign:'center'}}>
          <h2 className="section-heading">Ready to Source?</h2>
          <p className="body-text" style={{margin:'0 auto 2rem',textAlign:'center'}}>Tell us your requirements and we'll find the right cells for your program.</p>
          <Link to="/contact" className="btn-primary">Request a Sourcing Quote</Link>
        </div>
      </section>
    </main>
  )
}
