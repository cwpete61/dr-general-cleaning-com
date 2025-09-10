import { Link } from 'react-router-dom'
import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <a href="tel:(201)893-6802" className="contact-item">
                <span className="icon">📞</span>
                (201) 893-6802
              </a>
              <a href="https://www.google.com/maps/place/New+Jersey+Cleaning+Services/@40.89198,-74.1450478,12z" className="contact-item">
                <span className="icon">📍</span>
                153 Sherman Pl Garfield, NJ 7026
              </a>
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/NewJerseyCleaningServices/" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="https://www.google.com/maps/place/New+Jersey+Cleaning+Services" target="_blank" rel="noopener noreferrer">
                Google
              </a>
              <a href="https://www.yelp.com/biz/new-jersey-cleaning-services-garfield" target="_blank" rel="noopener noreferrer">
                Yelp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <Link to="/">
                <h1>New Jersey Cleaning Services</h1>
              </Link>
            </div>

            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <ul className="nav-menu">
                <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                <li className="nav-dropdown">
                  <span className="nav-dropdown-toggle">Services</span>
                  <ul className="nav-dropdown-menu">
                    <li><Link to="/house-cleaning" onClick={() => setIsMenuOpen(false)}>House Cleaning</Link></li>
                    <li><Link to="/apartment-cleaning" onClick={() => setIsMenuOpen(false)}>Apartment Cleaning</Link></li>
                    <li><Link to="/office-cleaning" onClick={() => setIsMenuOpen(false)}>Office Cleaning</Link></li>
                    <li><Link to="/move-in-cleaning" onClick={() => setIsMenuOpen(false)}>Move-In Cleaning</Link></li>
                    <li><Link to="/move-out-cleaning" onClick={() => setIsMenuOpen(false)}>Move-Out Cleaning</Link></li>
                    <li><Link to="/post-construction-cleaning" onClick={() => setIsMenuOpen(false)}>Post-Construction Cleaning</Link></li>
                    <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>All Services</Link></li>
                  </ul>
                </li>
                <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
              </ul>
            </nav>

            <div className="header-cta">
              <a href="tel:(201)893-6802" className="btn btn-primary">
                Request Free Estimate
              </a>
            </div>

            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
