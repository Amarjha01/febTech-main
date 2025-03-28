import React from "react";
import { FaMobileAlt, FaCrosshairs, FaShieldAlt } from "react-icons/fa";

const MobileApplication = () => {
  return (
    <section
      className="bg-transparent py-8 px-4 md:py-10 md:px-20"
      style={{ marginTop: "-70px" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Introduction Section */}
        <section className="relative flex flex-col lg:flex-row justify-between items-center mb-12">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{
              backgroundImage: "url('../../../../processBg.jpg')",
              marginLeft: "-10vw",
              marginRight: "-10vw",
              marginTop: "-12.5vh", // Adjust these values to increase/decrease the top and bottom margins
              marginBottom: "-10vh",
              width: "calc(100% + 17.8vw)",
              height: "calc(100% + 15vh)", // Adjust height to compensate for the added top and bottom margins
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        <div className="mb-6 md:mb-8">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1136FF] mb-4">
            Revolutionizing Mobile Experiences
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-4 md:mb-6 text-justify">
            We specialize in creating mobile applications that transform user
            experiences. Our team is dedicated to developing apps with intuitive
            interfaces, state-of-the-art technology, and exceptional
            performance. We tailor our solutions to meet your business needs
            while ensuring a seamless and engaging user experience, driving
            success in the competitive mobile market.
          </p>
          {/* Introduction Image */}
          <img
            src="https://i.pinimg.com/originals/3d/7f/cb/3d7fcbdce6f622476d0942b97b04ff39.jpg"
            alt="Mobile Development"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        </section>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Feature 1 */}
          <div className="bg-transparent p-4 md:p-6 text-center">
            <FaMobileAlt className="text-[#1136FF] text-3xl sm:text-4xl mb-3 sm:mb-4 mx-auto" />
            <h4 className="text-base sm:text-lg md:text-xl font-semibold text-[#1136FF] mb-2 sm:mb-3">
              User-Centric Design
            </h4>
            <p className="text-sm sm:text-base text-black leading-relaxed">
              Our designs are centered around the user, ensuring a smooth and
              intuitive experience on all devices. We prioritize usability and
              accessibility to create apps that users love to interact with.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-transparent p-4 md:p-6 text-center">
            <FaCrosshairs className="text-[#1136FF] text-3xl sm:text-4xl mb-3 sm:mb-4 mx-auto" />
            <h4 className="text-base sm:text-lg md:text-xl font-semibold text-[#1136FF] mb-2 sm:mb-3">
              Cross-Platform Compatibility
            </h4>
            <p className="text-sm sm:text-base text-black leading-relaxed">
              We develop apps that work seamlessly across iOS and Android,
              ensuring a consistent experience for all users. Our cross-platform
              solutions reduce development time and costs while reaching a
              broader audience.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-transparent p-4 md:p-6 text-center">
            <FaShieldAlt className="text-[#1136FF] text-3xl sm:text-4xl mb-3 sm:mb-4 mx-auto" />
            <h4 className="text-base sm:text-lg md:text-xl font-semibold text-[#1136FF] mb-2 sm:mb-3">
              Scalable & Secure
            </h4>
            <p className="text-sm sm:text-base text-black leading-relaxed">
              We build apps that grow with your business. Our solutions are
              scalable, allowing for future updates and expansions. Security is
              a top priority, and we implement the latest standards to protect
              your data.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <section className="relative flex flex-col lg:flex-row justify-between items-center mb-12">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{
              backgroundImage: "url('../../../../processBg.jpg')",
              marginLeft: "-10vw",
              marginRight: "-10vw",
              marginTop: "0vh", // Adjust these values to increase/decrease the top and bottom margins
              marginBottom: "-10vh",
              width: "calc(100% + 17.8vw)",
              height: "calc(95% + 11vh)", // Adjust height to compensate for the added top and bottom margins
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        <div className="text-center mt-10 md:mt-12">
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1136FF] mb-4">
            Ready to Transform Your Mobile Strategy?
          </h4>
          <p className="text-base sm:text-lg md:text-xl text-black text-justify mb-6">
            Contact us to begin your mobile application development journey.
            Whether it's a native app or a cross-platform solution, our team is
            ready to create something exceptional for your business. Let's push
            the boundaries of what's possible and deliver a product that truly
            stands out in the marketplace.
          </p>
          {/* Call to Action Image */}
          <img
            src="https://geekrider.in/wp-content/uploads/2019/07/mobile-marketing.jpg"
            alt="Contact Us"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        </section>
      </div>
    </section>
  );
};

export default MobileApplication;
