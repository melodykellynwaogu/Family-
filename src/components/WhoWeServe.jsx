import { Link } from "react-router-dom";
import "../styles/who-we-serve.css";
import familyImage from "../assets/family-ag1.avif";

export default function WhoWeServe() {
  return (
    <section className="serve" id="who-we-serve">

      <div className="serve__image">
        <img src={familyImage} alt="Family shopping together" />
      </div>

      <div className="serve__content">

        <p className="serve__eyebrow">
          FAMILY FAIR
        </p>

        <h2 className="serve__title">
          MADE FOR
          <br />
          EVERYDAY
          <br />
          LIVING
        </h2>

        <p className="serve__description">
          Family Fair is designed for people who value fresh food,
          quality groceries, and a welcoming shopping experience.
          Whether you're shopping for your family or picking up daily
          essentials, every visit is built around comfort, freshness,
          and value.
        </p>

        <Link
          to="/#store-info"
          className="serve__button"
        >
          Plan Your Visit →
        </Link>

      </div>

    </section>
  );
}