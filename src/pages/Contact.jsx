import { useState } from 'react'
import './Contact.css'

const contactDetails = [
  {
    icon: '📞',
    label: 'Phone',
    value: '0800 123 4567',
    sub: 'Mon–Fri 8am–6pm, Sat 9am–4pm',
    href: 'tel:08001234567',
  },
  {
    icon: '✉',
    label: 'Email',
    value: 'info@greenorbsolutions.co.uk',
    sub: 'We respond within 24 hours',
    href: 'mailto:info@greenorbsolutions.co.uk',
  },
  {
    icon: '📍',
    label: 'Address',
    value: '14 Solar Way, London, EC1A 1BB',
    sub: 'Installing across England & Wales',
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  return (
    <div className="contact">

      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero__bg-grid" aria-hidden="true" />
        <div className="container page-hero__content">
          <span className="section-tag">Get In Touch</span>
          <h1>Let's power<br /><span className="highlight">your home</span></h1>
          <p>Get your free, no-obligation quote today. Our team typically responds within 2 hours on business days.</p>
        </div>
      </section>

      {/* ── Contact Layout ── */}
      <section className="section">
        <div className="container contact__layout">

          {/* Form */}
          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success">
                <span className="contact__success-icon">✓</span>
                <h3>Message received!</h3>
                <p>Thanks, {form.name.split(' ')[0]}. One of our solar advisors will be in touch within 2 hours on business days.</p>
                <button className="btn btn--secondary" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }) }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <h3>Request a free quote</h3>
                <p>Fill in the form below and we'll get back to you with a tailored solar quote.</p>

                <div className="form-row">
                  <div className={`form-group${errors.name ? ' form-group--error' : ''}`}>
                    <label htmlFor="name">Full Name <span>*</span></label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="Jane Smith"
                      value={form.name} onChange={handleChange}
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>

                  <div className={`form-group${errors.email ? ' form-group--error' : ''}`}>
                    <label htmlFor="email">Email Address <span>*</span></label>
                    <input
                      id="email" name="email" type="email"
                      placeholder="jane@example.com"
                      value={form.email} onChange={handleChange}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="07700 900000"
                      value={form.phone} onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service of Interest</label>
                    <select id="service" name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a service</option>
                      <option value="solar-panels">Solar Panel Installation</option>
                      <option value="battery-storage">Battery Storage</option>
                      <option value="solar-battery">Solar + Battery Bundle</option>
                      <option value="monitoring">Monitoring & Aftercare</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className={`form-group${errors.message ? ' form-group--error' : ''}`}>
                  <label htmlFor="message">Message <span>*</span></label>
                  <textarea
                    id="message" name="message" rows="5"
                    placeholder="Tell us about your home, roof type, and energy goals..."
                    value={form.message} onChange={handleChange}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn--primary btn--lg contact-form__submit">
                  Send Message →
                </button>

                <p className="contact-form__note">
                  By submitting this form you agree to be contacted by Green Orb Solutions Ltd regarding your enquiry. We never share your data.
                </p>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div className="contact__info">
            <div className="contact__details">
              {contactDetails.map((d) => (
                <div key={d.label} className="contact-detail">
                  <span className="contact-detail__icon">{d.icon}</span>
                  <div>
                    <span className="contact-detail__label">{d.label}</span>
                    {d.href ? (
                      <a href={d.href} className="contact-detail__value">{d.value}</a>
                    ) : (
                      <span className="contact-detail__value">{d.value}</span>
                    )}
                    <span className="contact-detail__sub">{d.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__certs">
              <p className="contact__certs-title">Accreditations & Certifications</p>
              <div className="contact__certs-list">
                {['MCS Certified', 'NICEIC Approved', 'Which? Trusted', 'Gas Safe', 'HIES Member'].map(c => (
                  <span key={c} className="cert-badge">{c}</span>
                ))}
              </div>
            </div>

            <div className="contact__hours">
              <p className="contact__certs-title">Opening Hours</p>
              <div className="hours-list">
                <div className="hours-row"><span>Monday – Friday</span><span>8:00am – 6:00pm</span></div>
                <div className="hours-row"><span>Saturday</span><span>9:00am – 4:00pm</span></div>
                <div className="hours-row"><span>Sunday</span><span>Closed</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map placeholder ── */}
      <div className="map-placeholder">
        <div className="container">
          <div className="map-inner">
            <span className="map-pin">📍</span>
            <p>Green Orb Solutions Ltd · 14 Solar Way · London EC1A 1BB</p>
            <p>Installing solar panels across England & Wales</p>
          </div>
        </div>
      </div>

    </div>
  )
}
