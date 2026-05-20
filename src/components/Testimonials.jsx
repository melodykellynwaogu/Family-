import '../styles/testimonials.css'

const testimonials = [
  {
    quote: 'Family Fair makes grocery shopping easy for my whole family. Produce is always fresh.',
    name: 'Martha K.',
    role: 'Busy Parent',
  },
  {
    quote: 'Great selection and fair prices. I always find what I need for weekly meal prep.',
    name: 'James P.',
    role: 'Home Chef',
  },
  {
    quote: 'The promotions are excellent and staff are friendly. It feels like a community store.',
    name: 'Leah N.',
    role: 'Regular Shopper',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
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
