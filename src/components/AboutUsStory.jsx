import '../styles/about-us.css'

const milestones = [
  {
    title: 'Humble Start',
    year: 'The Beginning',
    text: 'We started from home selling biscuits with care, consistency, and a big dream for our family business.',
  },
  {
    title: 'Community Love',
    year: 'Growing Trust',
    text: 'Customers loved our products and service. Their support and appreciation gave us confidence to keep going.',
  },
  {
    title: 'Next Level',
    year: 'Today',
    text: 'After a long wait, we built our own store with better facilities and capital to serve our community at a higher level.',
  },
]

export default function AboutUsStory() {
  return (
    <section className="about-us" id="about-us">
      <div className="about-us__container">
        <div className="about-us__intro">
          <p className="about-us__eyebrow">About Us</p>
          <h2>From homemade biscuits to Family Fair Supermarket</h2>
          <p>
            We started out selling biscuits from home and building relationships with customers who loved our products and business.
            With time, patience, and community support, we grew into a full supermarket with our own building and stronger operations.
          </p>
        </div>

        <div className="about-us__timeline">
          {milestones.map((item) => (
            <article key={item.title} className="about-us__card">
              <span className="about-us__year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
