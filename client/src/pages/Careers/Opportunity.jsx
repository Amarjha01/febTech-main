import React from "react";

const Opportunity = () => {
  return (
    <div className="bg-[#ffffff] lg:flex ">
      {/* section-2 left part */}
      <div className="lg:w-1/2  w-[98%]  lg:h-screen flex lg:flex-row flex-col justify-center items-center my-5">
        <div className="lg:w-full w-[90%] px-4">
          <img
            src="careerImg.jpg"
            alt="about image-2"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* section-2 right part */}

      <div className="lg:w-1/2 w-full flex  flex-col justify-center items-center px-10 gap-2">
        <div className="flex flex-col gap-5 ">
          <div>
            <span className="text-xl capitalize text-white font-bold bg-[#1136FF] text-center px-2 py-2 a-shadow-sm rounded ">
              Find Your Opportunity
            </span>
          </div>
          <div>
            <p className="text-2xl font-semibold">
              We are always on the lookout for talented individuals who
              share our passion for innovation, creativity, and technology.
            </p>
          </div>
          <div className="md:flex gap-2 w-full"></div>
          <p className="text-justify text-lg">
            At FEB TECH, we believe that our team is our greatest asset, and
            create a collaborative and supportive work environment where
            everyone can thrive and grow.
          </p>
          <p className="text-justify text-lg">
            We offer a range of exciting opportunities across various domains,
            including software development, digital marketing, graphic design,
            and more. Whether you’re a fresh graduate or an experienced
            professional, we have a place for you in our team.
          </p>
          <p className="text-justify text-lg">
            If you’re passionate about technology, driven to excel, and looking
            for a fulfilling and rewarding career, then we would love to
            hear from you. Check out our current job openings and submit your
            application today.Join us in shaping the future of technology!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Opportunity;
