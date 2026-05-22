import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/contact.css';

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;
const CONTACT_RECIPIENT = import.meta.env.VITE_CONTACT_RECIPIENT || 'hello@familyfair.store';

export default function Contacts() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    country: 'Malawi',
  });
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const submitToEndpoint = async () => {
    const response = await fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        source: 'family-fair-contact',
      }),
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }
  };

  const openMailtoFallback = () => {
    const subject = encodeURIComponent(`Contact request from ${formData.fullName}`);
    const body = encodeURIComponent(
      `Hello Family Fair team,%0D%0A%0D%0AYou have a new contact request:%0D%0A` +
      `Name: ${formData.fullName}%0D%0A` +
      `Email: ${formData.email}%0D%0A` +
      `Phone: ${formData.phone}%0D%0A` +
      `City: ${formData.city}%0D%0A` +
      `Country: ${formData.country}%0D%0A%0D%0A`
    );
    window.location.href = `mailto:${CONTACT_RECIPIENT}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatusMessage('Submitting your request...');

    try {
      if (CONTACT_ENDPOINT) {
        await submitToEndpoint();
        setStatusMessage('✓ Thank you! We received your request and will contact you soon.');
      } else {
        openMailtoFallback();
        setStatusMessage('Opening your mail app to complete contact submission.');
      }

      setSubmitted(true);
      setFormData({ fullName: '', email: '', phone: '', city: '', country: 'Malawi' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      openMailtoFallback();
      setStatusMessage('API unavailable. Opening your mail app to complete contact submission.');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contacts">
      <div className="contacts__container">

        <div className="contacts__left">

          <div className="contacts__logo">
            <h2>FAMILY FAIR</h2>
            <span>SUPERMARKET</span>
          </div>

          <h1 className="contacts__title">
            Visit Family Fair <br />
            Supermarket Today
          </h1>

          <button
            type="button"
            className="contacts__back-btn"
            onClick={() => navigate('/')}
          >
            Go back to homepage
          </button>

          <div className="contacts__points">
            <div className="contacts__point">
              <span>✓</span>
              <p>Fresh groceries and household essentials.</p>
            </div>

            <div className="contacts__point">
              <span>✓</span>
              <p>Affordable prices and weekly special offers.</p>
            </div>

            <div className="contacts__point">
              <span>✓</span>
              <p>Friendly shopping experience for families.</p>
            </div>

            <div className="contacts__point">
              <span>✓</span>
              <p>Convenient location with quality products.</p>
            </div>
          </div>

          <div className="contacts__store">
            <h3>Store information</h3>
            <p><strong>Address:</strong> Area 36 Market Lane, Lilongwe, Malawi</p>
            <p><strong>Phone:</strong> <a href="tel:+265881146791">+265 881 146 791</a></p>
            <p><strong>Instagram:</strong> <a href="https://www.instagram.com/familyfair2026" target="_blank" rel="noreferrer">@familyfair</a></p>
            <p><strong>Hours:</strong> Mon–Fri 7am–9pm, Sat 8am–8pm, Sun 8:30am–6pm</p>
            <p><strong>Parking:</strong> Spacious customer parking with dedicated family bays.</p>
          </div>

          <div className="contacts__testimonial">
            <h3>“</h3>

            <p>
              Family Fair has become our favorite supermarket.
              The environment is clean, the products are fresh,
              and the staff are always welcoming.
            </p>

            <h4>Sarah M.</h4>

            <span>Regular Customer | Lilongwe</span>
          </div>
        </div>

        <div className="contacts__right">

          <form className="contacts__form" onSubmit={handleSubmit}>

            {submitted && (
              <div className="contacts__success-message">
                {statusMessage}
              </div>
            )}

            <div className="contacts__group">
              <label>Full name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="contacts__row">
              <div className="contacts__group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="contacts__group">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="contacts__row">
              <div className="contacts__group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="contacts__group">
                <label>Country</label>

                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                >
                  <option>Malawi</option>
                  <option>Nigeria</option>
                  <option>South Africa</option>
                </select>
              </div>
            </div>

            <button type="submit" className="contacts__btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Let’s Talk'}
            </button>

            <p className="contacts__terms">
              By clicking “Let’s Talk” you agree to our terms and privacy policy.
            </p>

          </form>
        </div>

      </div>
    </section>
  );
}
