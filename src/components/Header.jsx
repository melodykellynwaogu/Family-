import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header({ onSelectCategory }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  const handleShopClick = () => {
    if (typeof onSelectCategory === "function") {
      onSelectCategory("All");
    }
    closeMobile();
  };

  return (
    <>
      <header className="ff-header">
        <div className="ff-header__inner">

          <a href="/#home" className="ff-brand">
            FAMILY FAIR
          </a>

          <nav className="ff-header__nav">

            <a href="/#home">Home</a>

            <a
              href="/#products-section"
              onClick={handleShopClick}
            >
              Products
            </a>

            <a href="/#about-us">About</a>

            <a href="/#membership">Membership</a>

            <Link to="/contact">
              Contact
            </Link>

          </nav>

          <div className="ff-header__actions">

            <Link
              to="/products"
              className="ff-cta"
            >
              View Collection →
            </Link>

          </div>

          <button
            className="ff-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>

        </div>
      </header>

      <div
        className={`ff-mobile-menu ${
          mobileOpen ? "active" : ""
        }`}
      >
        <button
          className="ff-close"
          onClick={closeMobile}
        >
          ✕
        </button>

        <a href="/#home" onClick={closeMobile}>
          Home
        </a>

        <a
          href="/#products-section"
          onClick={handleShopClick}
        >
          Products
        </a>

        <a href="/#about-us" onClick={closeMobile}>
          About
        </a>

        <a href="/#membership" onClick={closeMobile}>
          Membership
        </a>

        <Link to="/contact" onClick={closeMobile}>
          Contact
        </Link>

        <Link
          to="/products"
          onClick={closeMobile}
        >
          View Collection
        </Link>

      </div>
    </>
  );
}