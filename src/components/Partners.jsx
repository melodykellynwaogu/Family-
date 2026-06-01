import '../styles/partners.css'

const partners = [
  { name: 'Richy Maziwa', logo: '/maziwa.png' },
  { name: 'Sana', logo: '/sana.png' },
  { name: 'Cool Drop', logo: '/cooldrop.jpeg' },
  { name: 'Indomin', logo: '/Indomin.png' },
  { name: 'Frutocana', logo: '/fruticana.png' },
  { name: 'Nivea', logo: '/nivea.jpeg' },
]

const loopedPartners = [...partners, ...partners]

export default function Partners() {
  return (
    <section className="partners" id="partners">
      <div className="partners__container">
        <div className="partners__intro">
          <p className="partners__eyebrow">Partners</p>
          <h2>Brands we proudly work with</h2>
          <p>
            These trusted partners help us keep quality products on our shelves for families in our community.
          </p>
        </div>

        <div className="partners__marquee" aria-label="Partners carousel">
          <div className="partners__track">
            {loopedPartners.map((partner, index) => (
              <article className="partners__card" key={`${partner.name}-${index}`}>
                <div className="partners__logo-wrap">
                  <img src={partner.logo} alt={`${partner.name} logo`} loading="lazy" />
                </div>
                <span>{partner.name}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
