import '../styles/who-we-serve.css';

export default function WhoWeServe() {
  const segments = [
    {
      title: 'Grocery retailers of all sizes',
      description:
        'Wave Grocery serves both local grocery chains and high-volume national retailers, adapting to their unique needs and streamlining their operations.',
      icon: 'supermarket',
    },
    {
      title: 'Any industry that needs fast, recurring deliveries',
      description:
        'Some products must arrive on time, whether OTC medication, pet food, party liquor, or fresh goods. Wave Grocery helps businesses set up a great online store and deliver efficiently.',
      icon: 'specialty',
      cta: true,
    },
  ];

  return (
    <section className="who-we-serve">
      <div className="who-we-serve__container">
        <h2 className="who-we-serve__title">Who we serve</h2>

        <div className="who-we-serve__content">
          <div className="who-we-serve__visuals">
            <svg
              className="who-we-serve__illustration"
              viewBox="0 0 500 600"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background circle */}
              <circle cx="250" cy="300" r="200" fill="rgba(34, 197, 94, 0.08)" />

              {/* Supermarket */}
              <g>
                <rect x="80" y="120" width="120" height="140" fill="none" stroke="#000" strokeWidth="2" />
                <rect x="95" y="135" width="30" height="50" fill="none" stroke="#000" strokeWidth="1.5" />
                <rect x="130" y="135" width="30" height="50" fill="none" stroke="#000" strokeWidth="1.5" />
                <rect x="95" y="195" width="30" height="50" fill="none" stroke="#000" strokeWidth="1.5" />
                <rect x="130" y="195" width="30" height="50" fill="none" stroke="#000" strokeWidth="1.5" />
                <circle cx="160" cy="150" r="12" fill="none" stroke="#16a34a" strokeWidth="2" />
                <path d="M 150 160 L 170 160" stroke="#16a34a" strokeWidth="2" />

                <text x="122" y="90" fontSize="12" fontWeight="bold" textAnchor="middle">
                  SUPERMARKET
                </text>
              </g>

              {/* Specialty Shop */}
              <g>
                <rect x="280" y="140" width="110" height="100" fill="none" stroke="#000" strokeWidth="2" />
                <path d="M 285 145 L 320 120 L 355 145 L 390 145 Z" fill="none" stroke="#16a34a" strokeWidth="2" />
                <rect x="295" y="160" width="15" height="25" fill="none" stroke="#000" strokeWidth="1.5" />
                <rect x="320" y="160" width="15" height="25" fill="none" stroke="#000" strokeWidth="1.5" />
                <rect x="345" y="160" width="15" height="25" fill="none" stroke="#000" strokeWidth="1.5" />
                <circle cx="345" cy="165" r="4" fill="#16a34a" />

                <text x="335" y="115" fontSize="12" fontWeight="bold" textAnchor="middle">
                  SPECIALTY SHOP
                </text>
              </g>

              {/* Wholesale */}
              <g>
                <rect x="120" y="350" width="190" height="120" fill="none" stroke="#000" strokeWidth="2" />
                <rect x="135" y="365" width="25" height="35" fill="none" stroke="#000" strokeWidth="1.5" />
                <rect x="165" y="365" width="25" height="35" fill="none" stroke="#000" strokeWidth="1.5" />
                <rect x="195" y="365" width="25" height="35" fill="none" stroke="#000" strokeWidth="1.5" />
                <rect x="225" y="365" width="25" height="35" fill="none" stroke="#000" strokeWidth="1.5" />
                <rect x="135" y="410" width="25" height="35" fill="none" stroke="#000" strokeWidth="1.5" />
                <rect x="165" y="410" width="25" height="35" fill="none" stroke="#000" strokeWidth="1.5" />
                <rect x="195" y="410" width="25" height="35" fill="none" stroke="#000" strokeWidth="1.5" />
                <rect x="225" y="410" width="25" height="35" fill="none" stroke="#000" strokeWidth="1.5" />
                <line x1="120" y1="355" x2="310" y2="355" stroke="#16a34a" strokeWidth="3" />

                <text x="215" y="330" fontSize="12" fontWeight="bold" textAnchor="middle">
                  WHOLESALE
                </text>
              </g>
            </svg>
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
