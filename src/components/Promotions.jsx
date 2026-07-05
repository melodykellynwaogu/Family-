import { Link } from 'react-router-dom'
import '../styles/promotions.css'

const promotions = [
  {
    title: 'Deal of the Week',
    product: 'Blue Band Margarine',
    description: 'A practical family essential to look out for on your next in-store visit.',
    oldPrice: 14000,
    price: 13500,
    badge: '25% off',
    label: 'Seasonal Offer ',
    to: '/product/spreading',
  },
  {
    title: 'Fresh Savings',
    product: 'Whole Wheat Pasta',
    description: 'A pantry staple with a friendly shelf price for families shopping in person.',
    oldPrice: 2500,
    price: 2000,
    badge: '20% off',
    label: 'New Arrival',
    to: '/product/pasta',
  },
  {
    title: 'Baker’s Special',
    product: 'Family Cookie Pack',
    description: 'A simple treat to pick up while you browse the aisles.',
    oldPrice: 5000,
    price: 4750,
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
          <div className="promotions__eyebrow">WEEKLY DEALS</div>
          <h2 className="promotions_title">FRESH OFFERS FOR CUSTOMERS</h2>
          <p className="promotions__subtitle">
            We use limited-time supermarket promotions, seasonal deals, and in-store savings to give people a reason to visit and shop locally.
          </p>
          <Link to="/products" className="promotions__button">
            SEE WHAT'S ON SALE →
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
                <span className="promotions__price">MWK{deal.price.toFixed(2)}</span>
                <span className="promotions__old-price">MWK{deal.oldPrice.toFixed(2)}</span>
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
