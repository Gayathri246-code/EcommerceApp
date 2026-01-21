import "../styles/cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty
} from "../redux/cartSlice";

function Cart() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <h2 style={{ padding: "40px" }}>
        Your Amazon Cart is empty
      </h2>
    );
  }

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>

      {/* CART ITEMS */}
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.thumbnail} alt="" />

          <div>
            <h4>{item.title}</h4>
            <p>₹ {item.price}</p>

            <div>
              <button style={{backgroundColor:"green", color:"white"}} onClick={() => dispatch(decreaseQty(item.id))}>
                -
              </button>

              <span style={{ margin: "0 10px" }}>
                {item.quantity}
              </span>

              <button style={{backgroundColor:"green",color:"white"}} onClick={() => dispatch(increaseQty(item.id))}>
                +
              </button>
            </div>

            <br />

            <button style={{backgroundColor:"blue", color:"white"}}
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* CART SUMMARY */}
      <div className="cart-summary">
        <h3>Subtotal</h3>
        <h2>₹ {total}</h2>
        <button style={checkoutBtn}>
          Proceed to Buy
        </button>
      </div>
    </div>
  );
}

const checkoutBtn = {
  marginTop: "15px",
  padding: "10px",
  width: "100%",
  background: "#ffd814",
  border: "1px solid #fcd200",
  cursor: "pointer",
  fontSize: "16px"
};

export default Cart;
