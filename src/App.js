import React, { useState } from 'react';
import './App.css';

const dishes = [
  {
    name: 'Signature Grilled Steak',
    category: 'Main Course',
    price: '₦18,500',
    description: 'Tender grilled steak, roasted potatoes and seasonal vegetables.',
    image: 'photo-1546833999-b9f581a1996d',
    tag: 'CHEF’S SPECIAL',
  },
  {
    name: 'Creamy Chicken Pasta',
    category: 'Main Course',
    price: '₦12,500',
    description: 'Creamy herb sauce, grilled chicken and freshly prepared pasta.',
    image: 'photo-1473093295043-cdd812d0e601',
    tag: 'POPULAR',
  },
  {
    name: 'Golden Crispy Chicken',
    category: 'Main Course',
    price: '₦10,000',
    description: 'Crispy seasoned chicken served with golden fries and house sauce.',
    image: 'photo-1626082927389-6cd097cdc6ec',
    tag: '',
  },
  {
    name: 'Chocolate Indulgence',
    category: 'Dessert',
    price: '₦6,500',
    description: 'Rich chocolate dessert with a smooth, velvety finish.',
    image: 'photo-1606313564200-e75d5e30476c',
    tag: 'SWEET FAVOURITE',
  },
  {
  name: 'Tropical Fresh Juice',
  category: 'Drinks',
  price: '₦3,500',
  description: 'A refreshing blend inspired by fresh tropical fruits.',
  image: '/images/juice.jpeg',
  tag: '',
},
  {
    name: 'Smoky Grilled Salmon',
    category: 'Main Course',
    price: '₦16,000',
    description: 'Flavourful grilled salmon with greens and a delicate house dressing.',
    image: 'photo-1467003909585-2f8a72700288',
    tag: 'CHEF’S PICK',
  },
];

