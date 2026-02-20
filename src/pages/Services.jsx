import { Link } from 'react-router-dom'
import { useQuote } from '../context/QuoteContext'
import './Services.css'

const packages = [
  {
    name: 'Starter',
    panels: '6 Panels',
    output: '2.4 kWp',
    saving: 'Up to £650/yr',
    features: [
      '6 × 400W monocrystalline panels',
      'SolarEdge string inverter',
      '25-year panel warranty',
      'Smart monitoring app',
      'MCS certified installation',
      'Scaffolding & electrical work',
    ],
    highlight: false,
  },
  {
    name: 'Popular',
    panels: '12 Panels',
    output: '4.8 kWp',
    saving: 'Up to £1,200/yr',
    features: [
      '12 × 400W monocrystalline panels',
      'SolarEdge optimiser system',
      '25-year panel warranty',
      '10-year inverter warranty',
      'Smart monitoring app',
      'MCS certified installation',
      'Scaffolding & electrical work',
      'SEG export registration',
    ],
    highlight: true,
  },
  {
    name: 'Premium',
    panels: '18 Panels',
    output: '7.2 kWp',
    saving: 'Up to £1,800/yr',
    features: [
      '18 × 400W monocrystalline panels',
      'SolarEdge optimiser system',
      '5.12 kWh battery storage',
      '25-year panel warranty',
      '10-year inverter & battery warranty',
      'Smart monitoring app',
      'MCS certified installation',
      'Scaffolding & electrical work',
      'SEG export registration',
    ],
    highlight: false,
  },
]

const benefits = [
  { icon: '⚡', title: 'Cut Your Bills', desc: 'Generate your own free electricity during daylight hours and reduce reliance on the grid.' },
  { icon: '£', title: 'Earn From Surplus', desc: 'Sell excess energy back to the grid via the Smart Export Guarantee (SEG) scheme.' },
  { icon: '🌍', title: 'Go Green', desc: 'Each 4kWp system offsets around 1.3 tonnes of CO₂ annually — the same as planting 60 trees.' },
  { icon: '🏠', title: 'Add Property Value', desc: 'Solar installations increase the average UK home value by up to 4%.' },
]

const faqs = [
  {
    q: 'Is my roof suitable for solar panels?',
    a: 'Most UK roofs are suitable. South, southeast, or southwest-facing roofs at 30–45° pitch are ideal. We carry out a full roof and shading assessment during your free survey.',
  },
  {
    q: 'How long does installation take?',
    a: 'A typical residential installation takes 1–2 days. Our team handles scaffolding, panel mounting, cabling, and grid connection — leaving your home clean and tidy.',
  },
  {
    q: 'What warranties do I get?',
    a: 'Our solar panels carry a 25-year performance warranty, inverters carry a 10-year warranty, and installation is guaranteed for 10 years under our workmanship warranty.',
  },
  {
    q: 'Do I need planning permission?',
    a: 'In most cases, solar panels fall under Permitted Development and don\'t require planning permission. We\'ll advise you if your property is in a conservation area or listed building.',
  },
  {
    q: 'What is the Smart Export Guarantee (SEG)?',
    a: 'The SEG requires energy suppliers with 150,000+ customers to pay you for surplus electricity exported to the grid. We handle SEG registration as part of every installation.',
  },
  {
    q: 'Will the panels work on cloudy days?',
    a: 'Yes. Solar panels generate electricity from daylight, not direct sunlight. They still produce around 25% of their peak output on overcast days.',
  },
]

export default function Services() {
  const { openQuote } = useQuote()
  return (
    <div className="services">

      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero__bg-grid" aria-hidden="true" />
        <div className="container page-hero__content">
          <span className="section-tag">Solar Panel Solutions</span>
          <h1>Clean energy,<br /><span className="highlight">built for your home</span></h1>
          <p>From compact starter kits to full-home premium systems with battery storage, Green Orb designs and installs the right solar solution for you.</p>
          <div className="page-hero__actions">
            <button className="btn btn--primary btn--lg" onClick={openQuote}>Get Free Quote</button>
            <a href="tel:08001234567" className="btn btn--secondary btn--lg">Call 0800 123 4567</a>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Solar</span>
            <h2>Why thousands of UK homes<br />are choosing <span className="highlight">solar</span></h2>
          </div>

          <div className="benefits-grid">
            {benefits.map((b) => (
              <div key={b.title} className="benefit-card">
                <span className="benefit-card__icon">{b.icon}</span>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Packages</span>
            <h2>Choose your <span className="highlight">system</span></h2>
            <p>All packages include MCS-certified installation, scaffolding, and lifetime monitoring. Get a precise quote tailored to your roof.</p>
          </div>

          <div className="packages-grid">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`package-card${pkg.highlight ? ' package-card--featured' : ''}`}>
                {pkg.highlight && (
                  <div className="package-card__badge">Most Popular</div>
                )}
                <div className="package-card__header">
                  <span className="package-card__name">{pkg.name}</span>
                  <span className="package-card__panels">{pkg.panels}</span>
                  <div className="package-card__output">{pkg.output}</div>
                  <div className="package-card__saving">{pkg.saving}</div>
                </div>
                <ul className="package-card__features">
                  {pkg.features.map((f) => (
                    <li key={f}>
                      <span className="check">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className={`btn ${pkg.highlight ? 'btn--primary' : 'btn--secondary'}`} onClick={openQuote}>
                  Get This System
                </button>
              </div>
            ))}
          </div>

          <p className="packages-note">
            All prices subject to a free site survey. Finance options available. 0% VAT applies to all residential solar installations.
          </p>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">How It Works</span>
            <h2>From quote to<br /><span className="highlight">live in days</span></h2>
          </div>

          <div className="process-grid">
            {[
              { n: '01', title: 'Free Consultation', desc: 'Call us or fill out our online form. We\'ll discuss your energy usage, roof type, and goals — no pressure, no jargon.' },
              { n: '02', title: 'Site Survey', desc: 'A certified engineer visits to assess your roof structure, orientation, shading, and electrical setup.' },
              { n: '03', title: 'System Design', desc: 'We design a bespoke system maximising output for your specific roof, with a detailed savings forecast.' },
              { n: '04', title: 'Installation', desc: 'Our team installs everything in 1–2 days. We handle scaffolding, panels, inverter, and grid connection.' },
              { n: '05', title: 'Go Live', desc: 'Panels activated, monitoring app configured, and SEG registered. Your savings start from day one.' },
              { n: '06', title: 'Aftercare', desc: 'Annual health checks, 24/7 monitoring alerts, and a UK-based support team for the life of your system.' },
            ].map((s) => (
              <div key={s.n} className="process-card">
                <span className="process-card__num">{s.n}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">FAQ</span>
            <h2>Common <span className="highlight">questions</span></h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.q} className="faq-item">
                <summary className="faq-item__q">{faq.q}</summary>
                <p className="faq-item__a">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>Ready to get started?<br /><span className="highlight">It starts with a free call.</span></h2>
            <p>Our experts are ready to design the perfect solar system for your home.</p>
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
