import React, { useState } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import C1 from '../../Assets/c1.png';
import C2 from '../../Assets/c2.jpg';

interface CarPart {
    id: number;
    name: string;
    price: number;
    rating: number;
    image: string;
  }
  
  const carParts: CarPart[] = [
    {
      id: 1,
      name: 'Brake Pads',
      price: 49.99,
      rating: 4.5,
      image: C1,
    },
    {
      id: 2,
      name: 'Oil Filter',
      price: 9.99,
      rating: 3.8,
      image: C2,
    },
    {
        id: 3,
        name: 'Oil Filter',
        price: 9.99,
        rating: 3.8,
        image: C2,
      },
      {
        id: 4,
        name: 'Oil Filter',
        price: 9.99,
        rating: 3.8,
        image: C2,
      },
      {
        id: 5,
        name: 'Oil Filter',
        price: 9.99,
        rating: 3.8,
        image: C2,
      },
      {
        id: 6,
        name: 'Oil Filter',
        price: 9.99,
        rating: 3.8,
        image: C2,
      },
      {
        id: 7,
        name: 'Oil Filter',
        price: 9.99,
        rating: 3.8,
        image: C2,
      },


    // Add more car parts here...
  ];
const Products = () => {

    const [showAll, setShowAll] = useState(false);

    const handleAddToCart = (carPart: CarPart) => {
      // Implement your logic for adding the car part to the cart
      console.log(`Added ${carPart.name} to cart.`);
    };
  
    const visibleCarParts = showAll ? carParts : carParts.slice(0, 4);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    
      return (
        <>
      <div className="bg-slate-100 min-h-screen p-6" id="products">
        <h1 className="text-2xl font-bold mb-4 text-center border-b border-gray-200">
          Our Car Part Products
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {visibleCarParts.map((carPart) => (
            <div key={carPart.id} className="p-4 border rounded">
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
              <button
                onClick={() => handleAddToCart(carPart)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))}
          {!showAll && carParts.length > 4 && (
            <div className="col-span-full text-center">
              <button
                onClick={() => setShowAll(true)}
                className="text-blue-500 font-bold underline"
              >
                See More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
      );
}

export default Products