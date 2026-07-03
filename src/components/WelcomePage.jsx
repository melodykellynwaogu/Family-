import "../styles/welcome.css";

export default function WelcomePage({ onEnter }) {
  return (
    <section className="welcome">

      <div className="welcome__overlay" />

      <div className="welcome__content">

        <p className="welcome__eyebrow">
          FAMILY FAIR
        </p>

        <h1 className="welcome__title">
          FRESH FOOD.
          <br />
          REAL QUALITY.
        </h1>

        <p className="welcome__subtitle">
          A modern supermarket experience built around
          freshness, quality and everyday living.
        </p>

        <button
          className="welcome__button"
          onClick={onEnter}
        >
          Enter Website
        </button>

        <span className="welcome__scroll">
          Scroll to Continue
        </span>

      </div>

    </section>
  );
}