import ProductCard from './ProductCard'
import products from '../data/products'
import '../styles/product-card.css'

function ProductsPanel({ selectedCategory, setSelectedCategory, searchTerm, setSearchTerm, onAdd }) {
  const categories = ['All', 'Fresh Produce', 'Family Meals', 'Pantry', 'Snacks', 'Dairy']

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      || product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="products-explorer" id="products-grid">
      <div className="products-controls">
        <div className="search-card">
          <label htmlFor="search">Search groceries</label>
          <input
            id="search"
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search products, meals, snacks..."
          />
        </div>

        <div className="category-list" aria-label="Product categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={category === selectedCategory ? 'category-button active' : 'category-button'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="products-panel">
        <div className="products-header">
          <div>
            <span className="products-label">{selectedCategory === 'All' ? 'All products' : selectedCategory}</span>
            <p>{filteredProducts.length} items available</p>
          </div>
        </div>

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={onAdd} />
            ))
          ) : (
            <div className="empty-state">No products match your search. Try a different keyword.</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProductsPanel
