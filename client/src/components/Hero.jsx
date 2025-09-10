function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Deep House Cleaning Services <span className="highlight">Glen Rock, NJ</span>
          </h1>
          <p className="hero-subtitle">
            Experience a complete transformation of your living space with our professional cleaning services.
            We excel in revitalizing every area of your home with meticulous attention to detail.
          </p>
          <div className="hero-cta">
            <a href="tel:(201)893-6802" className="btn btn-primary btn-large">
              Call Us Now!
            </a>
            <a href="/contact" className="btn btn-secondary btn-large">
              Get Free Quote
            </a>
          </div>
          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span>Licensed & Insured</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span>Eco-Friendly Products</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span>Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
