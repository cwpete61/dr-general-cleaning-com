import { Link } from 'react-router-dom'

function MoveOutCleaning() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <h1>Move-Out Cleaning Services</h1>
          <p>Ensure you get your deposit back with our thorough move-out cleaning</p>
        </div>
      </div>

      <section className="service-detail">
        <div className="container">
          <div className="service-content">
            <div className="service-image">
              <img src="/api/placeholder/600/400" alt="Professional Move-Out Cleaning" />
            </div>

            <div className="service-description">
              <h2>Security Deposit Protection Cleaning</h2>
              <p>
                Maximize your chances of getting your full security deposit back with our comprehensive move-out cleaning service.
                We specialize in restoring rental properties to their original move-in condition, addressing all the areas
                landlords and property managers inspect. Our thorough cleaning meets the highest standards required for
                security deposit returns.
              </p>

              <div className="service-features">
                <h3>What's Included:</h3>
                <ul>
                  <li>Security deposit protection cleaning</li>
                  <li>Complete deep clean of entire property</li>
                  <li>Damage assessment and minor repair identification</li>
                  <li>Final walkthrough preparation</li>
                  <li>Appliance deep cleaning</li>
                  <li>Carpet cleaning and stain removal</li>
                  <li>Wall and ceiling cleaning</li>
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
          <h2>Why Choose Our Move-Out Cleaning Service?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Deposit Protection</h3>
              <p>Maximize your chances of full security deposit return</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✅</div>
              <h3>Landlord Approved</h3>
              <p>Meets property management cleaning standards</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📋</div>
              <h3>Checklist Compliance</h3>
              <p>We follow landlord inspection checklists</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🚚</div>
              <h3>Stress-Free Moving</h3>
              <p>Focus on your move while we handle the cleaning</p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>When should I schedule move-out cleaning?</h3>
            <p>
              Schedule your move-out cleaning after you've removed all your belongings but before your final walkthrough
              with the landlord. This ensures we can access all areas for a thorough cleaning.
            </p>
          </div>
          <div className="faq-item">
            <h3>Do you guarantee I'll get my deposit back?</h3>
            <p>
              While we can't guarantee specific outcomes, our cleaning meets the highest standards that landlords expect.
              We've helped countless clients successfully recover their security deposits.
            </p>
          </div>
          <div className="faq-item">
            <h3>What if the landlord finds issues after cleaning?</h3>
            <p>
              We offer a satisfaction guarantee and will return to address any legitimate cleaning concerns noted by your landlord
              within 24 hours of the initial service.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MoveOutCleaning
