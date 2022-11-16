import React from 'react';

// import data
import { banner } from '../data';

const Banner = () => {
  // destructure banner data
  const { titlePart1, titlePart2, subtitle, textBtn } = banner;
  return (
    <section id="home" className="bg-neutral-500 h-[790px]">
      <div className="container h-full mx-auto">
        <div className="relative flex items-center h-full -space-x-48 lg:-space-x-24">
          <div className="z-10 flex-1 pl-6 text-white lg:pl-0">
            <h1
              className="mb-8 text-white h1"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {titlePart1} <br />
              <span className="text-primary-200">{titlePart2}</span>
            </h1>
            <p
              className="max-w-[415px] text-body-md lg:text-body-lg mb-8"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              {subtitle}
            </p>
            <button
              className="btn btn-sm lg:btn-lg btn-secondary"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              {textBtn}
            </button>
          </div>
          {/* image */}
          <div
            className="flex-1 w-full h-full bg-right bg-no-repeat bg-cover bg-purple-50 bg-banner lg:bg-center"
            data-aos="fade-right"
            data-aos-delay="900"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
