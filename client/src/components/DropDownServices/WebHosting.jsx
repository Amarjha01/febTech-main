import React from "react";

const WebHosting = () => {
  return (
    <section
      className="bg-transparent text-black p-4 sm:p-6 md:p-12"
      style={{ marginTop: "-44px" }}
    >
      <section className="relative flex flex-col lg:flex-row justify-between items-center mb-12">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{
              backgroundImage: "url('../../../../processBg.jpg')",
              marginLeft: "-10vw",
              marginRight: "-10vw",
              marginTop: "-17vh", // Adjust these values to increase/decrease the top and bottom margins
              marginBottom: "-10vh",
              width: "calc(100% + 15.5vw)",
              height: "calc(95% + 30vh)", // Adjust height to compensate for the added top and bottom margins
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
      <div className="max-w-7xl mx-auto">
        <p className="mb-6 text-base sm:text-lg md:text-xl text-justify leading-tight">
          Experience unmatched performance with our state-of-the-art web hosting
          services. Whether you are running a small blog or a high-traffic
          website, our hosting solutions are designed to scale with your needs.
          Our futuristic infrastructure, powered by the latest technologies,
          ensures maximum uptime and speed. We are committed to providing you
          with a reliable and secure hosting environment to support your online
          success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12">
          <div className="flex flex-col items-center">
            <img
              src="https://st2.depositphotos.com/1035123/5942/i/950/depositphotos_59421253-stock-photo-internet-server-concept.jpg"
              alt="Web Hosting Servers"
              className="mb-4 sm:mb-6 rounded-lg w-full h-64 object-cover"
            />
            <h3 className="text-xl sm:text-2xl text-[#1136FF] font-semibold mb-3 sm:mb-4">
              Ultra-Fast Servers
            </h3>
            <p className="text-base sm:text-lg text-justify leading-tight">
              Our hosting servers are optimized for exceptional speed and
              efficiency. Featuring cutting-edge SSD storage and the latest
              processors, our servers ensure that your website loads quickly and
              performs optimally. This translates to a superior user experience
              and improved engagement for your visitors.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="https://www.infineon.com/export/sites/default/_images/about-infineon/tradeshows-conferences/Post-Quantum-Cryptography-Lock.png_1873026157.png"
              alt="Security Features"
              className="mb-4 sm:mb-6 rounded-lg w-full h-64 object-cover"
            />
            <h3 className="text-xl sm:text-2xl text-[#1136FF] font-semibold mb-3 sm:mb-4">
              Robust Security
            </h3>
            <p className="text-base sm:text-lg text-justify leading-tight">
              Security is our top priority with comprehensive measures in place.
              Our hosting plans include daily backups, real-time malware
              scanning, and DDoS protection to safeguard your data. This ensures
              that your website remains secure and operational, even in the face
              of potential threats.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12">
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.sanity.io/images/wl0ndo6t/main/58ff51fefa979efe2fc7896b862bc9af831e29b0-1920x1008.jpg?w=1200&h=630"
              alt="Scalability"
              className="mb-4 sm:mb-6 rounded-lg w-full h-64 object-cover"
            />
            <h3 className="text-xl sm:text-2xl text-[#1136FF] font-semibold mb-3 sm:mb-4">
              Seamless Scalability
            </h3>
            <p className="text-base sm:text-lg text-justify leading-tight">
              Our hosting solutions offer seamless scalability to accommodate
              your website's growth. As your traffic increases or your needs
              evolve, you can easily scale up your resources without
              experiencing downtime or performance issues. This flexibility
              helps you manage your online presence efficiently.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="https://xfibre.com.au/wp-content/uploads/2021/02/support-24-7-768x494.jpg"
              alt="24/7 Support"
              className="mb-4 sm:mb-6 rounded-lg w-full h-64 object-cover"
            />
            <h3 className="text-xl sm:text-2xl text-[#1136FF] font-semibold mb-3 sm:mb-4">
              24/7 Expert Support
            </h3>
            <p className="text-base sm:text-lg text-justify leading-tight">
              Our dedicated support team is available 24/7 to assist you with
              any questions or technical issues. Whether you need help with your
              hosting environment or have concerns about your account, our
              experts are here to provide prompt and effective solutions to
              ensure your satisfaction.
            </p>
          </div>
        </div>

        <p className="mt-8 md:mt-12 text-center text-base sm:text-lg md:text-xl">
          <strong className="text-[#1136FF]">
            Empower your online presence
          </strong>{" "}
          with our futuristic web hosting services, designed for performance,
          security, and scalability. Get started today and experience the best
          in web hosting technology!
        </p>
      </div>
      </section>
    </section>
  );
};

export default WebHosting;
