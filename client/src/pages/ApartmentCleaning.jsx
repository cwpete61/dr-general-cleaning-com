import { Link } from 'react-router-dom'

function ApartmentCleaning() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <h1>Apartment Cleaning Services</h1>
          <p>Professional cleaning solutions tailored for apartment living spaces</p>
        </div>
      </div>

      <section className="service-detail">
        <div className="container">
          <div className="service-content">
            <div className="service-image">
              <img src="/api/placeholder/600/400" alt="Professional Apartment Cleaning" />
            </div>

            <div className="service-description">
              <h2>Specialized Apartment Cleaning Solutions</h2>
              <p>
                Our apartment cleaning service is specifically designed for the unique needs of apartment living.
                We understand the challenges of maintaining cleanliness in compact spaces and provide efficient,
                thorough cleaning that maximizes your living area. Our team works quickly and effectively to
                transform your apartment into a pristine, comfortable home.
              </p>

              <div className="service-features">
                <h3>What's Included:</h3>
                <ul>
                  <li>Compact space optimization and organization</li>
                  <li>Quick turnaround cleaning sessions</li>
                  <li>Flexible scheduling around your availability</li>
                  <li>Move-in/move-out ready cleaning</li>
                  <li>Kitchen and bathroom deep cleaning</li>
                  <li>Floor care and surface dusting</li>
                  <li>Window and mirror cleaning</li>
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
          <h2>Why Choose Our Apartment Cleaning Service?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🏢</div>
              <h3>Space-Optimized</h3>
              <p>Specialized techniques for efficient apartment cleaning</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Quick Service</h3>
              <p>Fast and efficient cleaning perfect for busy apartment dwellers</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔑</div>
              <h3>Move-In Ready</h3>
              <p>Perfect for preparing apartments for new tenants</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Security Deposit Protection</h3>
              <p>Thorough cleaning to ensure deposit returns</p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>How long does apartment cleaning take compared to house cleaning?</h3>
            <p>
              Apartment cleaning typically takes 2-3 hours for a standard one-bedroom unit,
              as we're optimized for efficient cleaning in compact spaces.
            </p>
          </div>
          <div className="faq-item">
            <h3>Do you work with property managers?</h3>
            <p>
              Yes, we frequently work with property management companies for move-in/move-out
              cleaning and regular maintenance cleaning.
            </p>
          </div>
          <div className="faq-item">
            <h3>Can you clean apartments while tenants are present?</h3>
            <p>
              Absolutely! We're flexible and can work around your schedule, whether you're home or not.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ApartmentCleaning
