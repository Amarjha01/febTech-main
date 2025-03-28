import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InternTestimonial = ({ videoSrc, name, title }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden my-4 ${
        isExpanded ? "h-auto" : "h-96"
      }`}
    >
      <iframe
        className="h-64 w-full object-cover"
        src={videoSrc}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={name}
      ></iframe>
      <div className="p-4">
        <div className="uppercase tracking-wide text-sm text-[#1136FF] font-semibold text-left">
          {name}
        </div>
        <p className="mt-2 text-lg leading-tight font-medium text-black text-left">
          {isExpanded ? title : `${title.substring(0, 100)}...`}
          {title.length > 100 && (
            <span
              className="text-blue-500 cursor-pointer"
              onClick={toggleExpand}
            >
              {isExpanded ? " Show less" : " More..."}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      videoSrc: "https://www.youtube.com/embed/x0JeXMNBrwo?si=eoAAU_hiDbgt-eXU",
      name: "Shubham Rawat",
      title:
        "This internship has been a game-changer! I’ve learned so much about app development and had the chance to work on real projects. The support from the team is incredible!",
    },
    {
      videoSrc: "https://www.youtube.com/embed/-upg7RnKaGA?si=RN2bTkoIV886CEtN",
      name: "Deepak Negi",
      title:
        "The hands-on experience I gained here has boosted my confidence and skills. I love how collaborative the environment is!",
    },
    {
      videoSrc: "https://www.youtube.com/embed/3fpEoibvXS8?si=3Bacg_0xvSuKyEHW",
      name: "Akhilesh Singh",
      title:
        "I appreciated the mentorship I received. It was great to have guidance while also being encouraged to explore my own ideas!",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-8 mb-[10vh] mt-[10vh]">
      <h2 className="lg:w-1/5 mb-10 mx-auto text-center rounded-md a-shadow-sm font-semibold py-2 px-3 text-white bg-[#1136ff] text-xl w-[280px]">
        Interns Testimonials
      </h2>
      <div className="w-[90%] mx-auto mt-[15vh]">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <InternTestimonial key={index} {...testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
