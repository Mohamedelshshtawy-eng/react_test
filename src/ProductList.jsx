import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

function ProductList() {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: "Rose", price: 10 },
    { id: 2, name: "Cactus", price: 15 }
  ];

  return (
    <div>
      <h2>Products</h2>

      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>

          <button onClick={() => dispatch(addItem(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;