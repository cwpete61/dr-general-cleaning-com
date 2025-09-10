import { Link } from 'react-router-dom'

function HouseCleaning() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <h1>House Cleaning Services</h1>
          <p>Complete transformation of your living space with our full-room cleaning service</p>
        </div>
      </div>

      <section className="service-detail">
        <div className="container">
          <div className="service-content">
            <div className="service-image">
              <img src="/api/placeholder/600/400" alt="Professional House Cleaning" />
            </div>

            <div className="service-description">
              <h2>Comprehensive House Cleaning for Every Room</h2>
              <p>
                Experience a complete transformation of your living space with our full-room cleaning service.
                Our team excels in revitalizing every area of your home, from the kitchen to the bedroom,
                ensuring meticulous attention to detail. Enjoy the benefits of a thoroughly cleaned environment
                where every surface sparkles and every corner is dust-free, enhancing both comfort and hygiene.
              </p>

              <div className="service-features">
                <h3>What's Included:</h3>
                <ul>
                  <li>Kitchen deep clean and sanitization</li>
                  <li>Bathroom thorough cleaning and disinfection</li>
                  <li>Bedroom organization and dusting</li>
                  <li>Living area comprehensive cleaning</li>
                  <li>Floor vacuuming and mopping</li>
                  <li>Window and mirror cleaning</li>
                  <li>Dusting of all surfaces and fixtures</li>
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
          <h2>Why Choose Our House Cleaning Service?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🏠</div>
              <h3>Complete Home Coverage</h3>
              <p>We clean every room in your house, leaving no corner untouched</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⏰</div>
              <h3>Flexible Scheduling</h3>
              <p>Choose cleaning times that work best for your schedule</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌿</div>
              <h3>Eco-Friendly Products</h3>
              <p>We use environmentally safe cleaning solutions</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✅</div>
              <h3>Satisfaction Guaranteed</h3>
              <p>100% satisfaction guarantee on all our services</p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>How long does a typical house cleaning take?</h3>
            <p>
              The duration depends on the size of your home and the level of cleaning required.
              Typically, a standard cleaning for a 3-bedroom house takes 3-4 hours.
            </p>
          </div>
          <div className="faq-item">
            <h3>Do I need to provide cleaning supplies?</h3>
            <p>
              No, our professional team brings all necessary equipment and eco-friendly cleaning supplies.
            </p>
          </div>
          <div className="faq-item">
            <h3>Are your cleaners background checked?</h3>
            <p>
              Yes, all our cleaning professionals undergo thorough background checks and are fully insured.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HouseCleaning
