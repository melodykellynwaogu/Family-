import { Link } from "react-router-dom";
import "../styles/price.css";

export default function Price() {
  const features = [
    "Fresh produce delivered daily",
    "Affordable prices for every family",
    "Carefully selected quality products",
    "Friendly in-store shopping experience",
  ];

  return (
    <section className="price" id="why-shop">

      <div className="price__container">

        <p className="price__eyebrow">
          WHY FAMILY FAIR
        </p>

        <h2 className="price__title">
          QUALITY
          <br />
          YOU CAN
          <br />
          TRUST.
        </h2>

        <p className="price__subtitle">
          Every visit is designed to make grocery shopping
          easier, fresher, and more enjoyable. From seasonal
          produce to everyday essentials, Family Fair focuses
          on quality, affordability, and a welcoming experience
          for everyone.
        </p>

        <div className="price__features">

          {features.map((feature) => (
            <div key={feature} className="price__feature">
              <span className="price__check">+</span>
              <span>{feature}</span>
            </div>
          ))}

        </div>

        <Link
          to="/products"
          className="price__button"
        >
          View Products →
        </Link>

      </div>

    </section>
  );
}