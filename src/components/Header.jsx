import { useState } from 'react'
import '../styles/header.css'

export default function Header({ onSelectCategory }) {
  const [productHover, setProductHover] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleProduct = (type) => {
    setProductHover(false)
    setMobileOpen(false)
    if (typeof onSelectCategory === 'function') onSelectCategory(type)
  }

  return (
    <header className="ff-header">
      <div className="ff-header__inner">
        <div className="ff-header__right">
          <nav className="ff-header__nav" aria-label="Primary navigation">
            <div
              className="ff-nav-item"
              onMouseEnter={() => setProductHover(true)}
              onMouseLeave={() => setProductHover(false)}
            >
              <button type="button" className="ff-nav-button">
                Product
                <span className="ff-nav-arrow">▾</span>
              </button>
              <div className={`ff-dropdown ${productHover ? 'ff-dropdown--visible' : ''}`}>
                <button type="button" onClick={() => handleProduct('Fresh Produce')}>Grocery mobile app</button>
                <button type="button" onClick={() => handleProduct('Pantry')}>Grocery ecommerce website</button>
                <button type="button" onClick={() => handleProduct('Phone Orders')}>Phone ordering app</button>
              </div>
            </div>
            <button type="button" className="ff-nav-button">Integrations</button>
            <button type="button" className="ff-nav-button">Pricing</button>
            <button type="button" className="ff-nav-button">Resources</button>
          </nav>

          <div className="ff-header__actions">
            <button type="button" className="ff-cta">Contact us</button>
          </div>

          <button className="ff-mobile-toggle" onClick={() => setMobileOpen((s) => !s)} aria-label="Menu">
            ☰
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="ff-mobile-menu">
          <button onClick={() => handleProduct('Fresh Produce')}>Grocery mobile app</button>
          <button onClick={() => handleProduct('Pantry')}>Grocery ecommerce website</button>
          <button onClick={() => handleProduct('Phone Orders')}>Phone ordering app</button>
          <button>Integrations</button>
          <button>Pricing</button>
          <button>Resources</button>
        </div>
      )}
    </header>
  )
}
