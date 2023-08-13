import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import man from '../../../Assets/golf.jpg'

const Profile: React.FC = () => {
  return (
    <>
     <div className="flex items-center cursor-pointer md:ml-6 pr-6">
    <img src={man} alt='Profile' className='rounded-full w-8'/>
  </div>
    </>
  );
};

export default Profile;
