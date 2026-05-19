import '../styles/who-we-serve.css';
import familyImage from '../assets/family-ag1.avif';

export default function WhoWeServe() {
  const segments = [
    {
      title: 'Families and everyday shoppers',
      description:
        'Family Fair Supermarket welcomes individuals, families, and communities looking for fresh groceries, household essentials, and affordable everyday products in a friendly shopping environment.',
      // icon: 'supermarket',
    },
    {
      title: 'Customers who enjoy in-store shopping experiences',
      description:
        'We focus on creating a clean, convenient, and enjoyable supermarket experience that encourages customers to regularly visit both our website and physical store to discover quality products, special offers, and new arrivals.',
      // icon: 'specialty',
      cta: true,
    },
  ];

  return (
    <section className="who-we-serve">
      <div className="who-we-serve__container">
        <h2 className="who-we-serve__title">Who we serve</h2>

        <div className="who-we-serve__content">
          <div className="who-we-serve__visuals">
            <img src={familyImage} alt="Family" className='serve' />
          </div>

          <div className="who-we-serve__segments">
            {segments.map((segment, idx) => (
              <div key={idx} className="who-we-serve__segment">
                <h3 className="who-we-serve__segment-title">{segment.title}</h3>
                <p className="who-we-serve__segment-description">{segment.description}</p>
                {segment.cta && (
                  <a href="#" className="who-we-serve__cta">
                    Get started <span className="who-we-serve__arrow">→</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
