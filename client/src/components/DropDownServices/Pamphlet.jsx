import React from "react";
import {
  FaLeaf,
  FaLightbulb,
  FaRocket,
  FaStar,
  FaSun,
  FaMoon,
} from "react-icons/fa";

// Pamphlet Component
const Pamphlet = () => {
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
              height: "calc(100% + 18vh)", // Adjust height to compensate for the added top and bottom margins
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
    <div
      className="p-6 bg-transparent text-black max-w-7xl mx-auto"
      style={{ marginTop: "-30px" }}
    >
      {/* Content Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Service Card */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-7">
          <img
            src="https://th.bing.com/th/id/R.88630085f16e3ce3c8d3b0308c6eaa7a?rik=x2%2fLwnhfmOeJ1Q&riu=http%3a%2f%2fimages.huffingtonpost.com%2f2016-02-15-1455578071-4916876-innovations.jpg&ehk=mTkVJajwQ5Jp%2bI5HtPNP%2bdfOB59%2fVYrOKS8aKAOFsJM%3d&risl=&pid=ImgRaw&r=0"
            alt="Service 1"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-[#1136FF] mb-2 text-center">
            Innovative Solutions
          </h2>
          <p className="text-black mb-4 text-center">
            We offer cutting-edge solutions to meet your needs and drive your
            success. Our team is dedicated to providing top-notch services that
            exceed your expectations.
          </p>
          <div className="flex justify-center space-x-4">
            <FaLeaf className="text-2xl text-green-500" />
            <FaLightbulb className="text-2xl text-yellow-500" />
            <FaRocket className="text-2xl text-blue-500" />
          </div>
        </div>

        {/* Service Card */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-7">
          <img
            src="https://s-i.huffpost.com/gen/3540990/images/o-CREATIVITY-facebook.jpg"
            alt="Service 2"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-[#1136FF] mb-2 text-center">
            Creative Ideas
          </h2>
          <p className="text-black mb-4 text-center">
            Our creative team brings fresh and innovative ideas to the table,
            ensuring that your project stands out from the competition and
            achieves its full potential.
          </p>
          <div className="flex justify-center space-x-4">
            <FaStar className="text-2xl text-yellow-500" />
            <FaSun className="text-2xl text-yellow-500" />
            <FaMoon className="text-2xl text-gray-500" />
          </div>
        </div>

        {/* Service Card */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-7">
          <img
            src="https://images.cutimes.com/contrib/content/uploads/sites/413/2018/06/nextgen-tech-e1528382335531.jpg"
            alt="Service 3"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-[#1136FF] mb-2 text-center">
            Next-Gen Tech
          </h2>
          <p className="text-black mb-4 text-center">
            Embrace the future with our next-generation technology solutions
            designed to keep you ahead of the curve.
          </p>
          <div className="flex justify-center space-x-4">
            <FaRocket className="text-2xl text-blue-500" />
            <FaStar className="text-2xl text-yellow-500" />
            <FaLightbulb className="text-2xl text-yellow-500" />
          </div>
        </div>

        {/* Service Card */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-7">
          <img
            src="https://imgv3.fotor.com/images/side/design-a-school-pamphlet-with-fotors-pamphlet-maker.jpg"
            alt="Service 4"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-[#1136FF] mb-2 text-center">
            Efficient Design
          </h2>
          <p className="text-black mb-4 text-center">
            Our design solutions are tailored for efficiency and effectiveness,
            ensuring your project runs smoothly from start to finish.
          </p>
          <div className="flex justify-center space-x-4">
            <FaLeaf className="text-2xl text-green-500" />
            <FaLightbulb className="text-2xl text-yellow-500" />
            <FaStar className="text-2xl text-yellow-500" />
          </div>
        </div>

        {/* Service Card */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-7">
          <img
            src="https://www.cgi.com/sites/default/files/mediuim-user-experience-01-rv-v1.jpg"
            alt="Service 5"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-[#1136FF] mb-2 text-center">
            User Experience
          </h2>
          <p className="text-black mb-4 text-center">
            Focus on creating exceptional user experiences with our expert
            guidance and innovative approaches.
          </p>
          <div className="flex justify-center space-x-4">
            <FaSun className="text-2xl text-yellow-500" />
            <FaMoon className="text-2xl text-gray-500" />
            <FaLightbulb className="text-2xl text-yellow-500" />
          </div>
        </div>

        {/* Service Card */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-7">
          <img
            src="https://res.cloudinary.com/hevo/image/upload/f_auto,q_auto/v1618387651/hevo-learn/advanced_analytics.jpeg"
            alt="Service 6"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-[#1136FF] mb-2 text-center">
            Advanced Analytics
          </h2>
          <p className="text-black mb-4 text-center">
            Utilize our advanced analytics services to gain insights and make
            data-driven decisions with confidence.
          </p>
          <div className="flex justify-center space-x-4">
            <FaRocket className="text-2xl text-blue-500" />
            <FaStar className="text-2xl text-yellow-500" />
            <FaLeaf className="text-2xl text-green-500" />
          </div>
        </div>
      </div>

      {/* Summary Paragraph */}
      <div className="mt-8">
        <p className="text-black text-justify">
          Our service offerings include a diverse range of solutions designed to
          meet various needs. From innovative solutions that push the boundaries
          of technology to creative ideas that set your project apart, our team
          is dedicated to delivering excellence. We leverage next-gen tech and
          efficient design principles to ensure smooth project execution. Our
          focus on user experience guarantees that every interaction is
          exceptional, while our advanced analytics provide valuable insights
          for data-driven decisions. Each service is crafted to help you achieve
          success and exceed expectations in every aspect.
        </p>
      </div>
    </div>
    </section>
  );
};

export default Pamphlet;
