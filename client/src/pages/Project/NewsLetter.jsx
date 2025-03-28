import React from "react";

const NewsLetter = () => {
  return (
    <>
      <div className="bg-white w-full md:h-screen mb-10">
        <div className="h-[80%] w-[90%] m-auto bg-[#1136FF] a-shadow md:flex">
          <div className="md:w-[45%] md:h-full flex flex-col justify-center items-start gap-10 py-10 px-14 relative">
            <div>
              <span className="text-xl capitalize text-black font-bold bg-white text-center px-2 py-2 a-shadow-sm rounded ">
                our newsletter
              </span>
            </div>
            <p className="text-white 2xl:text-4xl sm:text-2xl font-semibold ">
              Get Every Single Updates Newsletter Subscribe
            </p>

            <div className="w-full border border-black flex ">
              <form action="" className="w-full flex">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter E-mail Address"
                  className="p-4 lg:w-full outline-none w-[70%]"
                />

                <div className="w-[30%] bg-white flex justify-center items-center">
                  <button
                    type="submit"
                    htmlFor="email"
                    className="text-sm bg-black text-white py-2 px-4 pn-shadow"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
            <div className="triangle">
              <img src="triangle.png" alt="triangle-icon" />
            </div>
          </div>

          <div className="md:w-[55%] md:flex items-center justify-center relative">
            <div className="trianglet">
              <img src="triangle.png" alt="triangle-icon" />
            </div>
            <div className="md:w-[65%] md:h-[70%] sliding p-10 md:p-0">
              <img
                src="./projectn-img.png"
                alt="newsletter image"
                className=""
              />
              <div className="w-[320px] h-[320px] md:border rounded-full md:animate-pulse md:animate-custom-pulse absolute right-10 bottom-0 top-0"></div>
            </div>

            <div className="flex absolute right-20 bottom-20 ">
              <img src="star.png" alt="star-img" className="rotate-infinite" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
