import React from "react";

const Strategy = () => {
  const client = [
    {
      id: 1,
      src: "./client1.jpg",
    },
    {
      id: 2,
      src: "./client2.jpg",
    },
    {
      id: 3,
      src: "./client3.jpg",
    },
    {
      id: 4,
      src: "./client4.jpg",
    },
    {
      id: 5,
      src: "./client5.jpg",
    },
  ];

  const strategyData = [
    {
      id: 1,
      title: "Step 01",
      subTitle: "First meeting understanding your needs",
      description:
        "We take the time to understand your business goals and objectives.",
      left: "1%",
      top: "-25px",
      src: "process1.png",
    },
    {
      id: 2,
      title: "Step 02",
      subTitle: "The second meeting is to design effective solution",
      description:
        "Our team of experts uses the latest technologies and best practices.",
      left: "33%",
      top: "20px",
      src: "process2.png",
    },
    {
      id: 3,
      title: "Step 03",
      subTitle: "The final meeting delivering exceptional results",
      description:
        "We are committed to delivering exceptional results within the budget.",
      right: "2%",
      top: "-25px",
      src: "process3.png",
    },
  ];

  return (
    // <div className="w-full  border-2 border-blue-800 ">
    <div className="hstrategy lg:relative  flex flex-col max-sm:items-center lg:flex-row w-[100%]  md:h-screen  lg:my-5 gap-5">
      <div
        className="flex max-md:h-[50%] flex-col gap-2 2xl:gap-10 w-full items-center lg:items-start lg:w-3/5 px-8 py-8 z-20"
        style={{
          background: `url(processBg.jpg) no-repeat center center/cover`,
        }}
      >
        <p className="text-center text-xl rounded-md a-shadow-sm font-semibold bg-[#1136FF] py-2 text-white  w-[220px]">
          Working Process
        </p>
        <p className="max-sm:text-2xl mt-5 sm:text-2xl 2xl:text-[35px] sm:w-4/5 text-gray-950 font-semibold max-sm:text-center leading-loose">
          We are providing the best  guidance 
        </p>
        <div className="arrow mt w-full flex flex-col md:flex-row xl:gap-5 lg:relative max-sm:gap-4
         top-[40px]
        2xl:top-[95px] z-0">
          <img src="./markr.png" alt="mark" className="hidden lg:block" />
          {strategyData.map((data, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col  justify-center items-center gap-1 px-2 w-[100%] lg:absolute  md:w-[33%]`}
                style={{
                  left: `${data.left}`,
                  top: `${data.top}`,
                  right: `${data.right}`,
                }}
              >
                <div className="flex  gap-4 justify-center items-center  inner_img w-[70px] h-[70px] border border-gray-800 rounded-full">
                  <img src={data.src} alt="" className="hrotate_img" />
                </div>
                <div className="w-full wk_process flex flex-col gap-2 items-center bg-white rounded-xl drop-shadow-2xl overflow-hidden py-4 px-1">
                  <p className="text-base font-light text-[#1136ff]">
                    {data.title}
                  </p>
                  <p className="text-lg font-semibold text-center text-[#000]">
                    {data.subTitle}
                  </p>
                  <p className="text-sm font-light text-center text-gray-400 md:hidden xl:block">
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right sm:h-screen max-md:mt-10 flex flex-col sm:items-center lg:items-start gap-4 w-full lg:w-2/5 p-5 md:relative">
        <p className="text-xl font-normal">Satisfied Clients</p>
        <p className="text-lg  lg:text-xl xl:text-2xl font-semibold">
          We Have Thousands Of Global Clients
        </p>
        <div className="clients flex gap-1 lg:relative ">
          {client.map((item, index) => {
            return (
              <div
              key={index}
                className={`clientlogo w-[60px] h-[60px]  lg:w-[80px] lg:h-[80px]  rounded-full lg:relative`}
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Hello */}
              </div>
            );
          })}
        </div>
        <div className="w-[350px] md:w-[800px] lg:w-[38vw] hidden md:block processBg lg:relative z-0  lg:left-[-18%] lg:right-0 2xl:left-[-25%] 2xl:top-[8%] 2xl:w-[698px] rounded-md overflow-hidden">
          <img
            src="company.jpg"
            className="w-full h-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Strategy;
