import { useState, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import Header from './components/Header'
import WhoWeServe from './components/WhoWeServe'
import Price from './components/Price'
import ContactPage from './page/Contact.jsx'
import ProductsPage from './page/ProductsPage.jsx'
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

  const appContent = (
    <div className="family-fair-app">
      <Header onSelectCategory={setSelectedCategory} />

      <Suspense fallback={<div className="hero-skeleton" /> }>
        <Hero onSelectCategory={setSelectedCategory} />
      </Suspense>

      <WhoWeServe />
      <Price />

      {/* <main className="shop-layout">
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
      </main> */}

      <footer className="footer-banner">
        <div>
          <h2>Family Fair is built for modern grocery shopping.</h2>
          <p>From breakfast staples to family meal kits, every item is selected for quality and convenience.</p>
        </div>
      </footer>

      <div className="cart-summary">{cartCount} item{cartCount === 1 ? '' : 's'} in cart</div>
    </div>
  )

  return (
    <Routes>
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route
        path="/*"
        element={hasEntered ? appContent : <WelcomePage onEnter={handleEnterSite} />}
      />
    </Routes>
  )
}

export default App
