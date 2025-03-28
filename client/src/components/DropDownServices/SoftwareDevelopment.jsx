import React from "react";

const SoftwareDevelopment = () => {
  return (
    <section
      className="bg-transparent p-4 sm:p-6 lg:p-12"
      style={{ marginTop: "-50px" }}
    >
      {/* Empowering Innovations Section */}
      <section className="relative flex flex-col lg:flex-row justify-between items-center mb-12">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('../../../../processBg.jpg')",
            marginLeft: "-10vw",
            marginRight: "-10vw",
            marginTop: "-16.3vh", // Adjust these values to increase/decrease the top and bottom margins
            marginBottom: "-10vh",
            width: "calc(100% + 15.5vw)",
            height: "calc(100% + 19vh)", // Adjust height to compensate for the added top and bottom margins
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="lg:w-1/2 p-4">
          <img
            src="https://th.bing.com/th/id/R.ecf85cd2be61e7e56d831d982aa31e3e?rik=ibMVGFokxArykA&riu=http%3a%2f%2fsocial.eyeforpharma.com%2fsites%2fdefault%2ffiles%2finnovate_0.jpg&ehk=BCSsFh%2bdi%2bmvBtzocxb6wtGyNcVijbALDULZR6anC2o%3d&risl=&pid=ImgRaw&r=0"
            alt="Empowering Innovations"
            className="w-full h-auto mb-4 rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 p-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-[#1136FF]">
            Empowering Innovations
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-black mb-6 text-justify">
            <span className="text-[#1136FF]">
              Feb Tech IT Solution Pvt. Ltd.
            </span>{" "}
            specializes in software development that pushes the boundaries. Our
            team uses the latest technologies and industry best practices to
            craft innovative, scalable solutions tailored to your needs. Whether
            you're building a new platform or enhancing an existing one, we're
            here to turn your ideas into reality. We believe in empowering our
            clients by providing them with the tools and technologies they need
            to succeed in a competitive marketplace. Our approach is
            collaborative, ensuring that your vision is realized at every stage
            of development.
          </p>
        </div>
      </section>

      {/* Cutting-Edge Technologies Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center mb-12">
        <div className="lg:w-1/2 order-2 lg:order-1 p-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-[#1136FF]">
            Cutting-Edge Technologies
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-black mb-6 text-justify">
            We integrate the latest technologies to future-proof your software.
            From AI and machine learning to cloud computing and blockchain, our
            solutions are designed to keep you ahead. Our approach ensures your
            software is not only functional but also equipped to adapt to new
            trends and challenges. By staying at the forefront of technological
            advancements, we offer solutions that are not only innovative but
            also sustainable in the long term. Our commitment to excellence
            drives us to continuously explore and implement cutting-edge
            technologies in every project we undertake.
          </p>
        </div>
        <div className="lg:w-1/2 order-1 lg:order-2 p-4">
          <img
            src="https://images.hindustantimes.com/tech/rf/image_size_960x540/HT/p2/2019/12/26/Pictures/_d398fc42-27b9-11ea-a3f7-989b44b77166.jpg"
            alt="Cutting-Edge Technologies"
            className="w-full h-auto mb-4 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Explore the Possibilities Section */}
      <section className="relative flex flex-col lg:flex-row justify-between items-center mb-12">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('../../../../processBg.jpg')",
            marginLeft: "-10vw",
            marginRight: "-10vw",
            marginTop: "-5vh", // Adjust these values to increase/decrease the top and bottom margins
            marginBottom: "-10vh",
            width: "calc(100% + 15.5vw)",
            height: "calc(100% + 7vh)", // Adjust height to compensate for the added top and bottom margins
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="lg:w-1/2 p-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-[#1136FF]">
            Explore the Possibilities
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-black mb-6 text-justify">
            Discover the limitless possibilities with{" "}
            <span className="text-[#1136FF]">
              Feb Tech IT Solution Pvt. Ltd.
            </span>{" "}
            Whether you're launching a new project or expanding an existing one,
            our team is here to guide you every step of the way. Let us help you
            explore new horizons and achieve your goals with cutting-edge
            software solutions. Our expertise spans across various industries,
            allowing us to deliver customized solutions that meet the specific
            needs of your business. We are committed to exploring every avenue
            to ensure that your software development journey is both successful
            and rewarding.
          </p>
        </div>
        <div className="lg:w-1/2 p-4">
          <img
            src="https://i0.wp.com/rigsbee.com/wp-content/uploads/2016/09/AdobeStock_possibilities-scaled.jpeg?resize=1030%2C702&ssl=1"
            alt="Explore the Possibilities"
            className="w-full h-auto mb-4 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Our Key Features Section */}
      <section className="text-center mt-12">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-8 text-[#1136FF]">
          Our Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4">
            <img
              src="https://opengovasia.com/wp-content/uploads/2022/08/SG_1_1270-69.jpg"
              alt="Feature 1"
              className="w-full h-auto mb-4 rounded-lg shadow-lg"
            />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-[#1136FF]">
              Scalability
            </h3>
            <p className="text-base sm:text-lg text-black text-center">
              Our software solutions are designed to scale with your business,
              ensuring that you can grow without limitations.
            </p>
          </div>
          <div className="p-4">
            <img
              src="https://blog.frontrangesystems.com/hubfs/AdobeStock_267991674.jpeg#keepProtocol"
              alt="Feature 2"
              className="w-full h-auto mb-4 rounded-lg shadow-lg"
            />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-[#1136FF]">
              Security
            </h3>
            <p className="text-base sm:text-lg text-black text-center">
              We prioritize security in every step of the development process,
              safeguarding your data and protecting your users.
            </p>
          </div>
          <div className="p-4 mb-5">
            <img
              src="https://www.rnftechnologies.com/blog/wp-content/uploads/2020/04/improve-user-experience-Feature-Image.jpg"
              alt="Feature 3"
              className="w-full h-auto mb-4 rounded-lg shadow-lg"
            />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-[#1136FF]">
              User Experience
            </h3>
            <p className="text-base sm:text-lg text-black text-center">
              Our focus on user experience ensures that your software is
              intuitive, accessible, and enjoyable to use.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Line */}
      <div className="w-full h-4 bg-[#1136FF] mt-8"></div>
    </section>
  );
};

export default SoftwareDevelopment;
