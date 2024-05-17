import React from 'react';

const Button = ({ onClick, text }) => {
  return (
    <button
      className="group relative inline-block overflow-hidden duration-[1s] rounded-md border border-primary px-8 py-[5px] focus:outline-none focus:ring"
      
      onClick={onClick}
    >
      <span
        className="absolute inset-x-0 top-0 h-[2px] bg-primary transition-all group-hover:h-full group-active:bg-primary"
      ></span>

      <span
        className="relative text-sm font-medium text-primary transition-colors group-hover:text-white"
      >
        {text}
      </span>
    </button>
  );
};

export default Button;
