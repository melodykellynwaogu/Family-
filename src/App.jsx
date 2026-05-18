import { useState, lazy, Suspense } from 'react'
import WelcomePage from './components/WelcomePage'
const Hero = lazy(() => import('./components/Hero'))
const ProductsPanel = lazy(() => import('./components/ProductsPanel'))
const CartSidebar = lazy(() => import('./components/CartSidebar'))
import './App.css'

const categories = ['All', 'Fresh Produce', 'Family Meals', 'Pantry', 'Snacks', 'Dairy']

function App() {
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

  if (!hasEntered) {
    return <WelcomePage onEnter={handleEnterSite} />
  }

  return (
    <div className="family-fair-app">
      <header className="site-header">
        <div className="site-brand">Family Fair</div>
        <nav className="site-nav" aria-label="Primary navigation">
          <button type="button">Product</button>
          <button type="button">Integrations</button>
          <button type="button">Pricing</button>
          <button type="button">Resources</button>
        </nav>
        <div className="site-actions">
          <button type="button" className="ghost-button">Book a call</button>
          <button type="button" className="primary-button">Contact us</button>
        </div>
      </header>

      <Suspense fallback={<div className="hero-skeleton" /> }>
        <Hero onSelectCategory={setSelectedCategory} />
      </Suspense>

      <main className="shop-layout">
        <Suspense fallback={<div className="panel-skeleton">Loading shop…</div>}>
          <ProductsPanel
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onAdd={handleAdd}
          />
        </Suspense>

        <Suspense fallback={<div className="cart-skeleton"/>}>
          <CartSidebar cartItems={cartItems} total={total} onRemove={handleRemove} onClear={handleClear} />
        </Suspense>
      </main>

      <footer className="footer-banner">
        <div>
          <h2>Family Fair is built for modern grocery shopping.</h2>
          <p>From breakfast staples to family meal kits, every item is selected for quality and convenience.</p>
        </div>
      </footer>

      <div className="cart-summary">{cartCount} item{cartCount === 1 ? '' : 's'} in cart</div>
    </div>
  )
}

export default App
