import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Battery Sourcing', to: '/battery-cell-pack-sourcing' },
  { label: 'Low Voltage Manufacturing', to: '/low-voltage-manufacturing' },
  { label: 'BMS Distribution', to: '/bms-distribution' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo">
          <img src="/images/KB_horiz_darkBG.png" alt="Kinetic Bridge" className="navbar-logo-img" />
        </Link>
        <button className="navbar-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
        <ul className={`navbar-links${open ? ' open' : ''}`}>
          {links.map(l => (
            <li key={l.to}>
              <Link to={l.to} className={location.pathname === l.to ? 'active' : ''}>
                {l.label}
              </Link>
            </li>
          ))}
          <li><Link to="/contact" className="navbar-cta btn-primary">Get In Touch</Link></li>
        </ul>
      </div>
    </nav>
  )
}
