import '../styles/store-info.css'

const storeDetails = {
  name: 'Family Fair Supermarket',
  address: '123 Market Lane, Lilongwe, Malawi',
  phone: '+265 888 123 456',
  hours: [
    { day: 'Mon - Fri', time: '7:00 AM - 9:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 8:00 PM' },
    { day: 'Sunday', time: '8:30 AM - 6:00 PM' },
  ],
  parking: 'Spacious customer parking with dedicated family bays',
  instagram: 'https://www.instagram.com/familyfair2026',
  mapUrl: 'https://www.google.com/maps?q=Family+Fair+Supermarket+Lilongwe+Malawi',
}

export default function StoreInfo() {
  return (
    <section className="store-info">
      <div className="store-info__container">
        <div className="store-info__header">
          <p className="store-info__eyebrow">Visit Our Store</p>
          <h2>Everything customers need to find us and plan their visit</h2>
          <p>
            Physical visits are our focus. Find our location, opening hours, parking details, and media presence in one place.
          </p>
        </div>

        <div className="store-info__grid">
          <article className="store-info__card store-info__card--location">
            <span className="store-info__icon">📍</span>
            <h3>Store Location</h3>
            <p>{storeDetails.address}</p>
            <a href={storeDetails.mapUrl} target="_blank" rel="noreferrer">
              Open map
            </a>
          </article>

          <article className="store-info__card store-info__card--hours">
            <span className="store-info__icon">🕒</span>
            <h3>Opening Hours</h3>
            <div className="store-info__hours">
              {storeDetails.hours.map((item) => (
                <div key={item.day} className="store-info__hour-row">
                  <span>{item.day}</span>
                  <span>{item.time}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="store-info__card store-info__card--contact">
            <span className="store-info__icon">📞</span>
            <h3>Contact & Support</h3>
            <p>Phone: <a href={`tel:${storeDetails.phone.replace(/\s/g, '')}`}>{storeDetails.phone}</a></p>
            <p>Social: <a href={storeDetails.instagram} target="_blank" rel="noreferrer">@familyfair</a></p>
          </article>

          <article className="store-info__card store-info__card--parking">
            <span className="store-info__icon">🅿️</span>
            <h3>Parking Availability</h3>
            <p>{storeDetails.parking}</p>
            <p>Safe evening parking with easy entry and wide aisles.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
