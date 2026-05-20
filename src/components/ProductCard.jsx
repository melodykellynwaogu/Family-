import { useNavigate } from 'react-router-dom'
import '../styles/product-card.css'

function ProductCard({ product, onAdd, isClickable = true }) {
  const navigate = useNavigate()

  const handleCardClick = () => {
    if (isClickable) {
      navigate(`/product/${product.id}`)
    }
  }

  return (
    <article className="product-card" onClick={handleCardClick} style={isClickable ? { cursor: 'pointer' } : {}}>
      <div className="product-card__badge">{product.category}</div>
      <div className="product-card__name">{product.name}</div>
      <p className="product-card__description">{product.description}</p>
      <div className="product-card__footer">
        <span className="product-card__price">${product.price.toFixed(2)}</span>
        <span className="product-card__unit">{product.unit}</span>
      </div>
      <button type="button" className="product-card__button" onClick={(e) => {
        e.stopPropagation()
        onAdd(product)
      }}>
        Add to cart
      </button>
    </article>
  )
}

export default ProductCard
