import { Link } from 'react-router-dom'
import './Home.css'

const clients = [
  'Romeo Power','Moog','New Eagle','Faraday Future',
  'Our Next Energy','Motivo','Boeing','Nissan',
  'eVo lectric','SpaceX','Zodiac Aerospace','Llama'
]

const services = [
  {
    icon: '⚙️',
    title: 'Engineering Advisory',
    desc: 'Strategic and technical advisory for electrification programs — from concept through deployment.',
    to: '/services',
  },
  {
    icon: '🔋',
    title: 'Battery Cell & Pack Sourcing',
    desc: 'Verified genuine cells and packs in all form factors. NDAA-compliant supply chain for government, defense, and commercial clients.',
    to: '/battery-cell-pack-sourcing',
  },
  {
    icon: '🏭',
    title: 'Low Voltage Manufacturing',
    desc: 'North American contract manufacturing for defense, aerospace, and commercial battery products.',
    to: '/low-voltage-manufacturing',
  },
  {
    icon: '📡',
    title: 'BMS Distribution',
    desc: 'Authorized U.S. distributor of Lithium Balance BMS products with full engineering integration support.',
    to: '/bms-distribution',
  },
]

const whyUs = [
  { title: 'End-to-End Expertise', desc: 'From concept to deployment and beyond.' },
  { title: 'Deep Technical Knowledge', desc: 'Battery systems, integration, and advanced engineering.' },
  { title: 'Trusted Partnerships', desc: 'Strong relationships across industry and government.' },
  { title: 'Agile & Responsive', desc: 'Fast decision-making and adaptable execution.' },
  { title: 'Quality & Compliance', desc: 'Rigorous processes and industry-leading standards.' },
  { title: 'Focused on Results', desc: 'Delivering measurable value and long-term success.' },
]

const steps = [
  { n: '01', title: 'Discover', desc: 'Understand goals, relationships, and strategic context across projects, partnerships, and operations.' },
  { n: '02', title: 'Define', desc: 'Align on requirements, scope, and success metrics — for a program, partnership, or business process.' },
  { n: '03', title: 'Design', desc: 'Engineer solutions that are robust, scalable, and fit-for-purpose.' },
  { n: '04', title: 'Deliver', desc: 'Execute with precision, transparency, and discipline — from prototypes to programs.' },
  { n: '05', title: 'Support', desc: 'Long-term support and relationship management to ensure continuous value.' },
]

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <p className="section-label">Electrification Engineering</p>
          <h1 className="hero-headline">Engineering Energy.<br />Delivering Solutions.</h1>
          <p className="hero-sub">Electrified Innovation. Engineered Outcomes.</p>
          <div className="hero-ctas">
            <Link to="/services" className="btn-outline">Explore Our Services</Link>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-accent">
        <div className="container problem-grid">
          <div>
            <p className="section-label">The Challenge</p>
            <h2 className="section-heading">Brilliant electrification technology means little without real-world integration.</h2>
            <ul className="problem-list">
              <li>Complex technologies challenging to integrate</li>
              <li>Lack of end-to-end engineering support</li>
              <li>Supply chain uncertainty drives risk and delays</li>
              <li>Talent gaps slow innovation to market</li>
            </ul>
          </div>
          <div className="chasm-visual">
            <div className="chasm-side">
              <span>INNOVATION<br />POTENTIAL</span>
            </div>
            <div className="chasm-bridge">
              <div className="chasm-label">KINETIC BRIDGE</div>
            </div>
            <div className="chasm-side right">
              <span>REAL-WORLD<br />PERFORMANCE</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section>
        <div className="container">
          <p className="section-label">Our Process</p>
          <h2 className="section-heading">A Collaborative Process Built for Complex Energy Systems</h2>
          <div className="steps-row">
            {steps.map(s => (
              <div key={s.n} className="step-card">
                <span className="step-num">{s.n}</span>
                <h3 className="step-title">{s.title}</h3>
                <div className="step-divider" />
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="process-banner">
            From concept to deployment — we're with you every step of the way.
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-accent">
        <div className="container">
          <p className="section-label">What We Do</p>
          <h2 className="section-heading">Our Solutions</h2>
          <div className="services-grid">
            {services.map(s => (
              <Link to={s.to} key={s.title} className="service-card">
                <span className="service-icon">{s.icon}</span>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <span className="service-link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PEDIGREE */}
      <section>
        <div className="container">
          <p className="section-label">Who We've Worked With</p>
          <h2 className="section-heading">A Pedigree Built for What's Next</h2>
          <p className="section-subhead">Decades across aerospace, automotive, defense, and energy.</p>
          <div className="clients-grid">
            {clients.map(c => (
              <div key={c} className="client-card">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-accent">
        <div className="container">
          <p className="section-label">Why Us</p>
          <h2 className="section-heading">Why Kinetic Bridge</h2>
          <div className="why-grid">
            {whyUs.map(w => (
              <div key={w.title} className="why-card">
                <div className="why-accent" />
                <h3 className="why-title">{w.title}</h3>
                <p className="why-desc">{w.desc}</p>
              </div>
            ))}
          </div>
          <blockquote className="pull-quote">
            "Building practical bridges between technology, capital, and execution."
          </blockquote>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <h2 className="cta-banner-headline">Let's Engineer What's Next.</h2>
          <p className="cta-banner-sub">INNOVATE. &nbsp; INTEGRATE. &nbsp; DELIVER.</p>
          <Link to="/contact" className="btn-primary">Get In Touch</Link>
        </div>
      </section>
    </main>
  )
}
