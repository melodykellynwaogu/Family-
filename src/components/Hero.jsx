import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/hero.css";

import hero1 from "../assets/1.png";
import hero2 from "../assets/2.png";
import hero3 from "../assets/3.png";

const defaultBackgrounds = [
  { type: "image", src: hero1 },
  { type: "image", src: hero2 },
  { type: "image", src: hero3 },
];

export default function Hero({
  onSelectCategory,
  backgrounds = defaultBackgrounds,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % backgrounds.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [backgrounds.length]);

  const backgroundStyle = useMemo(() => {
    const current = backgrounds[activeIndex];

    return current.type === "image"
      ? {
          backgroundImage: `url(${current.src})`,
        }
      : {
          backgroundImage: current.src,
        };
  }, [activeIndex, backgrounds]);

  const handleExplore = () => {
    if (typeof onSelectCategory === "function") {
      onSelectCategory("All");
    }

    document
      .getElementById("products-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">

      <div
        className="hero__background"
        style={backgroundStyle}
      />

      <div className="hero__overlay" />

      <div className="hero__content">

        <p className="hero__eyebrow">
          FAMILY FAIR
        </p>

        <h1 className="hero__title">
          FRESH FOOD
          <br />
          EVERY DAY
        </h1>

        <p className="hero__subtitle">
          Fresh produce. Premium groceries.
          A shopping experience worth leaving
          home for.
        </p>

        <div className="hero__buttons">

          <button
            className="hero__button"
            onClick={handleExplore}
          >
            Explore →
          </button>

          <Link
            to="/products"
            className="hero__link"
          >
            View Collection
          </Link>

        </div>

      </div>

    </section>
  );
}