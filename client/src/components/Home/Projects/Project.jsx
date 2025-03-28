import React from "react";
import { NavLink } from "react-router-dom";

const Project = ({src,title}) => {
  return (
    <div className="w-[95%]  flex relative  flex-col gap-3 items-center">
      <img src={src} className="h-full w-full rounded-2xl shadow-xl" alt="project" />
      <div className="bg-[#1136ff] relative top-[-45px] px-5 py-2 flex flex-col  rounded-xl">
        <p className="text-white text-lg 2xl:text-2xl font-semibold">{title}</p>
        <NavLink to="/project" className="flex justify-center items-center gap-2 text-white text-sm xl:text-lg underline px-1 py-1">
          Read More
          <svg
            width="31"
            height="10"
            viewBox="0 0 31 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.3536 4.85355C30.5488 4.65829 30.5488 4.34171 30.3536 4.14645L27.1716 0.964466C26.9763 0.769204 26.6597 0.769204 26.4645 0.964466C26.2692 1.15973 26.2692 1.47631 26.4645 1.67157L29.2929 4.5L26.4645 7.32843C26.2692 7.52369 26.2692 7.84027 26.4645 8.03553C26.6597 8.2308 26.9763 8.2308 27.1716 8.03553L30.3536 4.85355ZM0 5H30V4H0V5Z"
              fill="#fff"
            ></path>
          </svg>
        </NavLink>
      </div>
    </div>
  );
};

export default Project;
