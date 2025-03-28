import React from "react";
import { NavLink } from "react-router-dom";

const Growing = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-5 border-b-2 justify-between mt-5  lg:mt-12">
      <div className="flex w-full lg:w-1/2 max-sm:items-center border-r-2 px-2">
        <img
          id="heroImg1"
          className="w-full lg:w-[90%]"
          src="growing1.png"
          alt="Awesome hero page image"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-10 py-3 px-5 max-sm:justify-center">
        <h3 className="w-[220px] text-center rounded-md a-shadow-sm font-semibold py-2 px-3 text-white bg-[#1136ff] text-xl">
          Quality Service
        </h3>
        <p className="lg:w-4/5 max-lg:text-center max-sm:text-2xl sm:text-2xl 2xl:text-3xl font-semibold text-[#000] leading-normal">
          Feb Tech is incredibly for your business.
        </p>
        <p className="lg:w-3/4 lg:text-lg max-lg:text-center">
          Whether you're a startup, small business, or a large corporation, we
          have the expertise and experience to help you achieve your business
          objectives and reach your full potential in the digital landscape.
        </p>
        <div className="w-full max-sm:py-4 py-3 max-lg:flex max-lg:justify-center">
          <NavLink
            to="/services"
            className="text-black border-2 border-blue-200 text-lg bg-transparent px-8 py-3 myBtn"
          >
            Learn More &gt;&gt;
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Growing;
