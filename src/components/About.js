import React from 'react';

//import data
import { about } from '../data';

//import icons
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const About = () => {
  //destructure about data
  const { title, subtitle1, subtitle2, icon, link } = about;

  return (
    <section
      id="about"
      className="py-[80px] md:py-[100px] lg:pt-[140px] lg:pb-[180px]"
    >
      <div className="container mx-auto px-[20px] lg:px-[135px]">
        {/* section title */}
        <div
          className='section-title-group justify-start
          data-aos="fade-up"
          data-aos-dlay="100"
        '
        >
          <img src={icon} alt="" />
          <h2 className="h2 section-title">
            {title} <span className="text-primary-200">.</span>
          </h2>
        </div>
        <p
          className="mb-12 md:text-bod-md"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {subtitle1}
        </p>
        <p
          className="mb-8 md:text-bod-md"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {subtitle2}
        </p>
        <div data-aos="fade-up" data-aos-delay="400">
          <a
            className="flex items-center transition-all link gap-x-4 hover:gap-x-6"
            href="/"
          >
            {link}
            <IoIosArrowDroprightCircle className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
