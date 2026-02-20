import { useState, useEffect, useCallback } from 'react'
import { useQuote } from '../context/QuoteContext'
import './QuoteModal.css'

/* ─── Step definitions ─── */
const STEPS = [
  { id: 'property',  title: 'Your Property',   subtitle: 'Tell us about your home' },
  { id: 'roof',      title: 'Your Roof',        subtitle: 'Help us understand your roof setup' },
  { id: 'energy',    title: 'Your Energy Use',  subtitle: 'How much energy does your home use?' },
  { id: 'location',  title: 'Your Location',    subtitle: 'Where is your property?' },
  { id: 'contact',   title: 'Your Details',     subtitle: 'How can we reach you with your quote?' },
]

const INIT_DATA = {
  propertyType: '',
  ownership: '',
  roofOrientation: '',
  roofPitch: '',
  roofCondition: '',
  monthlyBill: '',
  daytimeUsage: '',
  batteryInterest: '',
  postcode: '',
  name: '',
  email: '',
  phone: '',
}

/* ─── Option card sub-component ─── */
function OptionCard({ selected, onClick, icon, label, desc }) {
  return (
    <button
      type="button"
      className={`option-card${selected ? ' option-card--selected' : ''}`}
      onClick={onClick}
    >
      {icon && <span className="option-card__icon">{icon}</span>}
      <span className="option-card__label">{label}</span>
      {desc && <span className="option-card__desc">{desc}</span>}
      <span className="option-card__check">✓</span>
    </button>
  )
}

