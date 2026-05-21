import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import '../styles/product-detail.css';

const STORE_EMAIL = 'frutocana@gmail.com';
const STORE_MAP_URL =
  'https://www.google.com/maps/dir/?api=1&destination=Family+Fair+Supermarket,+Lilongwe+Malawi';

export default function ProductDetail({ onAdd }) {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === productId);

  const handleVisitStore = () => {
    window.open(STORE_MAP_URL, '_blank');
  };

  const handleCheckAvailability = () => {
    const subject = encodeURIComponent(`Product availability request: ${product.name}`);
    const body = encodeURIComponent(
      `Hello Family Fair team, I would like to check availability for the following product:- ${product.name} - Category: ${product.category} - Price: $${product.price.toFixed(2)} ${product.unit} Please let me know if this item is available in-store. Thank you!`
    );
    window.location.href = `mailto:${STORE_EMAIL}?subject=${subject}&body=${body}`;
  };

  if (!product) {
    return (
      <div className="product-detail">
        <div className="product-detail__container">
          <button 
            className="product-detail__back-btn" 
            onClick={() => navigate(-1)}
          >
            ← Go Back
          </button>
          <p>Product not found.</p>
        </div>
      </div>
    );
  }

  // Get related products (same category, different product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAdd = (prod) => {
    if (typeof onAdd === 'function') {
      onAdd(prod)
    }
  }

  return (
    <div className="product-detail">
      {/* Back Button */}
      <button 
        className="product-detail__back-btn" 
        onClick={() => navigate(-1)}
      >
        ← Go Back
      </button>

      {/* Main Product Section */}
      <div className="product-detail__container">
        <div className="product-detail__main">
          {/* Large Image */}
          <div className="product-detail__image-wrapper">
            <div className="product-detail__image">
              {product.image ? (
                <img src={product.image} alt={product.name} />
              ) : (
                <div className="product-detail__placeholder">
                  {product.name}
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-detail__info">
            <div className="product-detail__badge">{product.category}</div>
            
            <h1 className="product-detail__title">{product.name}</h1>

            <div className="product-detail__pricing">
              <span className="product-detail__price">${product.price.toFixed(2)}</span>
              <span className="product-detail__unit">{product.unit}</span>
            </div>

            <p className="product-detail__description">
              {product.description}
            </p>

            {/* Availability Status */}
            <div className="product-detail__availability">
              <div className="product-detail__status">
                <span className="product-detail__status-indicator">✓</span>
                <div>
                  <p className="product-detail__status-title">In Stock</p>
                  <p className="product-detail__status-subtitle">Available at Family Fair Supermarket</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="product-detail__actions">
              <button
                type="button"
                className="product-detail__visit-btn"
                onClick={handleVisitStore}
              >
                Visit Store Today
              </button>
              <button
                type="button"
                className="product-detail__check-btn"
                onClick={handleCheckAvailability}
              >
                Check Availability
              </button>
            </div>

            {/* Key Features */}
            <div className="product-detail__features">
              <div className="product-detail__feature">
                <span className="product-detail__feature-icon">📦</span>
                <p>Quality Guaranteed</p>
              </div>
              <div className="product-detail__feature">
                <span className="product-detail__feature-icon">💰</span>
                <p>Best Price</p>
              </div>
              <div className="product-detail__feature">
                <span className="product-detail__feature-icon">🏪</span>
                <p>In-Store Pickup</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="product-detail__related">
          <div className="product-detail__related-container">
            <h2>Related Products</h2>
            <div className="product-detail__related-grid">
              {relatedProducts.map((prod, index) => (
                <div
                  key={`${prod.id}-${index}`}
                  className="product-detail__related-item"
                  onClick={() => navigate(`/product/${prod.id}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && navigate(`/product/${prod.id}`)}
                >
                  <ProductCard product={prod} onAdd={handleAdd} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
