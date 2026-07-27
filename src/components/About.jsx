import "../assets/styles/About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80"
          alt="Restaurant"
        />
      </div>

      <div className="about-content">
        <span>ABOUT US</span>

        <h2>Where Every Meal Becomes a Memorable Experience</h2>

        <p>
          At FlavorNest, we believe great food brings people together. Every
          dish is prepared with fresh ingredients, bold flavors, and passion to
          give you an unforgettable dining experience.
        </p>

        <p>
          Whether you're joining us for a family dinner, a romantic evening, or
          a quick lunch, our chefs are committed to serving delicious meals in a
          warm and welcoming atmosphere.
        </p>

        <button>Learn More</button>
      </div>
    </section>
  );
}

export default About;