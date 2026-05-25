import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>

          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: item.quantity + 1,
                })
              )
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: item.quantity - 1,
                })
              )
            }
          >
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total Cart: ${getTotal()}</h3>
    </div>
  );
}

export default CartItem;