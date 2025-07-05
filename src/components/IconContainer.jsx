import React from 'react';

const IconContainer = ({ link, children, className = '', ariaLabel, ...props }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-[var(--main-color)] border-2 border-[var(--main-color)] font-serif shadow-md hover:bg-[var(--main-color)] hover:text-black hover:shadow-lg transition-all duration-300 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default IconContainer;