const photo = (id, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

function App() {
  const [category, setCategory] = useState('All');
  const [menuOpen, setMenuOpen] = useState(false);
  const [reservation, setReservation] = useState({
    name: '',
    phone: '',
    date: '',
    time: '18:00',
    guests: '2 Guests',
    note: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const categories = ['All', 'Main Course', 'Drinks', 'Dessert'];

  const visibleDishes =
    category === 'All'
      ? dishes
      : dishes.filter((dish) => dish.category === category);

  const updateReservation = (event) => {
    const { name, value } = event.target;
    setReservation((previous) => ({ ...previous, [name]: value }));
  };

  const submitReservation = (event) => {
    event.preventDefault();

    const message = [
      'Hello SAVORÉ! I would like to request a table reservation.',
      '',
      `Name: ${reservation.name}`,
      `Phone: ${reservation.phone}`,
      `Date: ${reservation.date}`,
      `Time: ${reservation.time}`,
      `Guests: ${reservation.guests}`,
      `Special request: ${reservation.note || 'None'}`,
    ].join('\n');

    setSubmitted(true);
    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="site-shell" id="top">
      <div className="announcement">
        <span>GOOD FOOD</span>
        <i>✦</i>
        <span>GREAT COMPANY</span>
        <i>✦</i>
        <span>MEMORABLE MOMENTS</span>
      </div>

      <header className="navbar">
        <a className="brand" href="#top" aria-label="SAVORÉ home">
          <span className="brand-mark">S.</span>
          <span className="brand-copy">
            <strong>SAVORÉ</strong>
            <small>RESTAURANT &amp; GRILL</small>
          </span>
        </a>

        <button
          className="mobile-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          {[
            ['Home', '#top'],
            ['Our Story', '#about'],
            ['Menu', '#menu'],
            ['Gallery', '#gallery'],
            ['Reservations', '#reservations'],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-cta"
            href="#reservations"
            onClick={() => setMenuOpen(false)}
          >
            Book a Table <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-image" />
          <div className="hero-content">
            <p className="eyebrow">
              <span className="gold-dot" /> A NEW STANDARD OF DINING
            </p>
            <h1>
              Exceptional food.
              <br />
              <span>Unforgettable</span>
              <br />
              experiences.
            </h1>
            <p className="hero-description">
              Discover beautifully prepared dishes, warm hospitality and
              an atmosphere made for life's special moments.
            </p>

            <div className="hero-actions">
              <a className="button button-gold" href="#reservations">
                Reserve Your Table <span>↗</span>
              </a>
              <a className="button button-outline" href="#menu">
                Explore Our Menu
              </a>
            </div>

            <div className="hero-note">
              <span className="note-line" />
              Crafted with passion. Served with care.
            </div>
          </div>

          <div className="hero-side-label">GOOD TASTE NEVER GOES OUT OF STYLE</div>

          <div className="hero-bottom">
            <div>
              <span className="feature-icon">✳</span>
              <p><strong>Fresh ingredients</strong><small>Quality in every bite</small></p>
            </div>
            <div>
              <span className="feature-icon">♨</span>
              <p><strong>Crafted with care</strong><small>Made fresh to order</small></p>
            </div>
            <div>
              <span className="feature-icon">✦</span>
              <p><strong>Made for moments</strong><small>Gather, dine, enjoy</small></p>
            </div>
          </div>
        </section>

        <section className="story section-pad" id="about">
          <div className="story-visual">
            <img
              src="/images/ray.jpeg"
              alt="Elegant restaurant dining room"
            />
            <div className="image-caption">
              <span>THE SAVORÉ EXPERIENCE</span>
              <strong>Where every detail matters.</strong>
            </div>
            <div className="story-stamp">
              <span>MADE WITH</span>
              <strong>♥</strong>
              <span>PASSION</span>
            </div>
          </div>

          <div className="story-copy">
            <p className="eyebrow"><span className="gold-dot" /> OUR STORY</p>
            <h2>
              More than a meal.
              <br />
              <span>A feeling.</span>
            </h2>
            <p>
              At SAVORÉ, we believe great food brings people together. Every
              dish is an opportunity to create something memorable, from
              the first aroma to the very last bite.
            </p>
            <p>
              Inspired by bold flavours and thoughtful hospitality, we create
              a welcoming space for celebrations, conversations and everyday
              moments worth savouring.
            </p>
            <a className="text-link" href="#menu">
              DISCOVER OUR MENU <span>↗</span>
            </a>

            <div className="story-stats">
              <div><strong>01</strong><span>Passion in<br />every plate</span></div>
              <div><strong>02</strong><span>Quality without<br />compromise</span></div>
              <div><strong>03</strong><span>Moments worth<br />remembering</span></div>
            </div>
          </div>
        </section>

        <section className="menu-section section-pad" id="menu">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="gold-dot" /> THE MENU</p>
              <h2>A little taste of <span>something special.</span></h2>
            </div>
            <p>
              Thoughtfully selected favourites, made to bring a little
              more joy to your table.
            </p>
          </div>

          <div className="menu-toolbar">
            <div className="category-tabs" aria-label="Filter menu">
              {categories.map((item) => (
                <button
                  key={item}
                  className={category === item ? 'category active' : 'category'}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <span className="menu-count">
              {visibleDishes.length} DISHES TO DISCOVER
            </span>
          </div>

          <div className="dish-grid">
            {visibleDishes.map((dish, index) => (
              <article
                className="dish-card"
                key={dish.name}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="dish-image-wrap">
  <img
    src={
      dish.image.startsWith("/")
        ? dish.image
        : photo(dish.image, 800)
    }
    alt={dish.name}
    loading="lazy"
  />

  {dish.tag && <span className="dish-tag">{dish.tag}</span>}

  <span className="dish-number">0{index + 1}</span>
</div>
                <div className="dish-info">
                  <div className="dish-title-row">
                    <h3>{dish.name}</h3>
                    <strong>{dish.price}</strong>
                  </div>
                  <p>{dish.description}</p>
                  <a
                    href="#reservations"
                    className="dish-order"
                    onClick={() => setReservation((prev) => ({
                      ...prev,
                      note: `Interested in ${dish.name}`,
                    }))}
                  >
                    ASK ABOUT THIS DISH <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="menu-bottom">
            <span>GOOD FOOD. GOOD MOOD. ALWAYS.</span>
            <a className="button button-outline" href="#reservations">
              Plan Your Visit <span>↗</span>
            </a>
          </div>
        </section>

        <section className="experience">
          <div className="experience-image">
            <img
              src={photo('photo-1517248135467-4c7edcad34c4', 1400)}
              alt="Warm and welcoming restaurant interior"
              loading="lazy"
            />
          </div>
          <div className="experience-copy">
            <p className="eyebrow"><span className="gold-dot" /> MORE THAN DINING</p>
            <h2>
              Come for the food.
              <br />
              <span>Stay for the feeling.</span>
            </h2>
            <p>
              Whether it’s a relaxed lunch, a special celebration or a
              spontaneous dinner, make room for good food and even better
              company.
            </p>
            <a className="button button-gold" href="#reservations">
              Make It A Date <span>↗</span>
            </a>
          </div>
        </section>

        <section className="gallery-section section-pad" id="gallery">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="gold-dot" /> THE GALLERY</p>
              <h2>Feast your <span>eyes.</span></h2>
            </div>
            <p>A glimpse into the flavours, atmosphere and details that make SAVORÉ special.</p>
          </div>

          <div className="gallery-grid">
            <div className="gallery-item gallery-tall">
              <img src={photo('photo-1547592180-85f173990554', 1000)} alt="Freshly prepared food" loading="lazy" />
              <span>Freshly prepared</span>
            </div>
            <div className="gallery-item">
              <img src={photo('photo-1555939594-58d7cb561ad1', 800)} alt="Grilled specialities" loading="lazy" />
              <span>From the grill</span>
            </div>
            <div className="gallery-item">
              <img src="/images/ray3.jpeg" alt="Colourful restaurant dish" loading="lazy" />
              <span>Made with care</span>
            </div>
            <div className="gallery-item">
              <img src={photo('photo-1517248135467-4c7edcad34c4', 800)} alt="Restaurant atmosphere" loading="lazy" />
              <span>Warm ambience</span>
            </div>
            <div className="gallery-item">
              <img src={photo('photo-1490645935967-10de6ba17061', 800)} alt="Fresh ingredients and greens" loading="lazy" />
              <span>Fresh ingredients</span>
            </div>
          </div>
        </section>

        <section className="reservation-section section-pad" id="reservations">
          <div className="reservation-intro">
            <p className="eyebrow"><span className="gold-dot" /> YOUR TABLE AWAITS</p>
            <h2>Good times begin<br />with <span>a reservation.</span></h2>
            <p>
              Planning a dinner, a special occasion or just a lovely meal?
              Send us your preferred details and let's get things started.
            </p>
            <div className="reservation-detail">
              <span>✦</span>
              <div><strong>A table made for you</strong><small>Share your preferred date and time.</small></div>
            </div>
            <div className="reservation-detail">
              <span>✦</span>
              <div><strong>Personal attention</strong><small>We'll help you plan your visit.</small></div>
            </div>
          </div>

          <form className="reservation-form" onSubmit={submitReservation}>
            <div className="form-heading">
              <span>01 / BOOK YOUR EXPERIENCE</span>
              <h3>Request a table</h3>
              <p>Fill in the details below to continue via WhatsApp.</p>
            </div>

            {submitted && (
              <div className="form-success" role="status">
                Your request is ready. Complete sending it in WhatsApp to contact the restaurant.
              </div>
            )}

            <div className="form-row">
              <label>
                Full name
                <input
                  name="name"
                  value={reservation.name}
                  onChange={updateReservation}
                  placeholder="Your name"
                  required
                />
              </label>
              <label>
                Phone number
                <input
                  name="phone"
                  type="tel"
                  value={reservation.phone}
                  onChange={updateReservation}
                  placeholder="+234..."
                  required
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Preferred date
                <input
                  name="date"
                  type="date"
                  min={new Date().toLocaleDateString('en-CA')}
                  value={reservation.date}
                  onChange={updateReservation}
                  required
                />
              </label>
              <label>
                Preferred time
                <select name="time" value={reservation.time} onChange={updateReservation}>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="21:00">9:00 PM</option>
                </select>
              </label>
            </div>

            <label>
              Number of guests
              <select name="guests" value={reservation.guests} onChange={updateReservation}>
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5 Guests</option>
                <option>6 Guests</option>
                <option>7+ Guests</option>
              </select>
            </label>

            <label>
              Special requests <span className="optional">(optional)</span>
              <textarea
                name="note"
                value={reservation.note}
                onChange={updateReservation}
                placeholder="Celebration, seating preference, or anything we should know..."
                rows="3"
              />
            </label>

            <button className="button button-gold form-submit" type="submit">
              Continue on WhatsApp <span>↗</span>
            </button>
            <small className="form-footnote">
              This sends a reservation request. Your table is not confirmed until the restaurant replies.
            </small>
          </form>
        </section>

        <section className="final-cta">
          <p className="eyebrow">AN EXPERIENCE WORTH SAVOURING</p>
          <h2>Your next favourite meal<br /><span>starts here.</span></h2>
          <a className="button button-gold" href="#menu">Explore the menu <span>↗</span></a>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="footer-main">
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark">S.</span>
            <span className="brand-copy">
              <strong>SAVORÉ</strong>
              <small>RESTAURANT &amp; GRILL</small>
            </span>
          </a>
          <p>Good food brings us together.<br />Make every moment worth savouring.</p>
          <a
            className="footer-contact"
            href="https://wa.me/?text=Hello%20SAVOR%C3%89%2C%20I%27d%20like%20to%20make%20an%20enquiry."
            target="_blank"
            rel="noreferrer"
          >
            Make an enquiry on WhatsApp ↗
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SAVORÉ Restaurant &amp; Grill</span>
          <span>Crafted with care. Served with passion.</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
        <p className="concept-note">
          SAVORÉ is a fictional portfolio concept by RAY DIGITAL. Menu items,
          prices and restaurant details are illustrative.
        </p>
      </footer>
    </div>
  );
}

export default App;