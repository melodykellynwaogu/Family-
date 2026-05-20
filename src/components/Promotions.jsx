import { Link } from 'react-router-dom'
import '../styles/promotions.css'

const promotions = [
  {
    title: 'Deal of the Week',
    product: 'Family Salmon Tray',
    description: 'Fresh salmon fillets ready for a healthy dinner.',
    oldPrice: 24.0,
    price: 18.9,
    badge: '20% off',
    label: 'Limited Offer',
    to: '/product/salmon',
  },
  {
    title: 'Fresh Savings',
    product: 'Whole Wheat Pasta',
    description: 'Organic pasta for family meals and easy recipes.',
    oldPrice: 4.5,
    price: 3.6,
    badge: '20% off',
    label: 'New Arrival',
    to: '/product/pasta',
  },
  {
    title: 'Baker’s Special',
    product: 'Family Cookie Pack',
    description: 'Soft chocolate chip cookies that everyone loves.',
    oldPrice: 9.5,
    price: 7.25,
    badge: '25% off',
    label: 'Seasonal Offer',
    to: '/product/cookies',
  },
]

export default function Promotions() {
  return (
    <section className="promotions" id="deals">
      <div className="promotions__container">
        <div className="promotions__header">
          <div className="promotions__eyebrow">Weekly Deals</div>
          <h2 className="promotions__title">Fresh offers to bring customers into the store</h2>
          <p className="promotions__subtitle">
            Highlight limited-time supermarket promotions, seasonal deals, and flash savings to keep shoppers coming back.
          </p>
          <Link to="/products" className="promotions__button">
            Browse all offers
          </Link>
        </div>

        <div className="promotions__grid">
          {promotions.map((deal) => (
            <article key={deal.product} className="promotions__card">
              <div className="promotions__card-top">
                <span className="promotions__pill">{deal.badge}</span>
                <span className="promotions__tag">{deal.label}</span>
              </div>
              <h3>{deal.product}</h3>
              <p>{deal.description}</p>
              <div className="promotions__price-row">
                <span className="promotions__price">${deal.price.toFixed(2)}</span>
                <span className="promotions__old-price">${deal.oldPrice.toFixed(2)}</span>
              </div>
              <Link to={deal.to} className="promotions__link">
                View product
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
