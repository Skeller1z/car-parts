import React, { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { carParts, CarPart } from './carPartsData';
import SkeletonLoading from '../Components/SkeletonLoading';
import FilterProduct from './FilterProduct';
import SortBy from './SortBy';
import { useNavigate } from 'react-router-dom';

const Products = () => {

  const [visibleCarParts, setVisibleCarParts] = useState<CarPart[]>([]);
  const [visibleIndex, setVisibleIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false); // Add loading state
  const navigate = useNavigate();
    useEffect(() => {
      // Initially, show the first batch of items
      const initialVisibleParts = carParts.slice(0, 10);
      setVisibleCarParts(initialVisibleParts);
      setVisibleIndex(initialVisibleParts.length);
    }, []);
    
    const handleScroll = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;
    
      if (bottom && !loading) { // Check if not loading
        setLoading(true); // Set loading to true before loading new data
    
        // Simulate an async delay to demonstrate loading (replace with your actual data fetching logic)
        setTimeout(() => {
          const newVisibleParts = carParts.slice(0, visibleIndex + 10);
          setVisibleCarParts(newVisibleParts);
          setVisibleIndex(visibleIndex + 10);
          setLoading(false); // Set loading to false after loading data
        }, 1000); // Simulated delay of 1 second
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [visibleIndex]);
    
    const handleDetails = () => {
        navigate('Main/Details')
    };

      return (
        <>
      <div className="bg-[#fef6f5] min-h-screen p-6" id="products">
        <h1 className="text-2xl font-bold mb-4 text-center border-b border-gray-200">
          Our Car Part Products
        </h1>
        <div className="flex">
        {/* ใส่ ProductFilter Component ไว้ทางซ้าย */}
        <div className="mr-4 w-1/4">
          <FilterProduct/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 "
        onClick={() => handleDetails()}
        >
          {visibleCarParts.map((carPart) => (
            <div key={carPart.id} className="bg-white shadow-md p-4 rounded hover:-translate-y-1 hover:scale-100 hover: duration-300">
              <img
                src={carPart.image}
                alt={carPart.name}
                className="h-40 w-full object-contain mb-4"
              />
              <h2 className="text-lg font-bold mb-2">{carPart.name}</h2>
              <p className="text-gray-600 mb-2">${carPart.price.toFixed(2)}</p>
              <div className="flex items-center mb-2">
                <span className="mr-1 text-yellow-500">
                  {carPart.rating.toFixed(1)}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-yellow-500"
                >
                  <polygon
                    points="12 2 15.09 8.63 22 9.27 17 14.03 18.18 21.01 12 17.77 5.82 21.01 7 14.03 2 9.27 8.91 8.63 12 2"
                  ></polygon>
                </svg>
              </div>
              {/* <button
                onClick={() => handleDetails()}
                className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button> */}
            </div>
          ))}
          </div>
        </div>
        {loading && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
    {/* Render the SkeletonLoading component when loading */}
Loading.......
    {/* Add more SkeletonLoading components as needed */}
  </div>
)}
      </div>
    </>
      );
}

export default Products

// {loading && (
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
//     {/* Render the SkeletonLoading component when loading */}
//     <SkeletonLoading />
//     <SkeletonLoading />
//     <SkeletonLoading />
//     <SkeletonLoading />
//     <SkeletonLoading />
//     {/* Add more SkeletonLoading components as needed */}
//   </div>
// )}