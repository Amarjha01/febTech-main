// Brochure.jsx
import React from "react";
import {
  FaLeaf,
  FaLightbulb,
  FaRocket,
  FaStar,
  FaSun,
  FaMoon,
  FaCode,
  FaChartLine,
  FaLock,
} from "react-icons/fa";

// Brochure Component
const Brochure = () => {
  return (
    <section className="relative flex flex-col lg:flex-row justify-between items-center mb-12">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{
              backgroundImage: "url('../../../../processBg.jpg')",
              marginLeft: "-10vw",
              marginRight: "-10vw",
              marginTop: "-17vh", // Adjust these values to increase/decrease the top and bottom margins
              marginBottom: "-10vh",
              width: "calc(100% + 12.4vw)",
              height: "calc(100% + 17vh)", // Adjust height to compensate for the added top and bottom margins
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
    <div className="p-6 bg-transparent text-black max-w-7xl mx-auto rounded-lg mb-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <p className="text-lg text-justify">
          Discover our diverse range of services designed to meet all your
          needs. Our innovative solutions and cutting-edge technologies are
          tailored to drive your success and efficiency. From creative ideas to
          advanced tech, we provide comprehensive services that ensure your
          project stands out and achieves its full potential. Explore our
          offerings to see how we can help you embrace new opportunities and
          achieve exceptional results with a focus on quality and effectiveness.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="flex justify-center mb-4">
            <FaLeaf className="text-4xl text-green-500" />
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-center">
            Eco-Friendly Solutions
          </h2>
          <p className="text-base text-center">
            Our eco-friendly solutions are designed to minimize environmental
            impact while maximizing efficiency. We focus on sustainable
            practices and technologies to ensure that our solutions are not only
            effective but also environmentally responsible. Embrace a greener
            future with our innovative approach.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="flex justify-center mb-4">
            <FaLightbulb className="text-4xl text-yellow-500" />
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-center">
            Innovative Ideas
          </h2>
          <p className="text-base text-center">
            Our creative team is dedicated to bringing fresh and innovative
            ideas to every project. We strive to ensure that your project stands
            out from the competition with unique and original concepts. Our goal
            is to make your vision come to life in a way that exceeds your
            expectations.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="flex justify-center mb-4">
            <FaRocket className="text-4xl text-blue-500" />
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-center">
            Next-Gen Technology
          </h2>
          <p className="text-base text-center">
            Embrace the future with our next-generation technology solutions.
            Our cutting-edge technologies are designed to keep you ahead of the
            curve and ensure that your business is always at the forefront of
            innovation. Experience the benefits of advanced tech that drives
            progress and success.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="flex justify-center mb-4">
            <FaStar className="text-4xl text-yellow-500" />
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-center">
            Premium Quality
          </h2>
          <p className="text-base text-center">
            We are committed to delivering premium quality in all our services.
            From start to finish, we ensure that every aspect of our work meets
            the highest standards. Our attention to detail and dedication to
            excellence guarantee that you receive only the best outcomes for
            your projects.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="flex justify-center mb-4">
            <FaSun className="text-4xl text-yellow-500" />
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-center">
            Bright Futures
          </h2>
          <p className="text-base text-center">
            Illuminate your path to success with our bright and effective
            solutions. We provide strategies and tools designed to guide you
            towards a prosperous future. Our expertise helps you navigate
            challenges and seize opportunities, ensuring that you achieve your
            goals with confidence.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="flex justify-center mb-4">
            <FaMoon className="text-4xl text-gray-500" />
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-center">
            Night Mode
          </h2>
          <p className="text-base text-center">
            Our solutions are adaptable and versatile, working seamlessly in
            various conditions. Whether it’s day or night, our services are
            designed to provide consistent performance and reliability. Enjoy
            the flexibility and convenience of solutions that meet your needs
            around the clock.
          </p>
        </div>

        {/* Card 7 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="flex justify-center mb-4">
            <FaCode className="text-4xl text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-center">
            Custom Development
          </h2>
          <p className="text-base text-center">
            We offer custom development solutions tailored to your specific
            needs and objectives. Our team works closely with you to understand
            your requirements and deliver bespoke solutions that align perfectly
            with your goals. Experience the benefits of personalized development
            that drives success.
          </p>
        </div>

        {/* Card 8 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="flex justify-center mb-4">
            <FaChartLine className="text-4xl text-green-600" />
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-center">
            Growth Analytics
          </h2>
          <p className="text-base text-center">
            Gain valuable insights and drive growth with our advanced analytics
            tools. We provide comprehensive analytics solutions that help you
            understand data, make informed decisions, and identify opportunities
            for growth. Leverage our expertise to optimize your strategies and
            achieve your goals.
          </p>
        </div>

        {/* Card 9 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="flex justify-center mb-4">
            <FaLock className="text-4xl text-red-600" />
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-center">
            Top-Notch Security
          </h2>
          <p className="text-base text-center">
            Protect your assets with our robust and reliable security solutions.
            Our services are designed to safeguard your data and ensure that
            your systems are secure from threats. Trust our expertise to provide
            the highest level of security and peace of mind for your business.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Brochure;
