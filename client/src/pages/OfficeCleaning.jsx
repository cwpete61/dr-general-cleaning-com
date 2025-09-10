import { Link } from 'react-router-dom'

function OfficeCleaning() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <h1>Office Cleaning Services</h1>
          <p>Maintain a professional work environment with our commercial cleaning services</p>
        </div>
      </div>

      <section className="service-detail">
        <div className="container">
          <div className="service-content">
            <div className="service-image">
              <img src="/api/placeholder/600/400" alt="Professional Office Cleaning" />
            </div>

            <div className="service-description">
              <h2>Professional Commercial Cleaning Solutions</h2>
              <p>
                Create and maintain a pristine professional environment with our comprehensive office cleaning services.
                We specialize in commercial spaces, understanding the importance of a clean workplace for productivity,
                employee health, and creating positive impressions on clients. Our team is trained in commercial cleaning
                protocols and works around your business hours to minimize disruption.
              </p>

              <div className="service-features">
                <h3>What's Included:</h3>
                <ul>
                  <li>Desk and workstation sanitization</li>
                  <li>Common area and break room cleaning</li>
                  <li>Restroom maintenance and restocking</li>
                  <li>Trash removal and recycling management</li>
                  <li>Floor care including vacuuming and mopping</li>
                  <li>Window and glass surface cleaning</li>
                  <li>High-touch surface disinfection</li>
                </ul>
              </div>

              <div className="service-cta">
                <Link to="/contact" className="btn btn-primary">
                  Get a Free Quote
                </Link>
                <a href="tel:(201)893-6802" className="btn btn-outline">
                  Call Now: (201) 893-6802
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="container">
          <h2>Why Choose Our Office Cleaning Service?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">💼</div>
              <h3>Professional Standards</h3>
              <p>Maintain corporate image with consistently clean facilities</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌡️</div>
              <h3>Health & Safety</h3>
              <p>Reduce sick days with thorough sanitization</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⏰</div>
              <h3>After-Hours Service</h3>
              <p>Clean when your business is closed to avoid disruption</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📋</div>
              <h3>Customized Plans</h3>
              <p>Tailored cleaning schedules for your specific needs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>Do you clean during business hours or after hours?</h3>
            <p>
              We offer both options! Many clients prefer after-hours cleaning to avoid disruption,
              but we can also work around your schedule during business hours if needed.
            </p>
          </div>
          <div className="faq-item">
            <h3>What types of offices do you service?</h3>
            <p>
              We clean all types of commercial spaces including corporate offices, medical offices,
              law firms, retail spaces, and more.
            </p>
          </div>
          <div className="faq-item">
            <h3>Are your cleaning products safe for office environments?</h3>
            <p>
              Yes, we use commercial-grade, EPA-approved cleaning products that are effective yet safe
              for office environments and sensitive equipment.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OfficeCleaning
