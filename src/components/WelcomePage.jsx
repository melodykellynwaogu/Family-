import { useEffect, useRef, useState } from 'react'
import '../styles/welcome.css'

function WelcomePage({ onEnter }) {
  const [hasScrolled, setHasScrolled] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const triggerEnter = () => {
      if (hasScrolled) return
      setHasScrolled(true)
      if (typeof onEnter === 'function') {
        onEnter()
      }
    }

    const onScroll = () => {
      if (container.scrollTop > 80) {
        triggerEnter()
      }
    }

    const onWheel = (event) => {
      if (event.deltaY > 0) {
        triggerEnter()
      }
    }

    const onTouchStart = () => {
      triggerEnter()
    }

    container.addEventListener('scroll', onScroll)
    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true })

    return () => {
      container.removeEventListener('scroll', onScroll)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
    }
  }, [hasScrolled, onEnter])

  const handleClick = () => {
    if (typeof onEnter === 'function') {
      onEnter()
    }
  }

  return (
    <div ref={containerRef} className="welcome-page">
      <div className="welcome-page__content">
        <div className="welcome-page__panel">
          <p className="eyebrow welcome-page__eyebrow">Family Fair</p>
          <h1 className="welcome-page__title">Welcome to the freshest family supermarket.</h1>
          <p className="welcome-page__subtitle">
            Discover a clean, modern approach to groceries, meal kits, and everyday essentials.
          </p>

          <button className="welcome-page__button" type="button" onClick={handleClick}>
            Visit website
          </button>
          <div className="welcome-page__scroll-hint">Scroll down to open the website</div>
        </div>

        <div className="welcome-page__extra-space" />
      </div>

      <div className="welcome-page__decorations" aria-hidden="true">
        <div className="welcome-page__icon welcome-page__icon--circle" />
        <div className="welcome-page__icon welcome-page__icon--tablet">F</div>
        <div className="welcome-page__icon welcome-page__icon--sparkle">★</div>
        <div className="welcome-page__icon welcome-page__icon--badge">Fresh</div>
        <div className="welcome-page__icon welcome-page__icon--image" />
        <div className="welcome-page__icon welcome-page__icon--wave" />
      </div>
    </div>
  )
}

export default WelcomePage
