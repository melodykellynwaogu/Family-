import '../styles/categories.css'

const categoryCards = [
  {
    title: 'Fresh Produce',
    subtitle: 'Fruits and vegetables picked daily for your family.',
    emoji: '🍓',
  },
  {
    title: 'Dairy',
    subtitle: 'Creamy, fresh, and locally sourced milk products.',
    emoji: '🧀',
  },
  {
    title: 'Snacks',
    subtitle: 'Treats and on-the-go favourites for every appetite.',
    emoji: '🍪',
  },
  {
    title: 'Beverages',
    subtitle: 'Cold drinks, juices, and everyday refreshments.',
    emoji: '🥤',
  },
  {
    title: 'Frozen Foods',
    subtitle: 'Ready-to-cook meals, frozen treats and more.',
    emoji: '🧊',
  },
  {
    title: 'Home Essentials',
    subtitle: 'Household basics for a clean and happy kitchen.',
    emoji: '🏠',
  },
]

export default function Categories() {
  const scrollToProducts = () => {
    const target = document.getElementById('products-section')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="categories" id="categories">
      <div className="categories__container">
        <div className="categories__header">
          <p className="categories__eyebrow">Shop By Category</p>
          <h2 className="categories__title">Explore the collections your store customers love</h2>
          <p className="categories__subtitle">
            Modern category cards with hover effects and a clean supermarket layout to help customers browse fast.
          </p>
        </div>

        <div className="categories__grid">
          {categoryCards.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className="categories__card"
              onClick={scrollToProducts}
            >
              <div className="categories__icon">{item.emoji}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
              <span className="categories__arrow">→</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
