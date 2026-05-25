import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import { useState } from "react";

function ProductList() {
  const dispatch = useDispatch();
  const [added, setAdded] = useState({});

  const plantsArray = [
    {
      category: "Indoor Plants",
      plants: [
        { id: 1, name: "Aloe Vera", price: 10, img: "img1.jpg" },
        { id: 2, name: "Snake Plant", price: 15, img: "img2.jpg" },
        { id: 3, name: "Peace Lily", price: 20, img: "img3.jpg" },
      ],
    },
    {
      category: "Outdoor Plants",
      plants: [
        { id: 4, name: "Rose", price: 12, img: "img4.jpg" },
        { id: 5, name: "Jasmine", price: 18, img: "img5.jpg" },
        { id: 6, name: "Lavender", price: 22, img: "img6.jpg" },
      ],
    },
  ];

  const handleAdd = (plant) => {
    dispatch(addItem({ ...plant, quantity: 1 }));
    setAdded({ ...added, [plant.id]: true });
  };

  return (
    <div>
      <h2>Products</h2>

      {plantsArray.map((cat) => (
        <div key={cat.category}>
          <h3>{cat.category}</h3>

          <div>
            {cat.plants.map((plant) => (
              <div key={plant.id}>
                <img src={plant.img} alt={plant.name} width="100" />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>

                <button
                  onClick={() => handleAdd(plant)}
                  disabled={added[plant.id]}
                >
                  {added[plant.id] ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;