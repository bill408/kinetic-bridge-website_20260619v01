import './Page.css'

const clients = [
  'Romeo Power','Moog','New Eagle','Faraday Future',
  'Our Next Energy','Motivo','Boeing','Nissan',
  'Evolectric','SpaceX','Zodiac Aerospace','Llama'
]

const whyUs = [
  { title: 'End-to-End Expertise', desc: 'From concept to deployment and beyond.' },
  { title: 'Deep Technical Knowledge', desc: 'Battery systems, integration, and advanced engineering.' },
  { title: 'Trusted Partnerships', desc: 'Strong relationships across industry and government.' },
  { title: 'Agile & Responsive', desc: 'Fast decision-making and adaptable execution.' },
  { title: 'Quality & Compliance', desc: 'Rigorous processes and industry-leading standards.' },
  { title: 'Focused on Results', desc: 'Delivering measurable value and long-term success.' },
]

export default function About() {
  return (
    <main className="page">
      <section className="page-hero" style={{backgroundImage:'linear-gradient(rgba(10,16,26,0.65),rgba(10,16,26,0.72)),url(/images/hero-battery.jpg)',backgroundSize:'cover',backgroundPosition:'center'}}>
        <div className="container">
          <p className="section-label">About</p>
          <h1 className="section-heading" style={{fontSize:'clamp(2rem,4vw,3rem)'}}>Built by Engineers.<br />Trusted by Industry.</h1>
          <p className="section-subhead">Bridging innovation potential to real-world performance in electrification.</p>
        </div>
      </section>

      <section>
        <div className="container content-block">
          <div className="content-text">
            <p className="section-label">Who We Are</p>
            <h2 className="section-heading">Our Mission</h2>
            <p className="body-text">Kinetic Bridge exists to close the gap between electrification innovation and real-world deployment. We bring end-to-end engineering expertise, trusted supply chain partnerships, and decades of experience across aerospace, automotive, defense, and energy — helping clients move from concept to deployed system with confidence.</p>
            <p className="body-text" style={{marginTop:'1rem'}}>Our name says it all: we build practical bridges between technology, capital, and execution.</p>
          </div>
          <div>
            <p className="section-label">Our Reach</p>
            <h2 className="section-heading">Industry-Wide Experience</h2>
            <p className="body-text" style={{marginBottom:'0.75rem'}}>Decades across aerospace, automotive, defense, and energy — the depth your program needs.</p>
            <p className="body-text" style={{marginBottom:'1.5rem'}}>Our leadership has experience working across multiple companies such as:</p>
            <ul className="about-client-list">
              {clients.map(c => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container">
          <p className="section-label">Why Us</p>
          <h2 className="section-heading">Why Kinetic Bridge</h2>
          <div className="about-why">
            {whyUs.map(w => (
              <div key={w.title} className="about-why-item">
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
