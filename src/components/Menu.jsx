import "../assets/styles/Menu.css";

function Menu() {
  const menu = [
    {
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
      name: "Pepperoni Pizza",
      price: "$18",
      desc: "Loaded with mozzarella cheese and premium pepperoni."
    },
    {
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      name: "Classic Burger",
      price: "$15",
      desc: "Juicy beef burger with cheese and fresh vegetables."
    },
    {
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80",
      name: "Creamy Pasta",
      price: "$17",
      desc: "Fresh pasta tossed in a rich creamy sauce."
    },
    {
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      name: "Grilled Steak",
      price: "$25",
      desc: "Tender grilled steak served with vegetables."
    },
    {
      image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80",
      name: "Chocolate Cake",
      price: "$10",
      desc: "Soft chocolate cake topped with creamy frosting."
    },
    {
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      name: "Fresh Coffee",
      price: "$8",
      desc: "Freshly brewed premium coffee."
    }
  ];

  return (
    <section className="menu" id="menu">

      <div className="menu-title">
        <span>OUR MENU</span>
        <h2>Our Special Dishes</h2>
      </div>

      <div className="menu-container">
        {menu.map((item, index) => (
          <div className="menu-card" key={index}>

            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <p>{item.desc}</p>

            <h4>{item.price}</h4>

            <button>Order Now</button>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Menu;