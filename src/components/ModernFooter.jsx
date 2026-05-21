import '../styles/modern-footer.css'

const quickLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Deals', href: '/#deals' },
  { label: 'Categories', href: '/#categories' },
  { label: 'Products', href: '/#products-section' },
  { label: 'Membership', href: '/#membership' },
  { label: 'Newsletter', href: '/#newsletter' },
  { label: 'About Us', href: '/#about-us' },
  { label: 'Partners', href: '/#partners' },
]

const categories = ['Fresh Produce', 'Dairy', 'Snacks', 'Beverages']

export default function ModernFooter() {
  return (
    <footer className="modern-footer" id="footer">
      <div className="modern-footer__container">
        <div className="modern-footer__brand">
          <h2>Family Fair Supermarket</h2>
          <p>
            Trusted by local families for fresh groceries, practical deals, and a friendly shopping experience.
          </p>
        </div>

        <div className="modern-footer__grid">
          <div>
            <h3>Quick links</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Popular categories</h3>
            <ul>
              {categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Visit us</h3>
            <ul>
              <li>Area 36 Market Lane, Lilongwe</li>
              <li>Open daily: 7:00 AM - 9:00 PM</li>
              <li>
                <a href="tel:+265881146791">+265 881 146 791</a>
              </li>
              <li>
                <a href="mailto:frutocana@gmail.com">frutocana@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="modern-footer__bottom">
          <p>© 2026 Family Fair Supermarket. All rights reserved.</p>
          <div className="modern-footer__socials">
            <a href="https://www.instagram.com/familyfair2026" target="_blank" rel="noreferrer">Instagram</a>
            {/* <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
