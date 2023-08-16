import React, { useState } from 'react';


const SortBy = () => {
  const [selectedSort, setSelectedSort] = useState('');

  return (
    <div className="p-4 border rounded shadow">
      <label className="block mb-2 font-semibold">Sort by:</label>
      <select
        value={selectedSort}
        className="w-full px-3 py-2 border rounded focus:ring focus:ring-blue-300"
      >
        <option value="">Select</option>
        <option value="latest">Latest</option>
        <option value="bestseller">Bestseller</option>
        <option value="highToLow">Price: High to Low</option>
        <option value="lowToHigh">Price: Low to High</option>
      </select>
    </div>
  );
};

export default SortBy;
