import '../page/contacts.css';

export default function Contacts() {
  return (
    <section className="contacts">
      <div className="contacts__container">

        <div className="contacts__left">

          <div className="contacts__logo">
            <h2>FAMILY FAIR</h2>
            <span>SUPERMARKET</span>
          </div>

          <h1 className="contacts__title">
            Visit Family Fair <br />
            Supermarket Today
          </h1>

          <div className="contacts__points">
            <div className="contacts__point">
              <span>✓</span>
              <p>Fresh groceries and household essentials.</p>
            </div>

            <div className="contacts__point">
              <span>✓</span>
              <p>Affordable prices and weekly special offers.</p>
            </div>

            <div className="contacts__point">
              <span>✓</span>
              <p>Friendly shopping experience for families.</p>
            </div>

            <div className="contacts__point">
              <span>✓</span>
              <p>Convenient location with quality products.</p>
            </div>
          </div>

          <div className="contacts__testimonial">
            <h3>“</h3>

            <p>
              Family Fair has become our favorite supermarket.
              The environment is clean, the products are fresh,
              and the staff are always welcoming.
            </p>

            <h4>Sarah M.</h4>

            <span>Regular Customer | Lilongwe</span>
          </div>
        </div>

        <div className="contacts__right">

          <form className="contacts__form">

            <div className="contacts__group">
              <label>Full name</label>
              <input type="text" />
            </div>

            <div className="contacts__row">
              <div className="contacts__group">
                <label>Email</label>
                <input type="email" />
              </div>

              <div className="contacts__group">
                <label>Phone</label>
                <input type="text" />
              </div>
            </div>

            <div className="contacts__row">
              <div className="contacts__group">
                <label>City</label>
                <input type="text" />
              </div>

              <div className="contacts__group">
                <label>Country</label>

                <select>
                  <option>Malawi</option>
                  <option>Nigeria</option>
                  <option>South Africa</option>
                </select>
              </div>
            </div>

            <button type="submit" className="contacts__btn">
              Let’s Talk
            </button>

            <p className="contacts__terms">
              By clicking “Let’s Talk” you agree to our terms and privacy policy.
            </p>

          </form>
        </div>

      </div>
    </section>
  );
}