import React from 'react';

const Box = ({ property, value, className = '', ...props }) => {
  return (
    <div
      className={`flex items-center rounded-full px-4 py-2 m-2 bg-gray-900 text-[var(--main-color)] border-2 border-[var(--main-color)] font-serif text-base md:text-lg shadow-md hover:bg-[var(--main-color)] hover:text-black hover:shadow-lg transition-all duration-300 ease-in-out ${className}`}
      {...props}
    >
      <span className="font-semibold">{property}:</span>
      <span className="text-white ml-2">{value}</span>
    </div>
  );
};

export default Box;