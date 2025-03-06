import React from 'react';

function CompanyLogo({ name, logo }) {
  return (
    <div className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
      <img
        src={logo}
        alt={name}
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
}

export default CompanyLogo;