import "../assets/styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-title">
        <span>BOOK A TABLE</span>
        <h2>Reserve Your Dining Experience</h2>
        <p>
          Reserve your table today and enjoy delicious meals in a warm,
          elegant atmosphere.
        </p>
      </div>

      <div className="contact-wrapper">

        <div className="reservation-box">

          <h3>Reservation Form</h3>

          <form
            action="https://formspree.io/f/mgogrbye"
            method="POST"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
            />

            <input
              type="date"
              name="date"
              required
            />

            <input
              type="time"
              name="time"
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Special Requests..."
            ></textarea>

            <button type="submit">
              Reserve Now
            </button>

          </form>

        </div>

        <div className="info-box">

          <h3>Visit FlavorNest</h3>

          <p>📍 25 Aba Road, Port Harcourt</p>

          <p>📞 +234 800 123 4567</p>

          <p>✉ reservations@flavornest.com</p>

          <p>🕘 Mon - Sun: 8AM - 11PM</p>

          <div className="opening">
            <h4>Opening Hours</h4>

            <p>Breakfast : 8AM - 11AM</p>
            <p>Lunch : 12PM - 4PM</p>
            <p>Dinner : 6PM - 11PM</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;