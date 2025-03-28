import React from "react";

const NewsLetter = () => {
  return (
    <div
      className="relative w-[80%] mx-auto xl:top-8   px-10 py-16  flex flex-col lg:flex-row items-center justify-center gap-5 rounded-lg "
      style={{
        background: `url(newsletterBg.jpg) no-repeat center center/cover`,
      }}
    >
      <div className="hnewslt flex flex-col gap-2 lg:w-1/2">
        <p className="lg:w-[40%] text-center px-3 rounded-md font-semibold py-2  text-white a-shadow-sm bg-[#1136ff] text-xl">
          Our NewsLetter
        </p>
        <p className="lg:w-[95%] font-bold text-[#000] text-xl 2xl:text-4xl leading-normal">
          Get Every Single Updates Newsletter Subscribe.
        </p>
      </div>
      <div className="lg:w-1/2 flex flex-col gap-5">
        <div className="flex flex-col gap-2 lg:flex-row lg:bg-white lg:w-[90%] py-2">
          <form
            action=""
            className="w-full flex flex-col gap-2 lg:flex-row px-2"
          >
            <input
              type="email"
              id="email"
              className="lg:w-[70%] p-2 outline-none border-none"
              placeholder="Enter Email Address"
            />
            <button
              type="submit "
              className="lg:w-[30%] text-white text-xl rounded-sm bg-[#000] hover:bg-slate-900 py-2 px-4 hover:shadow-2xl hover:shadow-[#1136ff]"
              htmlFor="email"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="relative  px-5">
          <p className="hletter text-base max-lg:text-center font-light text-gray-600 pl-4">
            Get Every 7 Days Updates or Monthly updates
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
