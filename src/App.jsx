import { useState, useEffect, lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import Header from './components/Header'
import WhoWeServe from './components/WhoWeServe'
import Price from './components/Price'
import Promotions from './components/Promotions'
import Categories from './components/Categories'
import StoreInfo from './components/StoreInfo'
import Testimonials from './components/Testimonials'
import LoyaltyMembership from './components/LoyaltyMembership'
import NewsletterSubscription from './components/NewsletterSubscription'
import AboutUsStory from './components/AboutUsStory'
import Partners from './components/Partners'
import ModernFooter from './components/ModernFooter'
import ContactPage from './page/Contact.jsx'
import ProductsPage from './page/ProductsPage.jsx'
import ProductDetail from './page/ProductDetail.jsx'
import { initAnalytics, trackPageView } from './lib/analytics'
const Hero = lazy(() => import('./components/Hero'))
const ProductsPanel = lazy(() => import('./components/ProductsPanel'))
const CartSidebar = lazy(() => import('./components/CartSidebar'))
import './App.css'

function App() {
  const location = useLocation()
  const [hasEntered, setHasEntered] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [cartItems, setCartItems] = useState([])

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  function handleAdd(product) {
    setCartItems((items) => {
      const existing = items.find((item) => item.id === product.id)
      if (existing) {
        return items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...items, { ...product, quantity: 1 }]
    })
  }

  function handleRemove(product) {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  function handleClear() {
    setCartItems([])
  }

  function handleEnterSite() {
    setHasEntered(true)
  }

  useEffect(() => {
    initAnalytics()

    const verificationCode = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION
    if (!verificationCode) {
      return
    }

    let metaTag = document.querySelector('meta[name="google-site-verification"]')
    if (!metaTag) {
      metaTag = document.createElement('meta')
      metaTag.setAttribute('name', 'google-site-verification')
      document.head.appendChild(metaTag)
    }
    metaTag.setAttribute('content', verificationCode)
  }, [])

  useEffect(() => {
    trackPageView(`${location.pathname}${location.search}`)
  }, [location.pathname, location.search])

  const appContent = (
    <div className="family-fair-app">
      <Header onSelectCategory={setSelectedCategory} />

      <Suspense fallback={<div className="hero-skeleton" />}>
        <Hero onSelectCategory={setSelectedCategory} />
      </Suspense>

      <WhoWeServe />
      <Price />
      <Promotions />
      <Categories />

      <main id="products-section" className="shop-layout">
        <Suspense fallback={<div className="panel-skeleton">Loading shop…</div>}>
          <ProductsPanel
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onAdd={handleAdd}
          />
        </Suspense>
      </main>

      <section className="cart-section" aria-label="Shopping cart summary">
        <Suspense fallback={<div className="cart-skeleton" />}>
          <CartSidebar cartItems={cartItems} total={total} onRemove={handleRemove} onClear={handleClear} />
        </Suspense>
      </section>

      <StoreInfo />
      <Testimonials />
      <LoyaltyMembership />
      <NewsletterSubscription />
      <AboutUsStory />
      <Partners />
      <ModernFooter />

      <div className="cart-summary">{cartCount} item{cartCount === 1 ? '' : 's'} in cart</div>

      <a
        className="whatsapp-float"
        href="https://wa.me/265881146791?text=Hello%20Family%20Fair%20Supermarket%2C%20I%20want%20to%20ask%20about%20your%20products."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Family Fair on WhatsApp"
      >
        <span className="whatsapp-float__icon" aria-hidden="true">💬</span>
        <span>WhatsApp Us</span>
      </a>
    </div>
  )

  return (
    <Routes>
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product/:productId" element={<ProductDetail onAdd={handleAdd} />} />
      <Route
        path="/*"
        element={hasEntered ? appContent : <WelcomePage onEnter={handleEnterSite} />}
      />
    </Routes>
  )
}

export default App
