import React from "react";
import { motion } from "framer-motion";

const WebDevelopment = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="flex flex-col items-center justify-center p-6 md:p-12 bg-transparent">
      <section className="relative flex flex-col lg:flex-row justify-between items-center mb-12">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{
              backgroundImage: "url('../../../../processBg.jpg')",
              marginLeft: "-10vw",
              marginRight: "-10vw",
              marginTop: "-23vh", // Adjust these values to increase/decrease the top and bottom margins
              marginBottom: "-10vh",
              width: "calc(100% + 17.8vw)",
              height: "calc(100% + 30vh)", // Adjust height to compensate for the added top and bottom margins
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-xl"
        style={{ marginTop: "-45px" }}
      >
        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <img
            src="https://wittysparks.com/wp-content/uploads/2022/03/custom-web-application-development.jpg"
            alt="Custom Web Solutions"
            className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Custom Web Solutions
            </h2>
            <p className="text-black mb-4">
              Tailored web solutions to meet your specific business needs with
              dynamic and complex web applications.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <img
            src="https://www.searchenginejournal.com/wp-content/uploads/2021/10/responsive-web-design-1-61f01c4b64c5f-sej.png"
            alt="Responsive Design"
            className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Responsive Design
            </h2>
            <p className="text-black mb-4">
              Ensure your website looks great on all devices with seamless
              adaptation to smartphones, tablets, and desktops.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <img
            src="https://blog.imageworksllc.com/hs-fs/hubfs/Depositphotos_185379552_xl-2015.jpg?width=4500&name=Depositphotos_185379552_xl-2015.jpg"
            alt="SEO Optimization"
            className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              SEO Optimization
            </h2>
            <p className="text-black mb-4">
              Improve your website’s search engine ranking with the latest SEO
              techniques to drive more traffic to your site.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <img
            src="https://d1hdtc0tbqeghx.cloudfront.net/wp-content/uploads/2018/10/10095425/ecommerce-solutions-intro-img.jpg"
            alt="E-Commerce Solutions"
            className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              E-Commerce Solutions
            </h2>
            <p className="text-black mb-4">
              Build a robust online store with secure payment gateways and
              user-friendly interfaces to enhance customer experience.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <img
            src="https://www.gwsmedia.com/sites/default/files/blog/images/featured/10-Most-Popular-Content-Management-Systems-Compared.jpg"
            alt="Content Management Systems"
            className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Content Management Systems
            </h2>
            <p className="text-black mb-4">
              Manage your content effortlessly with our CMS solutions, designed
              for ease of use and flexibility in updating your website.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/523/265/non_2x/mobile-application-development-and-ui-ux-design-layout-on-screen-programmer-coding-software-building-by-computer-laptop-and-smartphone-concept-vector.jpg"
            alt="Web Application Development"
            className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Web Application Development
            </h2>
            <p className="text-black mb-4">
              Develop advanced web applications with interactive features and
              efficient back-end functionalities to meet complex requirements.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <img
            src="https://s3-alpha.figma.com/hub/file/2942566861/7e3aaade-4be8-47a8-aa6c-fe6f0c220316-cover.png"
            alt="UI/UX Design"
            className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              UI/UX Design
            </h2>
            <p className="text-black mb-4">
              Enhance user experience with intuitive UI/UX design, focusing on
              usability, aesthetics, and effective interaction.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <img
            src="https://web-seo1.com/wp-content/uploads/2020/07/MonthlyWebsiteMaintenance.jpg"
            alt="Website Maintenance"
            className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Website Maintenance
            </h2>
            <p className="text-black mb-4">
              Keep your website running smoothly with regular updates, security
              patches, and performance enhancements.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <img
            src="https://elecosoft.com/wp-content/uploads/2022/10/AdobeStock_328528736-scaled.jpeg"
            alt="API Integration"
            className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              API Integration
            </h2>
            <p className="text-black mb-4">
              Integrate third-party services and data sources into your website
              through secure and efficient API connections.
            </p>
          </div>
        </motion.div>
      </div>
      </section>
    </section>
  );
};

export default WebDevelopment;
