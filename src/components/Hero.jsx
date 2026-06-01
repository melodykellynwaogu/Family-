import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/hero.css'

import hero1 from '../assets/1.png'
import hero2 from '../assets/2.png'
import hero3 from '../assets/3.png'

const defaultBackgrounds = [
  { type: 'image', src: hero1 },
  { type: 'image', src: hero2 },
  { type: 'image', src: hero3 },
]

function Hero({ onSelectCategory, backgrounds = defaultBackgrounds }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % backgrounds.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [backgrounds.length])

  const currentBackground = backgrounds[activeIndex]
  const backgroundStyle = useMemo(() => {
    if (currentBackground.type === 'image') {
      return {
        backgroundImage: `url(${currentBackground.src})`,
      }
    }

    return {
      backgroundImage: currentBackground.src,
    }
  }, [currentBackground])

  const handleDealsClick = () => {
    if (typeof onSelectCategory === 'function') {
      onSelectCategory('All')
    }

    document.getElementById('deals')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero hero--showcase" id="home">
      <div className="hero__background" style={backgroundStyle} />
      <div className="hero__backdrop" />

      <div className="hero__content">
        <div className="hero__panel">
          <p className="hero__eyebrow">Family Fair</p>
          <h1 className="hero__title">Fresh groceries worth visiting the store for</h1>
          <p className="hero__subtitle">
            Discover fresh produce, weekly offers, and a warm in-store shopping experience built to encourage customers to come and buy in person.
          </p>

          <div className="hero__actions">
            <button type="button" className="hero__primary" onClick={handleDealsClick}>
              View weekly deals
            </button>
            <Link className="hero__secondary hero__secondary--link" to="/#store-info">
              Plan your visit
            </Link>
          </div>

          <div className="hero__visit-strip" aria-label="Store highlights">
            <span>Visit our facilities</span>
            <span>Fresh stock daily</span>
            <span>No delivery - in store only</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
