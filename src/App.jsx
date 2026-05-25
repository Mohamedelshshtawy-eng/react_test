import { useState } from "react";
import ProductList from "./ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="background-image">
      {!showProducts ? (
        <>
          <h1>Welcome to Paradise Nursery</h1>

          <button onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;