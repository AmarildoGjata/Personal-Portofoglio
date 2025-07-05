import React from 'react';

const CostumButton = ({ title, className = '', ...props }) => {
  return (
    <button
      className={`flex items-center justify-center w-40 md:w-48 h-12 rounded-full bg-[var(--main-color)] text-black font-serif text-lg font-semibold shadow-lg hover:bg-black hover:text-[var(--main-color)] hover:border-2 hover:border-[var(--main-color)] transition-all duration-300 ease-in-out ${className}`}
      {...props}
    >
      {title}
    </button>
  );
};

export default CostumButton;