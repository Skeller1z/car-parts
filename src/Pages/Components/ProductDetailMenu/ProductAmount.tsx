import React, { useState } from 'react';

const ProductAmount = () => {
  const [count, setCount] = useState(0);
  const [inventory, setInventory] = useState(10); 
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center">
      <button
        className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-2 px-4 rounded-l"
        onClick={decrement}
      >
        -
      </button>
      <span className="bg-gray-100 text-center py-2 px-4">{count}</span>
      <button
        className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-2 px-4 rounded-r"
        onClick={increment}
      >
        +
      </button>
      <span className="ml-4 text-gray-600">In Stock: {inventory}</span>
    </div>
  );
};

export default ProductAmount;
