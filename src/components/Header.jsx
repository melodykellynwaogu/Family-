import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'


export default function Header({ onSelectCategory }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  const handleShopClick = () => {
    if (typeof onSelectCategory === 'function') {
      onSelectCategory('All')
    }
    closeMobile()
  }

  return (
    <header className="ff-header">
      <div className="ff-header__inner">
        <a href="/#home" className="ff-brand" onClick={closeMobile}>
          {/* <span className="ff-brand__mark">FF</span> */}
          <span className="ff-brand__name">Family Fair</span>
        </a>

        <nav className="ff-header__nav" aria-label="Primary navigation">
          <a href="/#deals">Deals</a>
          <a href="/#categories">Categories</a>
          <a href="/#products-section" onClick={handleShopClick}>Products</a>
          <a href="/#store-info">Store Info</a>
          <a href="/#membership">Membership</a>
          <a href="/#newsletter">Newsletter</a>
          <a href="/#about-us">About Us</a>
          <a href="/#partners">Partners</a>
        </nav>

        <div className="ff-header__actions">
          <Link to="/contact" className="ff-cta ff-cta--ghost" onClick={closeMobile}>Contact</Link>
          <Link to="/products" className="ff-cta" onClick={closeMobile}>All Products</Link>
        </div>

        <button className="ff-mobile-toggle" onClick={() => setMobileOpen((open) => !open)} aria-label="Menu" aria-expanded={mobileOpen}>
          ☰
        </button>
      </div>

      {mobileOpen && (
        <div className="ff-mobile-menu">
          <a href="/#deals" onClick={closeMobile}>Deals</a>
          <a href="/#categories" onClick={closeMobile}>Categories</a>
          <a href="/#products-section" onClick={handleShopClick}>Products</a>
          <a href="/#store-info" onClick={closeMobile}>Store Info</a>
          <a href="/#membership" onClick={closeMobile}>Membership</a>
          <a href="/#newsletter" onClick={closeMobile}>Newsletter</a>
          <a href="/#about-us" onClick={closeMobile}>About Us</a>
          <a href="/#partners" onClick={closeMobile}>Partners</a>
          <Link to="/contact" onClick={closeMobile}>Contact</Link>
          <Link to="/products" onClick={closeMobile}>All Products</Link>
        </div>
      )}
    </header>
  )
}
