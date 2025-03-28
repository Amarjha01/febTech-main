import React from "react";
import { NavLink } from "react-router-dom";

const Partner = () => {
  const partnerData = [
    {
      src: "partners1.png",
      left: "0%",
    },
    {
      src: "partners2.png",
      left: "0%",
    },
    {
      src: "partners3.png",
      left: "-18%",
    },
    {
      src: "partners4.png",
      left: "-17%",
    },
    {
      src: "partners5.png",
      left: "0%",
    },
    {
      src: "partners6.png",
      left: "0%",
    },
    {
      src: "partners7.png",
      left: "-18%",
    },
    {
      src: "partners8.png",
      left: "-17%",
    },
  ];
  return (
    <div
      className="w-full flex flex-col lg:flex-row gap-5 py-10 justify-around px-4 my-16 mb-[5vh] mt-[5vh]"
      style={{
        background: `url(partnersBg.jpg) no-repeat center center/cover`,
      }}
    >
      <div className="pleft w-full lg:w-2/5 flex flex-col items-center lg:items-start gap-8 mb-[10vh] mt-[10vh]">
        <a className="w-[200px] text-center rounded-md a-shadow-sm font-semibold py-2  text-white bg-[#1136ff] text-xl">
          Global Partners
        </a>
        <p className="lg:w-4/5 max-lg:text-center font-semibold py-2 text-[#000] max-sm:text-2xl sm:text-xl leading-loose  2xl:text-4xl ">
          We’ve <span className="text-[#1136ff]">200+</span> Global Clients Meet
          With Our Clients
        </p>
        <p className="lg:w-3/4 max-lg:text-center text-small text-[#414141]">
          Drive more leads, sales, and revenue for your business with digital
          marketing services from WebFX full-service digital marketing agency
          that’s helped small-to-midsized businesses generate
        </p>
        <div className="w-full max-lg:flex justify-center">
          <NavLink
            to="/contactUs"
            className="bg-transparent border-2 border-blue-300 text-[#000] text-lg myBtn px-8 py-3"
          >
            Become a Partners &gt;&gt;
          </NavLink>
        </div>
        <div className="w-full sm:w-[80%] 2xl:w-[65%] stats  bg-white py-4 px-6 rounded-xl shadow-xl flex sm:justify-between gap-5">
          <div className="stat flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 2.78576C30 1.83244 29.5233 1.2366 29.1658 0.87912C28.6891 0.283222 27.8549 0.0449219 27.0208 0.0449219H9.02676C8.43092 0.0449219 6.64346 0.283281 6.64346 3.02412V6.71821C6.64346 6.83739 6.64346 6.95657 6.64346 7.07575C6.64346 7.43329 6.52428 8.02907 7.001 8.50573C7.47766 8.98239 8.19268 8.98239 8.5501 8.98239H13.6742L0.804374 22.2097C-0.268124 23.2822 -0.268124 25.308 0.804374 26.3805L3.42603 29.1213C4.02187 29.7172 4.73683 29.9555 5.57102 29.9555C6.40522 29.9555 7.12018 29.598 7.71602 29.1213L20.9434 16.2515V20.8989C20.9434 23.0439 22.4925 23.4014 23.3267 23.4014H27.14C29.7616 23.4014 29.9999 21.7331 29.9999 21.0181L30 2.78576ZM27.6168 21.018C27.4975 21.018 27.3783 21.018 27.14 21.018H23.3268V20.8989V13.3914C23.3268 12.9148 23.0884 12.4381 22.6118 12.319C22.1351 12.0806 21.6584 12.1998 21.3009 12.5574L6.04768 27.4531C5.9285 27.5723 5.21354 27.5723 5.09437 27.4531L2.47271 24.7123C2.23435 24.474 2.23435 23.9973 2.47271 23.8781L17.2493 8.74414C17.6067 8.38661 17.7259 7.90995 17.4876 7.43329C17.3684 6.95663 16.8918 6.71827 16.4152 6.71827H9.02682V3.02406C9.02682 2.7857 9.02682 2.5474 9.02682 2.42822H27.0209C27.14 2.42822 27.3783 2.42822 27.4975 2.66658C27.6167 2.7857 27.6167 2.90494 27.6167 2.90494V21.018H27.6168Z"
                  fill="#1136ff"
                ></path>
              </svg>
              <p className="text-3xl font-semibold">
                58<span className="text-lg text-[#1136ff]">%</span>
              </p>
            </div>
            <p className="text-lg">Statisfied Client</p>
          </div>
          <div className="stat flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 2.78576C30 1.83244 29.5233 1.2366 29.1658 0.87912C28.6891 0.283222 27.8549 0.0449219 27.0208 0.0449219H9.02676C8.43092 0.0449219 6.64346 0.283281 6.64346 3.02412V6.71821C6.64346 6.83739 6.64346 6.95657 6.64346 7.07575C6.64346 7.43329 6.52428 8.02907 7.001 8.50573C7.47766 8.98239 8.19268 8.98239 8.5501 8.98239H13.6742L0.804374 22.2097C-0.268124 23.2822 -0.268124 25.308 0.804374 26.3805L3.42603 29.1213C4.02187 29.7172 4.73683 29.9555 5.57102 29.9555C6.40522 29.9555 7.12018 29.598 7.71602 29.1213L20.9434 16.2515V20.8989C20.9434 23.0439 22.4925 23.4014 23.3267 23.4014H27.14C29.7616 23.4014 29.9999 21.7331 29.9999 21.0181L30 2.78576ZM27.6168 21.018C27.4975 21.018 27.3783 21.018 27.14 21.018H23.3268V20.8989V13.3914C23.3268 12.9148 23.0884 12.4381 22.6118 12.319C22.1351 12.0806 21.6584 12.1998 21.3009 12.5574L6.04768 27.4531C5.9285 27.5723 5.21354 27.5723 5.09437 27.4531L2.47271 24.7123C2.23435 24.474 2.23435 23.9973 2.47271 23.8781L17.2493 8.74414C17.6067 8.38661 17.7259 7.90995 17.4876 7.43329C17.3684 6.95663 16.8918 6.71827 16.4152 6.71827H9.02682V3.02406C9.02682 2.7857 9.02682 2.5474 9.02682 2.42822H27.0209C27.14 2.42822 27.3783 2.42822 27.4975 2.66658C27.6167 2.7857 27.6167 2.90494 27.6167 2.90494V21.018H27.6168Z"
                  fill="#1136ff"
                ></path>
              </svg>
              <p className="text-3xl font-semibold">
                83<span className="text-lg text-[#1136ff]">%</span>
              </p>
            </div>
            <p className="text-lg">Projects Complete</p>
          </div>
        </div>
      </div>
      <div className="pright w-full lg:w-1/2 flex  lg:flex-row justify-around">
        <div className="partners w-full flex flex-col lg:flex-row flex-wrap  justify-center gap-x-2 gap-y-5 lg:justify-around">
          {partnerData.map((partner, index) => {
            return (
              <div
                key={index}
                style={{
                  left: `${partner.left}`,
                  // top: `${index + 20}%`,
                }}
                className="w-full lg:w-[47%] flex flex-row justify-center items-center bg-white py-4  2xl:py-6 rounded-2xl shadow-xl hover:shadow-md hover:shadow-[#1136ff] lg:relative"
              >
                <img src={partner.src} alt="partner1" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Partner;
