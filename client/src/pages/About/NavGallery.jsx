import React from "react";
import { FaPlay } from "react-icons/fa6";

const ImageGallery = ({ images }) => (
  <div>
    <h3 className="lg:w-1/5 mb-10 mx-auto text-center rounded-md a-shadow-sm font-semibold py-2 px-3 text-white bg-[#1136ff] text-xl w-[280px]">
      Images
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {images.map((item, index) => (
        <div key={index} className="w-full">
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-30 object-cover rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
      ))}
    </div>
  </div>
);

const VideoGallery = ({ videos }) => (
  <div>
    <h3 className="lg:w-1/5 mb-10 mx-auto text-center rounded-md a-shadow-sm font-semibold py-2 px-3 text-white bg-[#1136ff] text-xl w-[280px]">
      Videos
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {videos.map((item, index) => (
        <a target="_blank"
          key={index}
          href={item.links}
          className="w-full aspect-[15/16]  bg-rose-400/40 overflow-hidden rounded-3xl hover:scale-105 transition-all duration-200 ease-in cursor-pointer relative shadow-xl shadow-[#eeeff3] selection:bg-transparent "
        >
          {/* <iframe
            src={item.src}
            title={item.alt}
            className="w-full h-64 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            allowFullScreen
          ></iframe> */}
          {/* instagram rells appear here */}
          <img
            className="w-full h-full bg-cover "
            src={
              item.src }
            alt={item.alt}
          />
          <div className=" absolute w-full h-full border flex items-center justify-center top-0 active:scale-110 active:duration-500 focus:scale-110">
            <FaPlay size={40} color="#ffff" />
          </div>
        </a>
      ))}
    </div>
  </div>
);

const NavGallery = () => {
  const images = [
    {
      src: "/FebTechGallery/marG1.jpg",
      alt: "Dummy Image 1",
    },
    {
      src: "/FebTechGallery/marG2.jpg",
      alt: "Dummy Image 1",
    },
    {
      src: "/FebTechGallery/marG3.jpg",
      alt: "Dummy Image 1",
    },
    {
      src: "/FebTechGallery/marG4.jpg",
      alt: "Dummy Image 1",
    },
    {
      src: "/FebTechGallery/marG5.jpg",
      alt: "Dummy Image 1",
    },
    {
      src: "/FebTechGallery/febG2.jpeg",
      alt: "Dummy Image 1",
    },
    {
      src: "/FebTechGallery/febG3.jpg",
      alt: "Dummy Image 2",
    },
    {
      src: "/FebTechGallery/febG4.jpg",
      alt: "Dummy Image 3",
    },
    {
      src: "/FebTechGallery/febG6.jpg",
      alt: "Dummy Image 1",
    },
    {
      src: "/FebTechGallery/febG7.jpg",
      alt: "Dummy Image 2",
    },
    {
      src: "/FebTechGallery/febG8.jpg",
      alt: "Dummy Image 3",
    },
    {
      src: "/FebTechGallery/febG9.jpg",
      alt: "Dummy Image 1",
    },
    {
      src: "/FebTechGallery/febG10.jpg",
      alt: "Dummy Image 2",
    },
    {
      src: "/FebTechGallery/febG11.jpg",
      alt: "Dummy Image 3",
    },
    {
      src: "/FebTechGallery/febG13.jpg",
      alt: "Dummy Image 3",
    },
    {
      src: "/FebTechGallery/febG14.jpg",
      alt: "Dummy Image 3",
    },
  ];

  const videos = [
    {
      src: "/FebTechGallery/01.png",
      alt: "Dummy Video 1",
      links: "https://www.instagram.com/reel/C--TTyJSio7/"
    },
    {
      src: "/FebTechGallery/02.png",
      alt: "Dummy Video 2",
       links: "https://www.instagram.com/reel/C7dvRE5yJP8"
    },
    {
      src: "/FebTechGallery/03.png",
      alt: "Dummy Video 3",
       links: "https://www.instagram.com/reel/DICGLS2o6px/"
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <ImageGallery images={images} />
      <VideoGallery videos={videos} />
    </div>
  );
};

export default NavGallery;
