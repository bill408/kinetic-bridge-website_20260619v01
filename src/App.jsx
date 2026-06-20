import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import BatterySourcing from './pages/BatterySourcing'
import LowVoltage from './pages/LowVoltage'
import BMSDistribution from './pages/BMSDistribution'
import About from './pages/About'
import Contact from './pages/Contact'
import './pages/Home.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/battery-cell-pack-sourcing" element={<BatterySourcing />} />
        <Route path="/low-voltage-manufacturing" element={<LowVoltage />} />
        <Route path="/bms-distribution" element={<BMSDistribution />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
