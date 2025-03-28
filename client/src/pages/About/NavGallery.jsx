import React from "react";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((item, index) => (
        <div key={index} className="w-full">
          <iframe
            src={item.src}
            title={item.alt}
            className="w-full h-64 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            allowFullScreen
          ></iframe>
        </div>
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
      src: "/FebTechGallery/febG12.jpg",
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
      src: "https://www.youtube.com/embed/tgbNymZ7vqY",
      alt: "Dummy Video 1",
    },
    {
      src: "https://www.youtube.com/embed/tgbNymZ7vqY",
      alt: "Dummy Video 2",
    },
    {
      src: "https://www.youtube.com/embed/tgbNymZ7vqY",
      alt: "Dummy Video 1",
    },
    {
      src: "https://www.youtube.com/embed/tgbNymZ7vqY",
      alt: "Dummy Video 2",
    },
    {
      src: "https://www.youtube.com/embed/tgbNymZ7vqY",
      alt: "Dummy Video 1",
    },
    {
      src: "https://www.youtube.com/embed/tgbNymZ7vqY",
      alt: "Dummy Video 2",
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
