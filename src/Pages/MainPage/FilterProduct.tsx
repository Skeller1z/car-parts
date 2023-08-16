import React, { useState } from 'react';



const FilterProduct = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState('');

  return (
    <div className="p-4">
      <form>
        <label className="block mb-2 font-semibold">Filter by Price Range:</label>
        <div className="flex space-x-2 justify-center items-center">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            className="w-1/2 px-3 py-2 border rounded focus:ring focus:ring-blue-300"
          />
          <span>~</span>
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            className="w-1/2 px-3 py-2 border rounded focus:ring focus:ring-blue-300"
          />
        </div>
        <hr className='mt-4'/>
        <label className="block mt-2 mb-2 font-semibold">Filter by Category:</label>
        <select
          value={category}
          className="w-full px-3 py-2 border rounded focus:ring focus:ring-blue-300"
        >
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
        </select>
        <hr className='mt-4'/>
        <label className="block mt-2 mb-2 font-semibold">Filter by Rating:</label>
        <select
          value={rating}
          className="w-full px-3 py-2 border rounded focus:ring focus:ring-blue-300"
        >
          <option value="">All</option>
          <option value="1">1 star</option>
          <option value="2">2 stars</option>
          <option value="3">3 stars</option>
          <option value="4">4 stars</option>
          <option value="5">5 stars</option>
        </select>


        <button
          type="submit"
          className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default FilterProduct;
