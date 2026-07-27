import "../assets/styles/Footer.css";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">
          <h2>🍽 FlavorNest</h2>

          <p>
            Bringing unforgettable dining experiences with fresh ingredients,
            exceptional chefs, and world-class hospitality.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-box">
          <h3>Contact</h3>

          <p><FaLocationDot /> 25 Aba Road, Port Harcourt</p>
          <p><IoCall /> +234 813 636 2066</p>
          <p><MdEmail /> info@flavornest.com</p>
        </div>

        <div className="footer-box">
          <h3>Follow Us</h3>

          <div className="socials">

           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
  <FaFacebookF />
</a>

<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
  <FaInstagram />
</a>

<a href="https://x.com" target="_blank" rel="noopener noreferrer">
  <FaXTwitter />
</a>

          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 FlavorNest. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;