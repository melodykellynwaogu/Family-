import { useState } from 'react'
import '../styles/newsletter-subscription.css'

export default function NewsletterSubscription() {
  const [isSubscribed, setIsSubscribed] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    setIsSubscribed(true)
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
              placeholder="frutocana@gmail.com"
              required
            />
            <button type="submit">Subscribe</button>
          </div>
        </form>

        <p className="newsletter-subscription__status" role="status">
          {isSubscribed
            ? 'Thanks for subscribing. Your weekly offers will arrive soon.'
            : 'Only useful supermarket updates.'}
        </p>
      </div>
    </section>
  )
}
