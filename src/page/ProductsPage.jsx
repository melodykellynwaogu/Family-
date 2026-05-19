import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import '../styles/products-page.css';

export default function ProductsPage() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  function handleAdd(product) {
    setCartItems((items) => {
      const existing = items.find((item) => item.id === product.id);
      if (existing) {
        return items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });
  }

  // Show only 6 products for now
  const displayedProducts = products.slice(0, 6);

  return (
    <div className="products-page">
      {/* Header Section */}
      <section className="products-page__hero">
        <div className="products-page__hero-content">
          <button
            type="button"
            className="products-page__back-btn"
            onClick={() => navigate('/')}
          >
            ← Go Back
          </button>

          <h1 className="products-page__title">
            Quality Products <br />
            Fresh & Affordable
          </h1>

          <p className="products-page__subtitle">
            Discover our wide selection of fresh groceries, household essentials, and quality products for your family.
          </p>

          <button className="products-page__cta">
            Start Shopping
          </button>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="products-page__products">
        <div className="products-page__container">
          <h2 className="products-page__section-title">Featured Products</h2>

          <div className="products-page__grid">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={handleAdd}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
