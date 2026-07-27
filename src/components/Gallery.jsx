import "../assets/styles/Gallery.css";

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <section className="gallery" id="gallery">

      <div className="gallery-title">
        <span>OUR GALLERY</span>
        <h2>Delicious Moments</h2>
        <p>
          A glimpse of our signature dishes and unforgettable dining experience.
        </p>
      </div>

      <div className="gallery-container">
        {images.map((image, index) => (
          <div className="gallery-card" key={index}>
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>

    </section>
  );
}

export default Gallery;