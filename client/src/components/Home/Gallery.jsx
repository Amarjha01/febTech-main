import React from "react";

const Gallery = () => {
  return (
    <div className="bg-gray-100 pt-[5vh]">
      <div className="p-4 mx-auto text-center sm:max-w-full">
        <span className="text-xl capitalize text-white font-bold bg-[#1136FF] text-center px-2 py-2 a-shadow-sm rounded">
          Our Gallery
        </span>
        <div className="gallery_container grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 mt-4 py-4 mt-[8vh]">
          <div className="child mx-auto scale-100 hover:scale-[1.1] transition-all duration-700 ease-in w-full h-full">
            <img src="./gallery1.jpg" className="w-full h-full" alt="" />
          </div>
          <div className="child mx-auto scale-100 hover:scale-[1.1] transition-all duration-700 ease-in w-full h-full">
            <img src="./gallery10.jpg" className="w-full h-full" alt="" />
          </div>
          <div className="child mx-auto scale-100 hover:scale-[1.1] transition-all duration-700 ease-in w-full h-full">
            <img src="./gallery3.jpg" className="w-full h-full" alt="" />
          </div>
          <div className="child mx-auto scale-100 hover:scale-[1.1] transition-all duration-700 ease-in w-full h-full">
            <img src="./gallery8.jpg" className="w-full h-full" alt="" />
          </div>
          <div className="child mx-auto scale-100 hover:scale-[1.1] transition-all duration-700 ease-in w-full h-full">
            <img src="./gallery5.jpg" className="w-full h-full" alt="" />
          </div>
          <div className="child mx-auto scale-100 hover:scale-[1.1] transition-all duration-700 ease-in w-full h-full">
            <img src="./gallery11.jpg" className="w-full h-full" alt="" />
          </div>
          <div className="child mx-auto scale-100 hover:scale-[1.1] transition-all duration-700 ease-in w-full h-full">
            <img src="./gallery7.jpg" className="w-full h-full" alt="" />
          </div>
          <div className="child mx-auto scale-100 hover:scale-[1.1] transition-all duration-700 ease-in w-full h-full">
            <img src="./gallery4.jpg" className="w-full h-full" alt="" />
          </div>
          <div className="child mx-auto scale-100 hover:scale-[1.1] transition-all duration-700 ease-in w-full h-full">
            <img src="./gallery9.jpg" className="w-full h-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
