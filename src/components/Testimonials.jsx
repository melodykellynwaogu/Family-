import '../styles/testimonials.css'

const testimonials = [
  {
    quote: 'Family Fair makes grocery shopping a breeze. The quality is always excellent and so easy.',
    name: 'Martha K.',
    role: 'Busy Lady',
  },
  {
    quote: 'Our pantry is stocked with fresh produce and family favourites thanks to their great selection.',
    name: 'James P.',
    role: 'Chef & Home Cook',
  },
  {
    quote: 'I love the deals and the simple checkout experience. Great value and fast service every time.',
    name: 'Leah N.',
    role: 'Health Enthusiast',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__wrapper">
        <div className="testimonials__intro">
          <p className="testimonials__eyebrow">What customers say</p>
          <h2 className="testimonials__title">Real reviews from families who shop with us</h2>
          <p className="testimonials__copy">
            Honest feedback from everyday shoppers helps us keep the store fresh, affordable, and family-friendly.
          </p>
        </div>

        <div className="testimonials__cards">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonials__card">
              <p className="testimonials__quote">“{item.quote}”</p>
              <div className="testimonials__meta">
                <span className="testimonials__name">{item.name}</span>
                <span className="testimonials__role">{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
