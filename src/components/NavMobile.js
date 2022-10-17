import React from 'react';

// import data
import { nav } from '../data';

const NavMobile = ({ navMobile }) => {
  return (
    <nav
      className={`${
        navMobile ? 'min-h-screen' : 'min-h-0'
      } w-fll fixed top-0 left-0 right-0 bg-neutral-500 -bottom-12 -z-10 lg:hidden overflow-hidden transition-all h-0`}
    >
      <ul className="top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-y-8">
        {nav.map((item, idx) => {
          return (
            <li key={idx}>
              <a className="text-white text-body-md" href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
      {/* buttons */}
      <div className="flex justify-center -mt-44 gap-x-8">
        <button className="text-white btn btn-lg">Log in</button>
        <button className="btn btn-lg btn-primary">Sign up</button>
      </div>
    </nav>
  );
};

export default NavMobile;
