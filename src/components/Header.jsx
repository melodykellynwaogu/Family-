import { useState } from 'react'
import logo from '../assets/family.png'
import '../styles/header.css'

export default function Header() {
  const [productHover, setProductHover] = useState(false)

  return (
    <header className="ff-header">
      <div className="ff-header__inner">
        <div className="ff-header__left">
          <img src={logo} alt="Family Fair" className="ff-logo" />
        </div>

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
                <button type="button">Grocery mobile app</button>
                <button type="button">Grocery ecommerce website</button>
                <button type="button">Phone ordering app</button>
              </div>
            </div>
            <button type="button" className="ff-nav-button">Integrations</button>
            <button type="button" className="ff-nav-button">Pricing</button>
            <button type="button" className="ff-nav-button">Resources</button>
          </nav>

          <div className="ff-header__actions">
            <button type="button" className="ff-cta">Contact us</button>
          </div>
        </div>
      </div>
    </header>
  )
}
