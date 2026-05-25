import { useState } from 'react'
import '../styles/newsletter-subscription.css'

const NEWSLETTER_ENDPOINT = import.meta.env.VITE_NEWSLETTER_ENDPOINT
const NEWSLETTER_RECIPIENT = import.meta.env.VITE_NEWSLETTER_RECIPIENT || 'hello@familyfair.store'

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: 'idle', message: 'Only useful supermarket updates.' })

  const submitToEndpoint = async (value) => {
    const response = await fetch(NEWSLETTER_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: value,
        source: 'family-fair-newsletter',
      }),
    })

    if (!response.ok) {
      throw new Error('Request failed')
    }
  }

  const openMailtoFallback = (value) => {
    const subject = encodeURIComponent('Newsletter Subscription Request')
    const body = encodeURIComponent(
      `Hello Family Fair, Please subscribe this email to weekly offers: ${value} Thank you.`,
    )
    window.location.href = `mailto:${NEWSLETTER_RECIPIENT}?subject=${subject}&body=${body}`
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    setStatus({ type: 'idle', message: 'Submitting your request...' })

    try {
      if (NEWSLETTER_ENDPOINT) {
        await submitToEndpoint(email)
        setStatus({ type: 'success', message: 'Thanks for subscribing. Your weekly offers will arrive soon.' })
      } else {
        openMailtoFallback(email)
        setStatus({ type: 'success', message: 'Opening your mail app to complete subscription.' })
      }
      setEmail('')
    } catch {
      openMailtoFallback(email)
      setStatus({
        type: 'success',
        message: 'API unavailable. Opening your mail app to complete subscription.',
      })
      setEmail('')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="newsletter-subscription" id="newsletter">
      <div className="newsletter-subscription__container">
        <p className="newsletter-subscription__eyebrow">Newsletter</p>
        <h2>Get weekly offers and supermarket updates.</h2>
        <p className="newsletter-subscription__copy">
          Share your email to receive fresh promotions, seasonal highlights, and smart family shopping tips.
        </p>

        <form className="newsletter-subscription__form" onSubmit={onSubmit}>
          <label htmlFor="newsletter-email" className="newsletter-subscription__label">
            Email address
          </label>
          <div className="newsletter-subscription__row">
            <input
              id="newsletter-email"
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="frutocana@gmail.com"
              required
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Subscribe'}
            </button>
          </div>
        </form>

        <p className="newsletter-subscription__status" role="status">
          {status.message}
        </p>
      </div>
    </section>
  )
}
