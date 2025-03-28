import React from "react";
import { NavLink } from "react-router-dom";

const Business = () => {
  return (
    <div className="flex flex-col lg:flex-row w-[100%] mx-auto gap-4 border-b-2 justify-between my-5 xl:my-16 ">
      <div className="flex w-full lg:w-1/2 max-sm:justify-center items-center border-r-2 px-2">
        <img
          id="heroImg1"
          className="w-[90%]"
          src="business.png"
          alt="Awesome hero page image"
        />
      </div>
      <div className="lg:w-1/2 flex flex-col gap-8 px-10 py-4 justify-center items-center lg:items-start">
        <h3 className="w-[290px] text-center rounded-md a-shadow-sm font-semibold py-2 px-3  text-white bg-[#1136ff] text-xl">
          Knowledge and Numbers
        </h3>
        <p className="lg:w-4/5  max-lg:text-center lg:text-3xl font-semibold text-[#000] max-sm:text-2xl leading-normal">
          There are several reasons to choose Feb Tech for your business
          needs.
        </p>
        <p className="lg:w-3/4 lg:text-lg text-center">
          We believe that by fostering a culture of collaboration and creativity
          within our team, we can continue to stay ahead of the curve in the
          rapidly-evolving IT industry.
        </p>
        <ul className="flex flex-col gap-4 max-lg:text-sm  lg:text-lg font-semibold">
          <li>
            <span className="mr-1 lg:mr-5  bg-[#1136ff] text-white rounded-full py-2 px-3">
              &#10003;
            </span>
            Experience
          </li>
          <li>
            <span className="mr-1 lg:mr-5 bg-[#1136ff] text-white rounded-full py-2 px-3">
              &#10003;
            </span>
            Timely Delivery{" "}
          </li>
          <li>
            <span className="mr-1 lg:mr-5 bg-[#1136ff] text-white rounded-full py-2 px-3">
              &#10003;
            </span>{" "}
            Afordable Pricing
          </li>
        </ul>
        <div className="w-full py-2 max-lg:flex max-sm:py-4 justify-center">
          <NavLink
            to="/client"
            className="myBtn bg-transparent  border-2 border-blue-200 text-[#000] text-lg bg-[#1136ff] px-8 py-3"
          >
            Learn More &gt;&gt;
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Business;
