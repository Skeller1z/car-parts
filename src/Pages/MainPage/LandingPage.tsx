import React from 'react';
import PlayStore from '../../Assets/palystore.png';
import AppStore from '../../Assets/appstore.png';
import SeatBelt from '../../Assets/seatbeltpng2.png';
import Bg from '../../Assets/bg.jpg';

const LandingPage = () => {
    
  return (
    <div className="min-h-screen flex items-center justify-center relative" id='firstpage'>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img className="w-full h-full object-cover" src={Bg} alt="Background" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="max-w-md w-full mx-auto px-6 py-8 relative z-5 bg-white bg-opacity-80 rounded-lg shadow-md">
        <div className="text-center">
          <img
            className="mx-auto h-20 w-auto"
            src={SeatBelt}
            alt="Car Parts Logo"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          <span className="text-4xl font-bold text-orange-500">W</span>elcome to SeatBelt Car Parts
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Find the right parts for your car.
          </p>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900 text-center">
            Your One-Stop Shop for Car Parts
          </h3>
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed iaculis elit augue, at accumsan mi imperdiet ut.
          </p>
          <div className="mt-8 text-center">
            <a
              href="#products"
              className="inline-block bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 transition-colors duration-300"
            >
              View Our Products
            </a>
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <a
              href="https://play.google.com/store/apps/details?id=yourapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-12"
                src={PlayStore}
                alt="Get it on Play Store"
              />
            </a>
            <a
              href="https://apps.apple.com/us/app/yourapp/id1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-12"
                src={AppStore}
                alt="Download on App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;