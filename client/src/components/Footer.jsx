import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Services</h3>
              <ul>
                <li><Link to="/services">House Cleaning</Link></li>
                <li><Link to="/services">Apartment Cleaning</Link></li>
                <li><Link to="/services">Office Cleaning</Link></li>
                <li><Link to="/services">Move-in Cleaning</Link></li>
                <li><Link to="/services">Move-out Cleaning</Link></li>
                <li><Link to="/services">Post-Construction Cleaning</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Explore</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contact Information</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="icon">📞</span>
                  <a href="tel:(201)893-6802">(201) 893-6802</a>
                </div>
                <div className="contact-item">
                  <span className="icon">📍</span>
                  <a href="https://www.google.com/maps/place/New+Jersey+Cleaning+Services" target="_blank" rel="noopener noreferrer">
                    153 Sherman Pl Garfield, NJ 7026
                  </a>
                </div>
                <div className="contact-item">
                  <span className="icon">🕒</span>
                  <div className="hours">
                    <p>Mon - Fri: 8:00AM - 5:00PM</p>
                    <p>Sat: 9:00AM - 2:00PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
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

            <div className="footer-section">
              <h3>Areas We Serve</h3>
              <div className="service-areas">
                <div className="area-group">
                  <h4>Bergen County</h4>
                  <ul>
                    <li>Glen Rock</li>
                    <li>Ridgewood</li>
                    <li>Wyckoff</li>
                    <li>Hillsdale</li>
                    <li>Wood Ridge</li>
                  </ul>
                </div>
                <div className="area-group">
                  <h4>Passaic County</h4>
                  <ul>
                    <li>Garfield</li>
                    <li>Hawthorne</li>
                    <li>Clifton</li>
                    <li>Wayne</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; 2025 All Rights Reserved | New Jersey Cleaning Services</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
