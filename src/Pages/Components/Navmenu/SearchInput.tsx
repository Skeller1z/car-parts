import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SearchInput: React.FC = () => {
  return (
    <div className="flex w-full">
       <input
      type="text"
      placeholder="Search products..."
      className="bg-gray-800 text-white rounded-l-md py-2 px-4 my-4 focus:outline-none w-full"
    />
     <button className="bg-blue-500 text-white rounded-r-md py-2 px-4 my-4 hover:bg-blue-600 focus:outline-none">
     <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
   
  );
};

export default SearchInput;
