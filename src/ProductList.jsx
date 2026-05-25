function ProductList() {
  const products = [
    { id: 1, name: "Rose Plant" },
    { id: 2, name: "Cactus" }
  ];

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
}

export default ProductList;