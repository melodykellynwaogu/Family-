import { Link } from 'react-router-dom';
import '../styles/price.css';
import svg2Image from '../assets/family-ag4.svg';
import svg3Image from '../assets/family-ag3.svg';
import svg4Image from '../assets/family-ag2.svg';

export default function Price() {
  const price = [
    {
      description:
        'Our supermarket experience is built to help customers easily explore products, discover special offers, and stay connected with Family Fair Supermarket through both our website and physical store.',
      icon: svg2Image,
    },
    {
      description:
        'We focus on affordable pricing, quality groceries, and a welcoming shopping experience that keeps families and everyday shoppers returning regularly.',
      icon: svg3Image,
    },
    {
      description:
        'As we continue to grow, our goal remains simple — provide fresh products, trusted service, and a modern supermarket experience for our local community.',
      icon: svg4Image,

      cta: true,
    },
  ];

  return (
    <section className="price">
      <div className="price__container">
        <h2 className="price__title">Why Shop With Us</h2>

        <div className="price__content">
          {price.map((item, idx) => (
            <div key={idx} className="price__item">
              <div className="price__image-wrapper">
                <img
                  src={item.icon}
                  alt="Family Fair illustration"
                  className="price__image"
                />
              </div>

              <p className="price__description">
                {item.description}
              </p>

              {item.cta && (
                <Link to="/products" className="price__cta">
                  See our products prices <span className="price__arrow">→</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}