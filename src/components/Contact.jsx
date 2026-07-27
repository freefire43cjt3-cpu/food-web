import "../assets/styles/Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-title">
        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you. Whether you're booking a table or have a
          question, send us a message and we'll get back to you.
        </p>
      </div>

      <div className="contact-container">
        <form
          action="https://formspree.io/f/mgogrbye"
          method="POST"
          className="contact-form"
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
            type="tel"
            name="phone"
            placeholder="Phone Number"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Get In Touch</h3>

          <div className="info-item">
            <FaMapMarkerAlt />
            <span>25 Aba Road, Port Harcourt, Rivers State</span>
          </div>

          <div className="info-item">
            <FaPhoneAlt />
            <span>+234 813 536 2066</span>
          </div>

          <div className="info-item">
            <FaEnvelope />
            <span>info@flavornest.com</span>
          </div>

          <div className="info-item">
            <FaClock />
            <span>Mon - Sun: 8:00 AM - 11:00 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;