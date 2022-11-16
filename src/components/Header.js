import React, { useEffect, useState } from 'react';

// import header data
import { header } from '../data';

// import components
import Nav from './Nav';
import NavMobile from './NavMobile';

// import icons
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    // scroll event
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  // destructurre header data
  const { logo, btnLogoinText, btnSignupText } = header;

  return (
    <header
      className={`${
        isActive ? 'bg-neutral-500 py-[16px]' : 'bg-transparent py-[20px]'
      } fixed max-w-[1440px] left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] z-30 transition-all duration-300`}
    >
      {/* logo */}
      <a href={'/'}>
        <img className="h-[30px]" src={logo} alt="" />
      </a>

      {/* nav - initially hidden - show in desktop mode */}
      <Nav />

      {/* buttons - initially hidden - show in desktop mode */}
      <div className="hidden space-x-4 lg:flex">
        <button className="text-white transition btn btn-sm hover:text-primary-200">
          {btnLogoinText}
        </button>
        <button className="btn btn-sm btn-primary">{btnSignupText}</button>
      </div>

      {/* nav menu button - hide on desktop */}
      <div
        onClick={() => setNavMobile(!navMobile)}
        className="absolute lg:hidden right-4"
      >
        {navMobile ? (
          <RiCloseFill className="text-3xl cursor-pointer text-primry-200" />
        ) : (
          <RiMenu4Fill className="text-3xl cursor-pointer text-primary-200" />
        )}
      </div>

      {/* nav mobile - hide on desktop */}
      <div
        onClick={() => setNavMobile(false)}
        className={`${navMobile ? 'max-h-full' : 'max-h-0 overflow-hidden'} ${
          isActive ? 'top-[100px] lg:top-[110px]' : 'top-[120px] lg:top-[150px]'
        } fixed left-0 -z-10 w-full h-full bg-white transition-all duration-300 xl:hidden`}
      >
        <NavMobile navMobile={navMobile} />
      </div>
    </header>
  );
};

export default Header;
