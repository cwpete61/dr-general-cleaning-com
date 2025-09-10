import { Link } from 'react-router-dom'

function MoveInCleaning() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <h1>Move-In Cleaning Services</h1>
          <p>Start fresh in your new home with our comprehensive move-in cleaning service</p>
        </div>
      </div>

      <section className="service-detail">
        <div className="container">
          <div className="service-content">
            <div className="service-image">
              <img src="/api/placeholder/600/400" alt="Professional Move-In Cleaning" />
            </div>

            <div className="service-description">
              <h2>Fresh Start Cleaning for Your New Home</h2>
              <p>
                Begin your new chapter in a spotless, sanitized home with our comprehensive move-in cleaning service.
                We specialize in preparing vacant properties to move-in ready condition, ensuring every surface is
                thoroughly cleaned and disinfected. Our deep cleaning process removes all traces of previous occupants
                and construction debris, giving you peace of mind as you settle into your new space.
              </p>

              <div className="service-features">
                <h3>What's Included:</h3>
                <ul>
                  <li>Deep sanitization of all surfaces</li>
                  <li>Cabinet and drawer interior cleaning</li>
                  <li>Appliance cleaning (inside and out)</li>
                  <li>Floor treatment and polishing</li>
                  <li>Window and window sill cleaning</li>
                  <li>Light fixture dusting</li>
                  <li>Baseboard and trim cleaning</li>
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
          <h2>Why Choose Our Move-In Cleaning Service?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📦</div>
              <h3>Move-In Ready</h3>
              <p>Start unpacking immediately in a perfectly clean home</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🧼</div>
              <h3>Deep Sanitization</h3>
              <p>Thorough disinfection for health and safety</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⏱️</div>
              <h3>Time-Saving</h3>
              <p>Focus on moving while we handle the cleaning</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔍</div>
              <h3>Attention to Detail</h3>
              <p>We clean areas often missed in regular cleaning</p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>When should I schedule move-in cleaning?</h3>
            <p>
              Schedule your move-in cleaning after the previous tenants have moved out but before you move your belongings in.
              This ensures we can access all areas for a thorough cleaning.
            </p>
          </div>
          <div className="faq-item">
            <h3>Do you clean empty homes only?</h3>
            <p>
              Yes, move-in cleaning is designed for vacant properties. For cleaning with belongings present,
              please see our regular house cleaning service.
            </p>
          </div>
          <div className="faq-item">
            <h3>How long does move-in cleaning take?</h3>
            <p>
              Typically 4-6 hours for an average-sized home, depending on the condition and level of cleaning required.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MoveInCleaning
