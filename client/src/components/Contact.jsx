import { useState } from 'react'

function Contact({ detailed = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will contact you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  return (
    <section className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Schedule Your <span className="highlight">Professional House Cleaning Today</span></h2>
          <p>Ready for a spotless home? Contact New Jersey Cleaning Services now to schedule your professional cleaning session.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <h3>Call Us</h3>
                <a href="tel:(201)893-6802">(201) 893-6802</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h3>Address</h3>
                <a href="https://www.google.com/maps/place/New+Jersey+Cleaning+Services" target="_blank" rel="noopener noreferrer">
                  153 Sherman Pl Garfield, NJ 7026
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🕒</div>
              <div className="contact-details">
                <h3>Business Hours</h3>
                <div className="hours">
                  <p>Mon - Fri: 8:00AM - 5:00PM</p>
                  <p>Sat: 9:00AM - 2:00PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>

            {detailed && (
              <div className="service-areas">
                <h3>Areas We Serve</h3>
                <div className="areas-grid">
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
            )}
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Get Your Free Estimate</h3>

              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="house-cleaning">House Cleaning</option>
                  <option value="apartment-cleaning">Apartment Cleaning</option>
                  <option value="office-cleaning">Office Cleaning</option>
                  <option value="move-in-cleaning">Move-In Cleaning</option>
                  <option value="move-out-cleaning">Move-Out Cleaning</option>
                  <option value="post-construction">Post-Construction Cleaning</option>
                </select>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell us about your cleaning needs..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-large">
                Get Free Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
