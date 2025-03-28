// ProfessionalEmails.jsx

import React from "react";
import {
  FaEnvelope,
  FaLock,
  FaCalendarAlt,
  FaFilter,
  FaMobileAlt,
  FaSignature,
  FaSearch,
  FaShieldAlt,
  FaTasks,
} from "react-icons/fa";

const ProfessionalEmails = () => {
  return (
    <section
      className="bg-transparent text-black py-12 px-6 md:px-12 lg:px-24"
      style={{ marginTop: "-50px" }}
    >
      <section className="relative flex flex-col lg:flex-row justify-between items-center mb-12">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{
              backgroundImage: "url('../../../../processBg.jpg')",
              marginLeft: "-10vw",
              marginRight: "-10vw",
              marginTop: "-16.2vh", // Adjust these values to increase/decrease the top and bottom margins
              marginBottom: "-10vh",
              width: "calc(100% + 18.7vw)",
              height: "calc(100% + 23vh)", // Adjust height to compensate for the added top and bottom margins
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
      <div className="container mx-auto">
        <header className="text-center mb-8">
          <p className="text-lg md:text-xl text-black text-justify">
            Elevate your communication with our tailored email solutions
            designed for professionals. Our offerings include efficient
            management tools that streamline communication, state-of-the-art
            encryption for secure messaging, and customizable features to fit
            unique needs. Experience seamless integration, advanced filtering,
            and powerful search capabilities, ensuring that your email
            management is both effective and secure. With our professional email
            solutions, staying organized and safeguarding your information has
            never been easier or more reliable.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://community.thriveglobal.com/wp-content/uploads/2019/12/Efficiency-Productivity.png"
              alt="Email Management"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[#1136FF] mb-4">
                Efficient Management
              </h2>
              <p className="text-base leading-relaxed text-justify">
                Our professional email solutions provide advanced filtering,
                easy integration, and powerful search capabilities to help keep
                your communication organized and efficient.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://www.mouser.com/blog/Portals/11/Felligne_Protect%20Device%20Communication_Theme%20Image_1.jpg"
              alt="Secure Communication"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[#1136FF] mb-4">
                Secure Communication
              </h2>
              <p className="text-base leading-relaxed text-justify">
                Our email solutions offer state-of-the-art encryption and
                security protocols to protect sensitive information, ensuring
                your communications remain private and secure.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://livesensorsecurity.com.sg/wp-content/uploads/2017/12/What-are-the-benefits-of-a-customized-software-solution.jpg"
              alt="Custom Solutions"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[#1136FF] mb-4">
                Custom Solutions
              </h2>
              <p className="text-base leading-relaxed text-justify">
                We offer customizable email solutions tailored to your specific
                needs, including custom domains, additional storage, and
                specialized features to fit your requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-[#1136FF] text-center mb-8">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
              <FaEnvelope className="text-[#1136FF] text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-[#1136FF] mb-4">
                Efficient Management
              </h3>
              <p className="text-base leading-relaxed text-justify">
                Our email solutions feature advanced filtering, seamless
                integration with other tools, and powerful search capabilities
                to ensure that your communication is always organized and
                efficient. Manage your emails with ease and improve your
                workflow.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
              <FaLock className="text-[#1136FF] text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-[#1136FF] mb-4">
                Secure Communication
              </h3>
              <p className="text-base leading-relaxed text-justify">
                Our solutions include state-of-the-art encryption and robust
                security protocols to keep your sensitive information safe.
                Enjoy peace of mind knowing that your communications are
                protected from unauthorized access.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
              <FaCalendarAlt className="text-[#1136FF] text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-[#1136FF] mb-4">
                Integration with Tools
              </h3>
              <p className="text-base leading-relaxed text-justify">
                Our email solutions offer seamless integration with productivity
                tools such as calendars and CRM systems. This integration
                enhances your workflow and ensures that you stay on top of your
                tasks and appointments.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
              <FaFilter className="text-[#1136FF] text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-[#1136FF] mb-4">
                Advanced Filtering
              </h3>
              <p className="text-base leading-relaxed text-justify">
                Our advanced filtering features allow you to automatically sort
                incoming emails, keeping your inbox organized. Customize filters
                to manage and prioritize messages according to your needs.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
              <FaMobileAlt className="text-[#1136FF] text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-[#1136FF] mb-4">
                Mobile Compatibility
              </h3>
              <p className="text-base leading-relaxed text-justify">
                Access your emails from any device with our responsive mobile
                app. The app adapts to various screen sizes, ensuring that you
                can manage your communications on the go with ease.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
              <FaSignature className="text-[#1136FF] text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-[#1136FF] mb-4">
                Customizable Signatures
              </h3>
              <p className="text-base leading-relaxed text-justify">
                Manage and create multiple email signatures tailored for
                different purposes. Enhance your professional image and
                streamline your communication with customized signature options.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
              <FaSearch className="text-[#1136FF] text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-[#1136FF] mb-4">
                Powerful Search
              </h3>
              <p className="text-base leading-relaxed text-justify">
                Quickly locate specific emails, attachments, or contacts with
                our powerful search features. Enhance your productivity by
                finding information quickly and efficiently.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
              <FaShieldAlt className="text-[#1136FF] text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-[#1136FF] mb-4">
                Spam Protection
              </h3>
              <p className="text-base leading-relaxed text-justify">
                Our advanced spam filters effectively block unwanted emails and
                protect against phishing attempts. Keep your inbox clean and
                secure from malicious threats.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
              <FaTasks className="text-[#1136FF] text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-[#1136FF] mb-4">
                Automated Responses
              </h3>
              <p className="text-base leading-relaxed text-justify">
                Set up automated responses for common inquiries or when you’re
                out of the office. Ensure timely and consistent communication
                even when you’re unavailable.
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>
    </section>
  );
};

export default ProfessionalEmails;
