import { Link } from 'react-router-dom'
import { useQuote } from '../context/QuoteContext'
import './Home.css'

const stats = [
  { value: '2,400+', label: 'Installations Complete' },
  { value: '25 yrs', label: 'Panel Warranty' },
  { value: '£1,200', label: 'Avg Annual Savings' },
  { value: 'MCS', label: 'Certified Installer' },
]

const features = [
  {
    icon: '◎',
    title: 'Expert Installation',
    desc: 'Our MCS-certified engineers handle everything from survey to switch-on, guaranteed to code.',
  },
  {
    icon: '⟁',
    title: 'Government Incentives',
    desc: 'Access Smart Export Guarantee (SEG) payments and 0% VAT on solar installations.',
  },
  {
    icon: '◈',
    title: '25-Year Warranty',
    desc: 'Industry-leading panel and inverter warranties, giving you complete peace of mind.',
  },
  {
    icon: '◉',
    title: 'Real-Time Monitoring',
    desc: 'Track your energy production, savings, and carbon offset 24/7 via our smart app.',
  },
  {
    icon: '◐',
    title: 'Battery Storage',
    desc: 'Store surplus solar energy to use at night or during peak tariff times.',
  },
  {
    icon: '◑',
    title: 'Zero-Carbon Future',
    desc: 'Every installation offsets on average 1.3 tonnes of CO₂ per year.',
  },
]

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Bristol',
    quote: 'Green Orb installed our 12-panel system in a single day. Our electricity bill dropped by 80% in the first month.',
    stars: 5,
  },
  {
    name: 'James T.',
    location: 'Manchester',
    quote: 'Professional from first call to final sign-off. The monitoring app is brilliant — I can see every penny saved.',
    stars: 5,
  },
  {
    name: 'Priya K.',
    location: 'London',
    quote: 'Got three quotes, Green Orb were the most transparent and competitive. Already recommending them to neighbours.',
    stars: 5,
  },
]

export default function Home() {
  const { openQuote } = useQuote()
  return (
    <div className="home">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__bg-grid" aria-hidden="true" />
        <div className="container hero__content">
          <span className="section-tag">UK Solar Panel Installer</span>
          <h1>
            Your roof.<br />
            Your power.<br />
            <span className="highlight">Your savings.</span>
          </h1>
          <p className="hero__sub">
            Green Orb Solutions installs premium solar panels across the UK.
            Cut your energy bills, earn from your surplus, and shrink your carbon footprint — starting today.
          </p>
          <div className="hero__actions">
            <button className="btn btn--primary btn--lg" onClick={openQuote}>Get Free Quote</button>
            <Link to="/services" className="btn btn--secondary btn--lg">Our Services</Link>
          </div>
          <p className="hero__note">
            Free survey · No obligation · MCS certified
          </p>
        </div>

        {/* Solar Visual */}
        <div className="hero__visual" aria-hidden="true">
          <div className="solar-orb">
            <div className="solar-orb__ring solar-orb__ring--1" />
            <div className="solar-orb__ring solar-orb__ring--2" />
            <div className="solar-orb__ring solar-orb__ring--3" />
            <div className="solar-orb__core">
              <span>☀</span>
            </div>
            <div className="solar-orb__panel solar-orb__panel--a" />
            <div className="solar-orb__panel solar-orb__panel--b" />
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="stats-bar">
        <div className="container stats-bar__inner">
          {stats.map((s) => (
            <div key={s.label} className="stats-bar__item">
              <span className="stats-bar__value">{s.value}</span>
              <span className="stats-bar__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Green Orb</span>
            <h2>Built for the homes<br />of <span className="highlight">tomorrow</span></h2>
            <p>We make going solar simple, transparent, and rewarding — from your first question to your last panel.</p>
          </div>

          <div className="features-grid">
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <span className="feature-card__icon">{f.icon}</span>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section section--alt how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Process</span>
            <h2>Solar in <span className="highlight">4 steps</span></h2>
            <p>We've streamlined everything so you can go from enquiry to generating power as fast as possible.</p>
          </div>

          <div className="steps">
            {[
              { n: '01', title: 'Free Consultation', desc: "Tell us about your home and energy usage. We'll assess your roof and local conditions remotely." },
              { n: '02', title: 'Site Survey', desc: 'Our engineers visit to confirm the best system size, positioning, and expected output for your property.' },
              { n: '03', title: 'Installation Day', desc: 'A clean, professional installation by MCS-certified engineers. Most homes completed in a single day.' },
              { n: '04', title: 'Go Live', desc: 'Your panels are switched on, your monitoring app is set up, and your savings start from day one.' },
            ].map((step) => (
              <div key={step.n} className="step">
                <span className="step__num">{step.n}</span>
                <div className="step__body">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Testimonials</span>
            <h2>What our customers <span className="highlight">say</span></h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div className="testimonial-card__stars">
                  {'★'.repeat(t.stars)}
                </div>
                <p className="testimonial-card__quote">"{t.quote}"</p>
                <div className="testimonial-card__author">
                  <span className="testimonial-card__name">{t.name}</span>
                  <span className="testimonial-card__loc">{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>Ready to harness<br /><span className="highlight">your roof's potential?</span></h2>
            <p>Get a free, no-obligation quote from our expert team today.</p>
          </div>
          <div className="cta-banner__actions">
            <button className="btn btn--primary btn--lg" onClick={openQuote}>Get Free Quote</button>
            <a href="tel:08001234567" className="btn btn--secondary btn--lg">0800 123 4567</a>
          </div>
        </div>
      </section>

    </div>
  )
}
