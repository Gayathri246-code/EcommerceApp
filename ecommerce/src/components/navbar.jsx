
import "./../styles/navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar({ search, setSearch, theme, setTheme }) {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="logo">E-Shop</div>
      </Link>

      <div className="search-box">
        <input
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>🔍</button>
      </div>

      <Link to="/cart" style={{ color: "white" }}>
        <div className="cart">
          🛒 Cart
          <span>{cartItems.length}</span>
        </div>
      </Link>
      <button
  onClick={() =>
    setTheme(theme === "light" ? "dark" : "light")
  }
  style={toggleBtn}
>
  {theme === "light" ? "🌙" : "☀️"}
</button>

    </div>
  );
}

const toggleBtn = {
  marginLeft: "15px",
  fontSize: "20px",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  color: "white"
};

export default Navbar;
