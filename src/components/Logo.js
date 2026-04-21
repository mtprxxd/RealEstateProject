import React from 'react';
import logo from './karya_Logo.png';

export default function Logo({ size = 'md' }) {
  const sizes = {
    sm: 110
       
  };

  const h = sizes[size];

  return (
    <div className="flex items-center select-none py-0">
      
      <img
        src={logo}
        alt="KARYA Real Estate Logo"
        style={{ height: `${h}px`, width: 'auto' }}
        className="object-contain drop-shadow-md"
      />

    </div>
  );
}