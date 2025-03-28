import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { NavLink } from "react-router-dom";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const ServicesCard = () => {
  const serviceData = [
    {
      icon: "service1.png",
      title: "Website Development",
      para: "Our website development services help you create a powerful online presence.",
    },
    {
      icon: "service2.png",
      title: "Software Development",
      para: "From ideation to deployment, we work closely with you to create innovative software.",
    },
    {
      icon: "service3.png",
      title: "E-commerce Website",
      para: "Our e-commerce website help you create an engaging online shopping experience.",
    },
    {
      icon: "service4.png",
      title: "Payment Gateway",
      para: "Payment gateway integration services ensure secure and seamless transactions.",
    },
    {
      icon: "service1.png",
      title: "SEO",
      para: "Our SEO services help you achieve higher search engine rankings drive more traffic.",
    },
    {
      icon: "service2.png",
      title: "Graphic Design",
      para: "Our graphic design services are tailored to your unique needs, with customised visuals.",
    },
    {
      icon: "service3.png",
      title: "SMM",
      para: "Our social media marketing services help you connect with your audience and interact.",
    },
    {
      icon: "service4.png",
      title: "Trademark Service",
      para: "Our trademark service helps you protect the intellectual property by registering trademark.",
    },
  ];

  return (
    <>
      <Swiper
        loop={true}
        centeredSlides={false}
        autoplay={{
          delay: 3500,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper py-2 xl:py-8 lg:my-8"
      >
        {/* Loop through the serviceData array and display the data */}
        {serviceData.map((data, index) => {
          return (
            <SwiperSlide key={index} className="bg-[#fdfdfd] lg:w-1/4 rounded-xl shadow-xl my-8 xl:my-12">
              <div className="serviceCard  lg:flex lg:flex-col px-6 py-4 mb-4 gap-10">
                <div className="tech_icon w-[70px]">
                  <img
                    src={data.icon}
                    className="w-full hover:rotate-180"
                    alt=""
                  />
                </div>
                <div className="about_tech flex flex-col gap-4">
                  <p className="text-[#000000] text-[22px] font-semibold">
                    {data.title}
                  </p>
                  <p className="text-[#b0b0b0] text-[16px] font-light">
                    {data.para}
                  </p>
                  <div className="btn w-full flex justify-center">
                    <NavLink to="/services" className="flex gap-2 items-center">
                      Read More
                      <svg
                        width="31"
                        height="9"
                        viewBox="0 0 31 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.3536 4.85355C30.5488 4.65829 30.5488 4.34171 30.3536 4.14645L27.1716 0.964466C26.9763 0.769204 26.6597 0.769204 26.4645 0.964466C26.2692 1.15973 26.2692 1.47631 26.4645 1.67157L29.2929 4.5L26.4645 7.32843C26.2692 7.52369 26.2692 7.84027 26.4645 8.03553C26.6597 8.2308 26.9763 8.2308 27.1716 8.03553L30.3536 4.85355ZM0 5H30V4H0V5Z"
                          fill="#120A21"
                        ></path>
                      </svg>
                    </NavLink>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ServicesCard;
