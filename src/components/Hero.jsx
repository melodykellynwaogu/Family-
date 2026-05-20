import { useEffect, useMemo, useState } from 'react'
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

  return (
    <section className="hero hero--showcase" id="home">
      <div className="hero__background" style={backgroundStyle} />
      <div className="hero__backdrop" />

      <div className="hero__content">
        <div className="hero__panel">
          <p className="hero__eyebrow">Family Fair</p>
          <h1 className="hero__title">The grocery ecommerce platform your customers will love</h1>
          <p className="hero__subtitle">
            Delight busy families with fresh produce, easy cart flow, and a modern storefront built for grocery shopping.
          </p>

          <div className="hero__actions">
            <button type="button" className="hero__primary" onClick={() => onSelectCategory('Fresh Produce')}>
              Shop fresh
            </button>
            <button type="button" className="hero__secondary" onClick={() => onSelectCategory('Family Meals')}>
              Explore meals
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
