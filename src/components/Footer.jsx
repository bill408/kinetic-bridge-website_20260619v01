import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link to="/" className="footer-logo">
          <img src="/images/kb_logo_transparent_bg_dk.png" alt="Kinetic Bridge" className="footer-logo-img" />
        </Link>
        <nav className="footer-nav">
          <Link to="/services">Services</Link>
          <Link to="/battery-cell-pack-sourcing">Battery Sourcing</Link>
          <Link to="/low-voltage-manufacturing">Low Voltage Manufacturing</Link>
          <Link to="/bms-distribution">BMS Distribution</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <p className="footer-copy">© 2026 Kinetic Bridge. All rights reserved.</p>
      </div>
    </footer>
  )
}
