import React from 'react';

const SkeletonLoading = () => {
  return (
    <div className="animate-pulse">
      {/* Adjust the styling as needed */}
      <div className="h-20 w-full bg-gray-300 mb-4"></div>
      <div className="h-6 w-2/3 bg-gray-300 mb-2"></div>
      <div className="h-6 w-1/3 bg-gray-300 mb-2"></div>
    </div>
  );
};

export default SkeletonLoading;
