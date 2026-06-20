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
      <section className="page-hero">
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
            <h2 className="section-heading">End-to-End Cell Supply</h2>
            <p className="body-text">Kinetic Bridge maintains a global network of verified manufacturing partners to deliver genuine battery cells and packs across all form factors — with direct supply chain access and no middlemen.</p>
            <div className="feature-grid" style={{marginTop:'2rem'}}>
              {features.map(f => (
                <div key={f} className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="map-visual">
            <svg className="map-svg" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="500" height="300" fill="transparent"/>
              {/* Simplified world map outline */}
              <path d="M60 120 Q80 100 120 110 Q150 90 180 100 Q200 80 240 90 Q280 70 320 80 Q360 70 400 85 Q430 80 460 90 L460 200 Q420 210 380 200 Q340 210 300 200 Q260 215 220 205 Q180 215 140 200 Q100 210 60 200 Z" fill="rgba(174,183,191,0.08)" stroke="rgba(174,183,191,0.2)" strokeWidth="1"/>
              <path d="M80 140 Q100 130 130 135 Q160 125 190 130" fill="none" stroke="rgba(174,183,191,0.15)" strokeWidth="0.5"/>
              {/* Global partners - Asia/Pacific */}
              <circle cx="380" cy="130" r="6" fill="#40625d"/>
              <circle cx="350" cy="145" r="6" fill="#40625d"/>
              <circle cx="400" cy="150" r="6" fill="#40625d"/>
              <circle cx="370" cy="165" r="6" fill="#40625d"/>
              <circle cx="330" cy="155" r="6" fill="#40625d"/>
              {/* NA partner */}
              <circle cx="160" cy="130" r="7" fill="#aeb7bf"/>
              {/* HQ star */}
              <path d="M185 145 L187 140 L189 145 L194 145 L190 148 L192 153 L187 150 L182 153 L184 148 L180 145 Z" fill="#ffffff"/>
              {/* Connection lines */}
              <path d="M380 130 Q280 100 185 145" stroke="rgba(64,98,93,0.4)" strokeWidth="1" strokeDasharray="4 3"/>
              <path d="M350 145 Q280 110 185 145" stroke="rgba(64,98,93,0.3)" strokeWidth="1" strokeDasharray="4 3"/>
              <path d="M400 150 Q300 120 185 145" stroke="rgba(64,98,93,0.3)" strokeWidth="1" strokeDasharray="4 3"/>
              <path d="M160 130 Q170 138 185 145" stroke="rgba(174,183,191,0.5)" strokeWidth="1" strokeDasharray="4 3"/>
            </svg>
            <div className="map-legend">
              <div className="legend-item">
                <div className="legend-dot" style={{background:'#40625d'}} />
                <span>Global Manufacturing Partners</span>
              </div>
              <div className="legend-item">
                <div className="legend-dot" style={{background:'#aeb7bf'}} />
                <span>North America-Based Partners</span>
              </div>
            </div>
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
