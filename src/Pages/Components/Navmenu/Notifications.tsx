import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Notifications: React.FC = () => {
  return (
    <div className="relative flex items-center cursor-pointer md:ml-6">
      <FontAwesomeIcon icon={faBell} style={{ fontSize: '18px' }}/>
      <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500  rounded-full -top-2 -right-2 dark:border-gray-900">3</div>
    </div>
  );
};

export default Notifications;
