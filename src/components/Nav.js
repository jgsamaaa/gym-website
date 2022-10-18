import React from 'react';

// import data
import { nav } from '../data';

const Nav = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex text-white gap-x-8">
        {nav.map((item, idx) => {
          return (
            <li key={idx}>
              <a href="/" className="transition hover:text-primary-200">
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
