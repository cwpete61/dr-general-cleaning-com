import { Link } from 'react-router-dom'

function PostConstructionCleaning() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <h1>Post-Construction Cleaning Services</h1>
          <p>Remove construction debris and dust for a pristine finished space</p>
        </div>
      </div>

      <section className="service-detail">
        <div className="container">
          <div className="service-content">
            <div className="service-image">
              <img src="/api/placeholder/600/400" alt="Professional Post-Construction Cleaning" />
            </div>

            <div className="service-description">
              <h2>Construction Cleanup for Your New Space</h2>
              <p>
                Transform your construction site into a move-in ready space with our specialized post-construction cleaning service.
                We expertly remove all construction debris, dust, and residue left behind by contractors, ensuring your newly
                renovated or built space is perfectly clean and safe. Our team is trained in handling construction cleanup
                with the proper equipment and techniques to tackle even the most challenging post-construction messes.
              </p>

              <div className="service-features">
                <h3>What's Included:</h3>
                <ul>
                  <li>Construction dust removal from all surfaces</li>
                  <li>Debris cleanup and disposal</li>
                  <li>Window and glass cleaning</li>
                  <li>Final detailing and touch-ups</li>
                  <li>Floor cleaning and polishing</li>
                  <li>Cabinet and fixture cleaning</li>
                  <li>HVAC system dust removal</li>
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
          <h2>Why Choose Our Post-Construction Cleaning Service?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🔨</div>
              <h3>Construction Expertise</h3>
              <p>Specialized in handling post-construction cleanup</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌫️</div>
              <h3>Dust Elimination</h3>
              <p>Thorough removal of fine construction dust</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h3>Surface Protection</h3>
              <p>Safe cleaning methods for new surfaces and finishes</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Quick Turnaround</h3>
              <p>Get your space ready for occupancy faster</p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>When should post-construction cleaning be scheduled?</h3>
            <p>
              Schedule post-construction cleaning after all contractors have completed their work but before furniture
              and belongings are moved in. This ensures we can access all areas for a thorough cleaning.
            </p>
          </div>
          <div className="faq-item">
            <h3>Do you handle hazardous construction materials?</h3>
            <p>
              We handle standard construction debris and dust. For hazardous materials like asbestos or lead paint,
              specialized remediation services are required before we can clean.
            </p>
          </div>
          <div className="faq-item">
            <h3>How many cleaning phases are needed for construction cleanup?</h3>
            <p>
              Most projects require 2-3 phases: initial debris removal, detailed dust cleaning, and final touch-up cleaning
              to ensure perfection.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PostConstructionCleaning
