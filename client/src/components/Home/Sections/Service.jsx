import React from "react";
import ServicesCard from "./ServicesCard";

const Service = () => {
  return (
    <>
      <div className="w-[100%]  pt-10 pb-2 hservice_bg">
        <div className="flex flex-col  justify-center items-center gap-4">
          <p className="text-center text-2xl rounded-md a-shadow-sm font-semibold bg-[#1136FF] py-2 text-white px-5 w-[190px] mb-[5vh]">
            Our Services
          </p>
          <p className="text-center max-sm:text-xl sm:text-3xl 2xl:text-4xl sm:w-3/4 leading-loose font-semibold text-[#000] px-2 mb-[5vh]">
            We believe in delivering quality services that exceed our client's expectations
          </p>
        </div>
        <div className="lg:w-[85%]  mx-auto  flex lg:flex-row gap-5 px-2  justify-center items-center mb-[5vh]">
          <ServicesCard />
        </div>
      </div>
    </>
  );
};

export default Service;
