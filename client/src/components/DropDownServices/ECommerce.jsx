// ECommerce.jsx
import React from "react";

const ECommerce = () => {
  return (
    <section className="bg-transparent p-6" style={{ marginTop: "-40px" }}>
      <div className="container mx-auto">
        {/* Introduction */}
        <div className="text-center mb-8">
          <p className="text-black text-base md:text-lg lg:text-xl text-justify">
            Our e-commerce solutions are designed to propel your business to new
            heights. With cutting-edge features and innovative technology, we
            help you exceed your business goals and stay ahead in the
            competitive market. Explore the unique features that set us apart.
          </p>
        </div>

        {/* Features */}
        <section className="relative flex flex-col lg:flex-row justify-between items-center mb-12">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{
              backgroundImage: "url('../../../../processBg.jpg')",
              marginLeft: "-10vw",
              marginRight: "-10vw",
              marginTop: "-26.5vh", // Adjust these values to increase/decrease the top and bottom margins
              marginBottom: "-10vh",
              width: "calc(100% + 14vw)",
              height: "calc(100% + 30vh)", // Adjust height to compensate for the added top and bottom margins
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* Feature 1 */}
            <div className="card flex-1 bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 ease-in-out hover:scale-105">
              <img
                src="https://blog.tbrc.info/wp-content/uploads/2022/07/Advanced-Analytics--e1659093755417.jpg"
                alt="3D Image 1"
                className="w-full h-auto mb-4 rounded"
              />
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#1136FF] mb-2 text-center">
                Advanced Analytics
              </h2>
              <p className="text-black text-base md:text-lg lg:text-xl text-center mb-4">
                Leverage advanced analytics to gain insights into customer
                behavior, sales trends, and performance metrics. Our analytics
                tools help you make data-driven decisions and optimize your
                e-commerce strategy for maximum impact.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card flex-1 bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 ease-in-out hover:scale-105">
              <img
                src="https://atlanta.montfichet.com/wp-content/uploads/2022/09/Custom-eCommerce-Website-Development.jpg"
                alt="3D Image 2"
                className="w-full h-auto mb-4 rounded"
              />
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#1136FF] mb-2 text-center">
                Customizable Design
              </h2>
              <p className="text-black text-base md:text-lg lg:text-xl text-center mb-4">
                Tailor the look and feel of your online store to match your
                brand's identity. Our customizable design options give you full
                control over the aesthetics and user experience, ensuring a
                unique and engaging shopping environment.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card flex-1 bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 ease-in-out hover:scale-105">
              <img
                src="https://nividous.com/wp-content/uploads/2023/04/Discover-How-End-to-End-Workflow-Automation-Can-Save-You-Millions-Webinar-Feature-New.jpg"
                alt="3D Image 3"
                className="w-full h-auto mb-4 rounded"
              />
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#1136FF] mb-2 text-center">
                Seamless Integration
              </h2>
              <p className="text-black text-base md:text-lg lg:text-xl text-center mb-4">
                Our platform seamlessly integrates with popular payment
                gateways, CRM systems, and third-party tools. This ensures a
                smooth and efficient workflow, enhancing your operational
                efficiency and customer experience.
              </p>
            </div>
          </div>
        </section>
        {/* Customer Testimonials */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1136FF] mb-4">
            What Our Clients Say
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Testimonial 1 */}
            <div className="flex-1 bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 ease-in-out hover:scale-105">
              <img
                src="https://i.pinimg.com/originals/46/46/3f/46463f00c0db960a677c04f072238b82.png"
                alt="Client 1"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="text-black text-base md:text-lg lg:text-xl text-center mb-4">
                "The e-commerce solution provided by this team has transformed
                our business operations. The integration was seamless, and the
                analytics tools have given us invaluable insights."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="flex-1 bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 ease-in-out hover:scale-105">
              <img
                src="https://cdn.mos.cms.futurecdn.net/THCiUmVZcgxHodGCK3EyYo-1200-80.jpg"
                alt="Client 2"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="text-black text-base md:text-lg lg:text-xl text-center mb-4">
                "We are extremely pleased with the customizable design options.
                Our online store looks fantastic and is tailored perfectly to
                our brand's identity."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="flex-1 bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 ease-in-out hover:scale-105">
              <img
                src="https://pbs.twimg.com/profile_images/980145664712740864/aNWjR7MB_400x400.jpg"
                alt="Client 3"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="text-black text-base md:text-lg lg:text-xl text-center mb-4">
                "The customer support has been outstanding. Any issues or
                questions we've had were addressed promptly, making the entire
                process smooth and hassle-free."
              </p>
            </div>
          </div>
        </div>

        {/* Explore Our Advanced Features */}
        <section className="relative flex flex-col lg:flex-row justify-between items-center mb-12">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{
              backgroundImage: "url('../../../../processBg.jpg')",
              marginLeft: "-10vw",
              marginRight: "-10vw",
              marginTop: "-3vh", // Adjust these values to increase/decrease the top and bottom margins
              marginBottom: "-10vh",
              width: "calc(100% + 14vw)",
              height: "calc(95% + 12vh)", // Adjust height to compensate for the added top and bottom margins
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1136FF] mb-4">
              Explore Our Advanced Features
            </h2>
            <p className="text-black text-base md:text-lg lg:text-xl mb-8 text-justify">
              Our e-commerce platform offers a range of advanced features
              designed to enhance your online store's functionality. From
              sophisticated inventory management to powerful marketing tools, we
              provide everything you need to grow your business and increase
              sales.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              {/* Advanced Feature 1 */}
              <div className="card flex-1 bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 ease-in-out hover:scale-105">
                <img
                  src="https://www.akgvg.com/blog/wp-content/uploads/2021/06/Inventory-Management.jpg"
                  alt="Feature 4"
                  className="w-full h-auto mb-4 rounded"
                />
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#1136FF] mb-2 text-center">
                  Inventory Management
                </h3>
                <p className="text-black text-base md:text-lg lg:text-xl text-center">
                  Manage your inventory efficiently with our comprehensive
                  tools. Track stock levels, automate reordering, and receive
                  real-time updates to keep your store running smoothly.
                </p>
              </div>

              {/* Advanced Feature 2 */}
              <div className="card flex-1 bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 ease-in-out hover:scale-105">
                <img
                  src="https://cdn.technologyadvice.com/wp-content/uploads/2021/09/What-Is-Marketing-Automation.png"
                  alt="Feature 5"
                  className="w-full h-auto mb-4 rounded"
                />
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#1136FF] mb-2 text-center">
                  Marketing Automation
                </h3>
                <p className="text-black text-base md:text-lg lg:text-xl text-center">
                  Automate your marketing efforts with our powerful tools.
                  Create targeted campaigns, track performance, and increase
                  customer engagement with minimal effort.
                </p>
              </div>

              {/* Advanced Feature 3 */}
              <div className="card flex-1 bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 ease-in-out hover:scale-105">
                <img
                  src="https://th.bing.com/th/id/OIP.KUmT4d0TrtDG7vzMnAkUYwHaE8?w=600&h=400&rs=1&pid=ImgDetMain"
                  alt="Feature 6"
                  className="w-full h-auto mb-4 rounded"
                />
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#1136FF] mb-2 text-center">
                  Customer Support Integration
                </h3>
                <p className="text-black text-base md:text-lg lg:text-xl text-center">
                  Enhance customer satisfaction with integrated support
                  features. Offer live chat, ticketing systems, and easy access
                  to help resources to provide exceptional service.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ECommerce;
