import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Testimonial = () => {
  const data = [
    {
      name: "Ayush",
      review:
        "I recently had the pleasure of working with FebTech for my website design and development needs, and I couldn't be happier with the results. From start to finish, the team was professional, communicative, and dedicated to bringing my vision to life. They listened to my needs and preferences, and incorporated them seamlessly into the final product.",
      position: "Outreach impress",
      profile: "./testimonial-img1.jpg",
    },
    {
      name: "Ayush",
      review:
        "I recently had the pleasure of working with FebTech for my website design and development needs, and I couldn't be happier with the results. From start to finish, the team was professional, communicative, and dedicated to bringing my vision to life. They listened to my needs and preferences, and incorporated them seamlessly into the final product.",
      position: "Outreach impress",
      profile: "./testimonial-img1.jpg",
    },
    {
      name: "Ayush",
      review:
        "I recently had the pleasure of working with FebTech for my website design and development needs, and I couldn't be happier with the results. From start to finish, the team was professional, communicative, and dedicated to bringing my vision to life. They listened to my needs and preferences, and incorporated them seamlessly into the final product.",
      position: "Outreach impress",
      profile: "./testimonial-img1.jpg",
    },
    {
      name: "Ayush",
      review:
        "I recently had the pleasure of working with FebTech for my website design and development needs, and I couldn't be happier with the results. From start to finish, the team was professional, communicative, and dedicated to bringing my vision to life. They listened to my needs and preferences, and incorporated them seamlessly into the final product.",
      position: "Outreach impress",
      profile: "./testimonial-img1.jpg",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper h-96 w-[98%] flex justify-center items-center"
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide>
              <div className="">
                <div className="bg-white relative p-4 rounded-2xl">
                  <p className="md:text-base Atestbox text-xs text-justify">
                    {item.review}
                  </p>
                </div>

                <div className="flex relative top-4 left-2 px-6 lg:px-8 items-center gap-4 mt-5">
                  <div>
                    <img
                      className="rounded-full"
                      src={item.profile}
                      alt="testimonial-img"
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{item.name}</p>
                    <p className="font-medium text-white">{item.position}</p>
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

export default Testimonial;
