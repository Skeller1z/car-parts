import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Help: React.FC = () => {
  return (
    <div className="flex items-center cursor-pointer md:ml-6">
      <FontAwesomeIcon icon={faCircleInfo} style={{ fontSize: '18px' }}/>
    </div>
  );
};

export default Help;
