import { Link } from 'react-router-dom'
import '../styles/promotions.css'

const promotions = [
  {
    title: 'Deal of the Week',
    product: 'Blue Band Margarine',
    description: 'Versatile margarine for spreading, cooking, and baking.',
    oldPrice: 14000,
    price: 13500,
    badge: '25% off',
    label: 'Seasonal Offer ',
    to: '/product/spreading',
  },
  {
    title: 'Fresh Savings',
    product: 'Whole Wheat Pasta',
    description: 'Organic pasta for family meals and easy recipes.',
    oldPrice: 2500,
    price: 2000,
    badge: '20% off',
    label: 'New Arrival',
    to: '/product/pasta',
  },
  {
    title: 'Baker’s Special',
    product: 'Family Cookie Pack',
    description: 'Soft chocolate chip cookies that everyone loves.',
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
