import '../styles/welcome.css'

function WelcomePage({ onEnter }) {
  const handleClick = () => {
    if (typeof onEnter === 'function') {
      onEnter()
    }
  }

  return (
    <div className="welcome-page">
      <div className="welcome-page__panel">
        <p className="eyebrow welcome-page__eyebrow">Family Fair</p>
        <h1 className="welcome-page__title">Welcome to the freshest family supermarket.</h1>
        <p className="welcome-page__subtitle">
          Discover a clean, modern approach to groceries, meal kits, and everyday essentials.
        </p>
        <button className="welcome-page__button" type="button" onClick={handleClick}>
          Visit website
        </button>
      </div>

      <div className="welcome-page__decorations" aria-hidden="true">
        <div className="welcome-page__icon welcome-page__icon--circle" />
        <div className="welcome-page__icon welcome-page__icon--tablet">FF</div>
        <div className="welcome-page__icon welcome-page__icon--sparkle">★</div>
        <div className="welcome-page__icon welcome-page__icon--badge">Fresh</div>
        <div className="welcome-page__icon welcome-page__icon--image" />
        <div className="welcome-page__icon welcome-page__icon--wave" />
      </div>
    </div>
  )
}

export default WelcomePage
