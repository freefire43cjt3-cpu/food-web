import "../assets/styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-heading">
        <span>CONTACT US</span>
        <h2>Reserve Your Table Today</h2>
        <p>
          We'd love to hear from you. Whether you're booking a table or have a
          question, send us a message and we'll get back to you.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-form">
          <form
            action="https://formspree.io/f/mgogrbye"
            method="POST"
          >

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>
        </div>

        <div className="contact-info">

          <h3>Get In Touch</h3>

          <p>📍 25 Aba Road, Port Harcourt, Rivers State</p>

          <p>📞 +234 813 636 2066</p>

          <p>✉ info@flavornest.com</p>

          <p>🕒 Mon - Sun: 8:00 AM - 11:00 PM</p>

        </div>

      </div>

    </section>
  );
}

export default Contact;