import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>

          <p>Quantity: {item.quantity || 1}</p>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Remove
          </button>

          <button
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, quantity: (item.quantity || 1) + 1 }))
            }
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
}

export default CartItem;