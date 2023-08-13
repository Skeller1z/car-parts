import React, { useState } from 'react';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    toggleDropdown(); // Close the dropdown after selecting a language
  };

  return (
    <div className="relative md:ml-6">
      <button
        onClick={toggleDropdown}
        className="flex items-center text-white rounded-md focus:outline-none"
      >
        <FontAwesomeIcon icon={faEarthAmericas} className="mr-2"  style={{ fontSize: '18px' }}/>
        <span>{selectedLanguage}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 bg-gray-800 text-white rounded-md shadow-lg z-10">
          {/* Language options */}
          <button
            onClick={() => handleLanguageChange('English')}
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange('ไทย')}
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
          >
           ไทย
          </button>
          <button
            onClick={() => handleLanguageChange('Español')}
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
          >
            Español
          </button>
          <button
            onClick={() => handleLanguageChange('Français')}
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
          >
            Français
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
