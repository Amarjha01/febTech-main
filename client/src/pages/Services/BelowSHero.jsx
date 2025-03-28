import React from "react";

const BelowSHero = () => {
  return (
    <>
      <div className="bg-[#ffffff] flex flex-col gap-10 lg:flex-row w-[85%] mx-auto my-8">
        {/* section-2 left part */}
        <div className="lg:w-1/2  w-[98%]  lg:h-screen flex lg:flex-row flex-col justify-center items-center  relative ">
          <div className="lg:w-[80%] w-[90%] z-10">
            <img src="contact-img1.png" alt="contact img-1" />
          </div>
          <div className="hidden lg:block pulse animate-custom-pulse2 rounded-full absolute w-[500px] h-[500px]"></div>
        </div>

        {/* section-2 right part */}

        <div className="lg:w-1/2 w-full lg:h-screen flex  flex-col justify-center items-center px-10 gap-6">
          <div className="flex flex-col justify-around gap-4 h-5/6">
            <div>
              <span className="text-xl capitalize text-white font-bold bg-[#1136FF] text-center px-2 py-2 a-shadow-sm rounded ">
                what we do
              </span>
            </div>
            <div>
              <p className="text-2xl md:text-4xl font-semibold">
                Amazing Solutions for Growth Digital Solutions
              </p>
            </div>
            <div className="text-lg">
              <p className="my-3">
                Feb Tech is a leading technology and digital marketing agency
                with a focus on providing innovative solutions to businesses
                across the globe. Established in 2020, our mission is to help
                businesses succeed in the digital era by leveraging cutting-edge
                technologies and the latest digital marketing trends.
              </p>
              <p>
                At Feb Tech, we pride ourselves on delivering exceptional
                results that exceed our clients’ expectations. Our approach is
                centered on understanding our clients’ unique needs and
                developing customized solutions to help them achieve their
                business goals. We strive to build long-lasting relationships
                with our clients by providing personalized services and
                exceptional customer support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BelowSHero;
