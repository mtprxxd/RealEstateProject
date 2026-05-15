import React from 'react';
import logo from './karya_Logo.png';

export default function Logo({ size = 'md', variant }) {
  const sizes = {
    sm: 'h-14 md:h-16',
    md: 'h-20 md:h-24',
    lg: 'h-28 md:h-36',
  };

  return (
    <div className="flex items-center select-none">
      <img
        src={logo}
        alt="KARYA Real Estate"
        className={`${sizes[size]} w-auto object-contain drop-shadow-lg transition-all duration-300`}
      />
    </div>
  );
}