/* ─── Individual steps ─── */
function StepProperty({ data, update }) {
  const types = [
    { value: 'detached',      icon: '🏠', label: 'Detached House' },
    { value: 'semi',          icon: '🏘', label: 'Semi-Detached' },
    { value: 'terraced',      icon: '🏚', label: 'Terraced House' },
    { value: 'bungalow',      icon: '🏡', label: 'Bungalow' },
    { value: 'flat',          icon: '🏢', label: 'Flat / Apartment' },
    { value: 'commercial',    icon: '🏭', label: 'Commercial' },
  ]
  const owns = [
    { value: 'own',    label: 'I own the property', desc: 'Freehold or mortgage' },
    { value: 'renting', label: 'I rent the property', desc: 'With landlord permission' },
  ]
  return (
    <div className="step-content">
      <div className="step-field">
        <label className="step-label">Property type</label>
        <div className="option-grid option-grid--3">
          {types.map(t => (
            <OptionCard
              key={t.value}
              selected={data.propertyType === t.value}
              onClick={() => update('propertyType', t.value)}
              icon={t.icon}
              label={t.label}
            />
          ))}
        </div>
      </div>
      <div className="step-field">
        <label className="step-label">Do you own or rent?</label>
        <div className="option-grid option-grid--2">
          {owns.map(o => (
            <OptionCard
              key={o.value}
              selected={data.ownership === o.value}
              onClick={() => update('ownership', o.value)}
              label={o.label}
              desc={o.desc}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function StepRoof({ data, update }) {
  const orientations = [
    { value: 'south',     icon: '⬇', label: 'South',          desc: 'Best output' },
    { value: 'southeast', icon: '↙', label: 'South-East',     desc: 'Very good' },
    { value: 'southwest', icon: '↘', label: 'South-West',     desc: 'Very good' },
    { value: 'east',      icon: '⬅', label: 'East',           desc: 'Good' },
    { value: 'west',      icon: '➡', label: 'West',           desc: 'Good' },
    { value: 'north',     icon: '⬆', label: 'North',          desc: 'Less ideal' },
  ]
  const pitches = [
    { value: 'flat',   label: 'Flat Roof',       desc: '0–10°' },
    { value: 'low',    label: 'Low Pitch',        desc: '10–30°' },
    { value: 'medium', label: 'Medium Pitch',     desc: '30–45° — ideal' },
    { value: 'steep',  label: 'Steep Pitch',      desc: '45°+' },
  ]
  const conditions = [
    { value: 'good',       label: 'Good Condition',    desc: 'No known issues' },
    { value: 'minor',      label: 'Minor Issues',       desc: 'Small repairs needed' },
    { value: 'unsure',     label: "I'm Not Sure",       desc: "We'll check during survey" },
  ]
  return (
    <div className="step-content">
      <div className="step-field">
        <label className="step-label">Which direction does your roof face?</label>
        <div className="option-grid option-grid--3">
          {orientations.map(o => (
            <OptionCard
              key={o.value}
              selected={data.roofOrientation === o.value}
              onClick={() => update('roofOrientation', o.value)}
              icon={o.icon}
              label={o.label}
              desc={o.desc}
            />
          ))}
        </div>
      </div>
      <div className="step-field">
        <label className="step-label">Roof pitch</label>
        <div className="option-grid option-grid--4">
          {pitches.map(p => (
            <OptionCard
              key={p.value}
              selected={data.roofPitch === p.value}
              onClick={() => update('roofPitch', p.value)}
              label={p.label}
              desc={p.desc}
            />
          ))}
        </div>
      </div>
      <div className="step-field">
        <label className="step-label">Roof condition</label>
        <div className="option-grid option-grid--3">
          {conditions.map(c => (
            <OptionCard
              key={c.value}
              selected={data.roofCondition === c.value}
              onClick={() => update('roofCondition', c.value)}
              label={c.label}
              desc={c.desc}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function StepEnergy({ data, update }) {
  const bills = [
    { value: 'under50',   label: 'Under £50',   desc: 'per month' },
    { value: '50to100',   label: '£50 – £100',  desc: 'per month' },
    { value: '100to150',  label: '£100 – £150', desc: 'per month' },
    { value: '150to200',  label: '£150 – £200', desc: 'per month' },
    { value: 'over200',   label: 'Over £200',   desc: 'per month' },
    { value: 'unsure',    label: "I'm Not Sure", desc: '' },
  ]
  const usage = [
    { value: 'daytime',  icon: '☀', label: 'Mostly Daytime',   desc: 'Home all day / WFH' },
    { value: 'evening',  icon: '🌙', label: 'Mostly Evening',   desc: 'Out during the day' },
    { value: 'mixed',    icon: '⚡', label: 'Mixed Usage',       desc: 'Varies day to day' },
  ]
  const battery = [
    { value: 'yes',    label: 'Yes, I am',       desc: 'Store surplus energy for evenings' },
    { value: 'maybe',  label: 'Maybe Later',      desc: "I'd like to know more" },
    { value: 'no',     label: 'Just Solar',       desc: 'Panels only for now' },
  ]
  return (
    <div className="step-content">
      <div className="step-field">
        <label className="step-label">What is your average monthly electricity bill?</label>
        <div className="option-grid option-grid--3">
          {bills.map(b => (
            <OptionCard
              key={b.value}
              selected={data.monthlyBill === b.value}
              onClick={() => update('monthlyBill', b.value)}
              label={b.label}
              desc={b.desc}
            />
          ))}
        </div>
      </div>
      <div className="step-field">
        <label className="step-label">When does your home use most electricity?</label>
        <div className="option-grid option-grid--3">
          {usage.map(u => (
            <OptionCard
              key={u.value}
              selected={data.daytimeUsage === u.value}
              onClick={() => update('daytimeUsage', u.value)}
              icon={u.icon}
              label={u.label}
              desc={u.desc}
            />
          ))}
        </div>
      </div>
      <div className="step-field">
        <label className="step-label">Interested in battery storage?</label>
        <div className="option-grid option-grid--3">
          {battery.map(b => (
            <OptionCard
              key={b.value}
              selected={data.batteryInterest === b.value}
              onClick={() => update('batteryInterest', b.value)}
              label={b.label}
              desc={b.desc}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function StepLocation({ data, update, errors }) {
  return (
    <div className="step-content">
      <div className="step-field">
        <label className="step-label">Property postcode</label>
        <p className="step-hint">We use your postcode to check local solar irradiance and estimate your annual output.</p>
        <div className={`postcode-input-wrap${errors.postcode ? ' has-error' : ''}`}>
          <input
            type="text"
            className="postcode-input"
            placeholder="e.g. EC1A 1BB"
            value={data.postcode}
            onChange={e => update('postcode', e.target.value.toUpperCase())}
            maxLength={8}
          />
        </div>
        {errors.postcode && <span className="field-error">{errors.postcode}</span>}
        <div className="postcode-note">
          <span className="note-icon">🔒</span>
          Your postcode is only used for solar calculations — never shared.
        </div>
      </div>
    </div>
  )
}

function StepContact({ data, update, errors }) {
  return (
    <div className="step-content">
      <div className="step-field">
        <label className="step-label" htmlFor="q-name">Full Name <span>*</span></label>
        <input
          id="q-name"
          className={`q-input${errors.name ? ' q-input--error' : ''}`}
          type="text"
          placeholder="Jane Smith"
          value={data.name}
          onChange={e => update('name', e.target.value)}
        />
        {errors.name && <span className="field-error">{errors.name}</span>}
      </div>

      <div className="step-field">
        <label className="step-label" htmlFor="q-email">Email Address <span>*</span></label>
        <input
          id="q-email"
          className={`q-input${errors.email ? ' q-input--error' : ''}`}
          type="email"
          placeholder="jane@example.com"
          value={data.email}
          onChange={e => update('email', e.target.value)}
        />
        {errors.email && <span className="field-error">{errors.email}</span>}
      </div>

      <div className="step-field">
        <label className="step-label" htmlFor="q-phone">Phone Number <span>*</span></label>
        <input
          id="q-phone"
          className={`q-input${errors.phone ? ' q-input--error' : ''}`}
          type="tel"
          placeholder="07700 900000"
          value={data.phone}
          onChange={e => update('phone', e.target.value)}
        />
        {errors.phone && <span className="field-error">{errors.phone}</span>}
      </div>

      <p className="consent-note">
        By submitting you agree to be contacted by Green Orb Solutions Ltd regarding your solar quote.
        We respect your privacy and will never share your details.
      </p>
    </div>
  )
}

/* ─── Success screen ─── */
function SuccessScreen({ name, closeQuote }) {
  return (
    <div className="quote-success">
      <div className="quote-success__orb">
        <span>☀</span>
      </div>
      <h2>You're on your way<br />to <span className="highlight">free energy!</span></h2>
      <p>
        Thanks, <strong>{name.split(' ')[0]}</strong>! We've received your quote request.
        One of our solar advisors will call you within <strong>2 working hours</strong> with a
        personalised quote for your home.
      </p>
      <div className="quote-success__next">
        <p className="next-title">What happens next?</p>
        <div className="next-steps">
          <div className="next-step">
            <span className="next-step__num">01</span>
            <span>We review your details & prepare your personalised quote</span>
          </div>
          <div className="next-step">
            <span className="next-step__num">02</span>
            <span>A solar advisor calls within 2 working hours</span>
          </div>
          <div className="next-step">
            <span className="next-step__num">03</span>
            <span>We arrange a free site survey at your convenience</span>
          </div>
        </div>
      </div>
      <button className="btn btn--primary btn--lg" onClick={closeQuote}>
        Back to Site
      </button>
    </div>
  )
}

/* ─── Validation per step ─── */
function validateStep(stepIndex, data) {
  const errors = {}
  if (stepIndex === 0) {
    if (!data.propertyType) errors.propertyType = 'Please select a property type'
    if (!data.ownership)    errors.ownership    = 'Please select ownership status'
  }
  if (stepIndex === 1) {
    if (!data.roofOrientation) errors.roofOrientation = 'Please select roof direction'
    if (!data.roofPitch)       errors.roofPitch       = 'Please select roof pitch'
    if (!data.roofCondition)   errors.roofCondition   = 'Please select roof condition'
  }
  if (stepIndex === 2) {
    if (!data.monthlyBill)     errors.monthlyBill   = 'Please select your monthly bill'
    if (!data.daytimeUsage)    errors.daytimeUsage  = 'Please select usage pattern'
    if (!data.batteryInterest) errors.batteryInterest = 'Please select battery interest'
  }
  if (stepIndex === 3) {
    if (!data.postcode.trim()) {
      errors.postcode = 'Postcode is required'
    } else if (!/^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i.test(data.postcode.trim())) {
      errors.postcode = 'Please enter a valid UK postcode'
    }
  }
  if (stepIndex === 4) {
    if (!data.name.trim())  errors.name  = 'Name is required'
    if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email)) errors.email = 'Valid email is required'
    if (!data.phone.trim()) errors.phone = 'Phone number is required'
  }
  return errors
}

/* ─── Main QuoteModal ─── */
export default function QuoteModal() {
  const { isOpen, closeQuote } = useQuote()
  const [step, setStep]       = useState(0)
  const [data, setData]       = useState(INIT_DATA)
  const [errors, setErrors]   = useState({})
  const [done, setDone]       = useState(false)

  /* Reset when modal opens */
  useEffect(() => {
    if (isOpen) {
      setStep(0)
      setData(INIT_DATA)
      setErrors({})
      setDone(false)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  /* Close on Escape */
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') closeQuote()
  }, [closeQuote])

  useEffect(() => {
    if (isOpen) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, handleKey])

  const update = (field, value) => {
    setData(d => ({ ...d, [field]: value }))
    if (errors[field]) setErrors(er => ({ ...er, [field]: undefined }))
  }

  const next = () => {
    const errs = validateStep(step, data)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    if (step < STEPS.length - 1) {
      setStep(s => s + 1)
    } else {
      setDone(true)
    }
  }

  const back = () => {
    setErrors({})
    setStep(s => s - 1)
  }

  if (!isOpen) return null

  const progress = ((step + 1) / STEPS.length) * 100

  return (
    <div className="quote-overlay" onClick={e => { if (e.target === e.currentTarget) closeQuote() }}>
      <div className="quote-modal" role="dialog" aria-modal="true" aria-label="Get a solar quote">

        {/* Header */}
        <div className="quote-modal__header">
          <div className="quote-modal__logo">
            <span className="quote-modal__orb" />
            <span>Green Orb Solutions</span>
          </div>
          <button className="quote-modal__close" onClick={closeQuote} aria-label="Close">✕</button>
        </div>

        {/* Progress bar */}
        {!done && (
          <div className="quote-progress">
            <div className="quote-progress__bar" style={{ width: `${progress}%` }} />
          </div>
        )}

        {done ? (
          <SuccessScreen name={data.name} closeQuote={closeQuote} />
        ) : (
          <>
            {/* Step header */}
            <div className="quote-step-header">
              <div className="quote-step-meta">
                <span className="quote-step-tag">Step {step + 1} of {STEPS.length}</span>
                <span className="quote-step-pct">{Math.round(progress)}% complete</span>
              </div>
              <h2 className="quote-step-title">{STEPS[step].title}</h2>
              <p className="quote-step-subtitle">{STEPS[step].subtitle}</p>
            </div>

            {/* Step body */}
            <div className="quote-body">
              {step === 0 && <StepProperty data={data} update={update} errors={errors} />}
              {step === 1 && <StepRoof     data={data} update={update} errors={errors} />}
              {step === 2 && <StepEnergy   data={data} update={update} errors={errors} />}
              {step === 3 && <StepLocation data={data} update={update} errors={errors} />}
              {step === 4 && <StepContact  data={data} update={update} errors={errors} />}
            </div>

            {/* Error summary */}
            {Object.keys(errors).length > 0 && (
              <p className="quote-error-msg">Please complete all required fields above to continue.</p>
            )}

            {/* Footer nav */}
            <div className="quote-footer">
              {step > 0 ? (
                <button className="btn btn--secondary" onClick={back}>← Back</button>
              ) : (
                <span />
              )}
              <button className="btn btn--primary" onClick={next}>
                {step === STEPS.length - 1 ? 'Get My Quote →' : 'Continue →'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
