function Services({ detailed = false }) {
  const services = [
    {
      title: "House Cleaning",
      description: "Complete transformation of your living space with full-room cleaning service.",
      icon: "🏠",
      features: ["Kitchen deep clean", "Bathroom sanitization", "Bedroom organization", "Living area dusting"]
    },
    {
      title: "Apartment Cleaning",
      description: "Professional cleaning solutions tailored for apartment living spaces.",
      icon: "🏢",
      features: ["Compact space optimization", "Quick turnaround", "Flexible scheduling", "Move-in ready cleaning"]
    },
    {
      title: "Office Cleaning",
      description: "Maintain a professional work environment with our commercial cleaning services.",
      icon: "💼",
      features: ["Desk sanitization", "Common area cleaning", "Restroom maintenance", "Trash removal"]
    },
    {
      title: "Move-In Cleaning",
      description: "Start fresh in your new home with our comprehensive move-in cleaning service.",
      icon: "📦",
      features: ["Deep sanitization", "Cabinet cleaning", "Appliance cleaning", "Floor treatment"]
    },
    {
      title: "Move-Out Cleaning",
      description: "Ensure you get your deposit back with our thorough move-out cleaning.",
      icon: "🚚",
      features: ["Security deposit protection", "Complete deep clean", "Damage assessment", "Final walkthrough"]
    },
    {
      title: "Post-Construction Cleaning",
      description: "Remove construction debris and dust for a pristine finished space.",
      icon: "🔨",
      features: ["Dust removal", "Debris cleanup", "Window cleaning", "Final detailing"]
    }
  ]

  return (
    <section className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our <span className="highlight">Cleaning Services</span></h2>
          <p>Professional cleaning solutions for homes and businesses in New Jersey</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              {detailed && (
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              <a href="/contact" className="btn btn-outline">
                Get Quote
              </a>
            </div>
          ))}
        </div>

        {!detailed && (
          <div className="section-cta">
            <a href="/services" className="btn btn-primary">
              View All Services
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default Services
