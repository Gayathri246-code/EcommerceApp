import "./../styles/product.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <Link to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt="" />
      </Link>

      <h4>{product.title}</h4>

      <div className="rating">
        ⭐ {product.rating}
      </div>

      <div className="price">₹ {product.price}</div>

      <button onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
