import "../assets/styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Experience Fine Dining Like Never Before</h1>

          <p>
            Fresh ingredients, unforgettable flavors, and a warm atmosphere.
            Enjoy delicious meals prepared with passion.
          </p>

          <div className="hero-buttons">
            <button className="order-btn">Order Now</button>
            <button className="menu-btn">View Menu</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;