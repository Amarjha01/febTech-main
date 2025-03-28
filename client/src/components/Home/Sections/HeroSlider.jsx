import React from "react";
import { NavLink } from "react-router-dom";

const HeroSlider = ({ data }) => {
  return (
    <div
      className="hero w-[100%] md:h-auto lg:h-[90vh] lg:py-10  h-[100%] py-5 flex flex-col lg:flex-row lg:justify-center lg:items-center  gap-5 lg:gap-2"
      style={{
        background: `url(headerBg.png) no-repeat center center/cover`,
      }}
    >
      <div className="content py-10 lg:w-[45%] w-[100%] flex lg:pl-10 gap-2 flex-col justify-center sm:items-center lg:items-start lg:text-left lg:gap-4 2xl:gap-4 px-2">
        <p className="w-full sm:w-[50%] a-shadow-sm text-white max-sm:text-xs sm:text-base 2xl:text-lg lg:w-[70%] bg-[#1136FF] py-2 px-2 rounded-md mt-3 text-center">
          {data.title}
        </p>
        <h1 className="text-[#00234B] text-xl sm:text-2xl 2xl:text-5xl font-bold uppercase text-center lg:text-left leading-loose">
          {data.main}
        </h1>
        <p className="text-[#00234B] max-sm:w-[90%] max-sm:text-center max-sm:text-lg sm:text-lg xl:text-xl max-sm:mx-auto xl:leading-relaxed">
          {data.para}
        </p>
        <NavLink
          to="/services"
          className="w-[220px] text-black border-2 border-blue-200 text-lg bg-transparent px-8 max-sm:mx-auto  py-3
        myBtn"
        >
          Discover More &gt;&gt;
        </NavLink>
      </div>
      <div className="imageContainer md:w-[80%]  lg:w-2/5 w-[99%] max-sm:py-5">
        <img
          className="max-md:w-[10%] w-1/4 xl:h-full mt-2"
          src={data.src}
          alt="slider"
        />
      </div>
    </div>
  );
};

export default HeroSlider;
