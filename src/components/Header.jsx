import React from 'react';
import CompanyLogo from './CompanyLogo';
import { companies } from '../data/companies';

function Header() {
  return (
    <>
      <h1 className="text-center text-gray-700 text-2xl mb-12">
        Trusted by over 16,000 companies and millions of learners around the world
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-8 mb-20">
        {companies.map((company) => (
          <CompanyLogo 
            key={company.name}
            name={company.name}
            logo={company.logo}
          />
        ))}
      </div>
    </>
  );
}

export default Header;