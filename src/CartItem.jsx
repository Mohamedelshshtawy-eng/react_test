function CartItem({ item }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
}

export default CartItem;