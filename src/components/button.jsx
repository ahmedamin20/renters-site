import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';

const Button = ({ className ,className2, to , onClick, text }) => {
  return (
    <Link
      className="group relative inline-block overflow-hidden duration-[1s] rounded-md px-8 py-[5px] focus:outline-none focus:ring"
      to={to}
      onClick={onClick}
    >
      <span
        className={cn("absolute inset-x-0 top-0 h-[2px] bg-primary transition-all group-hover:h-full group-active:bg-primary", className)}
      ></span>

      <span
        className={cn("relative text-sm font-medium text-primary transition-colors group-hover:text-white", className2)}
      >
        {text}
      </span>
    </Link>
  );
};

export default Button;
