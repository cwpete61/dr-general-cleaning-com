function About({ detailed = false }) {
  const benefits = [
    {
      title: "Health Improvement",
      description: "Reduces allergens such as dust and pet dander that can cause respiratory issues.",
      icon: "🏥"
    },
    {
      title: "Longevity of Home Furnishings",
      description: "Prevents the buildup of grime and stains that can damage surfaces and fabrics, extending their life.",
      icon: "🛋️"
    },
    {
      title: "Safety Enhancement",
      description: "Keeps floors and walkways free of clutter, reducing the risk of trips and falls.",
      icon: "🛡️"
    },
    {
      title: "Pest Prevention",
      description: "Maintains cleanliness in critical areas like kitchens and bathrooms, deterring pest infestations.",
      icon: "🐛"
    },
    {
      title: "Improved Indoor Air Quality",
      description: "Regular vacuuming and dusting remove airborne particles that can degrade air quality.",
      icon: "🌬️"
    }
  ]

  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <h2>Why Regular <span className="highlight">House Cleaning is Essential</span></h2>
              <p>Regular house cleaning is essential for several practical reasons:</p>
            </div>

            {detailed && (
              <div className="about-details">
                <p>
                  At New Jersey Cleaning Services, we understand that your home is your sanctuary.
                  Our professional cleaning team is dedicated to providing top-quality cleaning services
                  that transform your living space into a pristine, healthy environment.
                </p>
                <p>
                  With years of experience serving the New Jersey area, we've built our reputation on
                  reliability, attention to detail, and customer satisfaction. Our trained professionals
                  use eco-friendly products and proven techniques to ensure your home is not just clean,
                  but truly refreshed.
                </p>
              </div>
            )}
          </div>

          <div className="benefits-grid">
            {benefits.slice(0, detailed ? benefits.length : 3).map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>

          {!detailed && (
            <div className="section-cta">
              <a href="/about" className="btn btn-primary">
                Learn More About Us
              </a>
            </div>
          )}
        </div>

        {detailed && (
          <div className="when-to-clean">
            <h3>When to Consider <span className="highlight">Deep Cleaning Service</span></h3>
            <div className="cleaning-indicators">
              <div className="indicator">
                <span className="check-icon">✓</span>
                Visible build-up of dust and allergens on surfaces affecting indoor air quality.
              </div>
              <div className="indicator">
                <span className="check-icon">✓</span>
                Persistent odors that regular cleaning doesn't eliminate, indicating hidden grime or mold.
              </div>
              <div className="indicator">
                <span className="check-icon">✓</span>
                Increased allergy symptoms among household members, suggesting the presence of dust mites or pet dander.
              </div>
              <div className="indicator">
                <span className="check-icon">✓</span>
                A noticeable decline in the overall freshness and appearance of your home, especially in high-traffic areas.
              </div>
              <div className="indicator">
                <span className="check-icon">✓</span>
                It's been over six months since the last deep clean, aligning with recommended cleaning frequencies.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default About
