import React, { useState } from 'react';

const Cart = () => {
  const [details, setDetails] = useState([
    { No: "1", Price: 10, Quantity: 0 },
    { No: "2", Price: 15, Quantity: 0 },
    { No: "3", Price: 20, Quantity: 0 },
    { No: "4", Price: 25, Quantity: 0 },
    { No: "5", Price: 30, Quantity: 0 },
    { No: "6", Price: 35, Quantity: 0 },
    { No: "7", Price: 40, Quantity: 0 },
    { No: "8", Price: 45, Quantity: 0 },
    { No: "9", Price: 50, Quantity: 0 },
    { No: "10", Price: 55, Quantity: 0 },
  ]);

  // Calculate total value
  const totalValue = details.reduce((total, item) => total + item.Price * item.Quantity, 0);

  // Handle "Add To Cart" button click
  const handleAddToCart = (index) => {
    const newDetails = [...details];
    newDetails[index].Quantity += 1; // Increment quantity
    setDetails(newDetails);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Total Value: ${totalValue}</h2>
      <div className="flex flex-wrap justify-around">
        {details.map((item, index) => (
          <div
            key={index}
            className="border-2 border-black w-[200px] mb-[20px] flex flex-col justify-center items-center h-[200px] rounded-[10px] bg-green-400 shadow-md"
          >
            <p className="font-bold">Product {item.No}</p>
            <p>Price: ${item.Price}</p>
            <p>Quantity: {item.Quantity}</p>
            <button
              onClick={() => handleAddToCart(index)}
              className="bg-blue-500 px-4 py-2 rounded text-white mt-2 hover:bg-blue-600"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
