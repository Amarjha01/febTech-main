import React from "react";

const Testimonial = ({title,description,name,company,image}) => {

  return (
    <div className="w-[95%] flex flex-col ml-2 justify-center items-center">
      <div className="flex justify-center">
        <div className="htestBox lg:w-3/5 py-4 px-2 rounded-xl shadow-2xl">
          <p className="text-base text-center font-semibold text-[#000]">
            {title}
          </p>
          <p className="text-base text-center font-light text-[#494949]">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-6 px-3 flex lg:w-2/4 mx-auto  gap-5 py-4">
        <div className="w-[50px] h-[50px]  rounded-full border-2  border-gray-500">
          <img
            src={image}
            className="h-full w-full rounded-full"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-bold text-black">{name}</p>
          <p className="text-lg font-medium text-black">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
