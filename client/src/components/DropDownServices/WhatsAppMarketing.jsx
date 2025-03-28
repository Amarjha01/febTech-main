import React from "react";
import {
  FaWhatsapp,
  FaUserFriends,
  FaChartPie,
  FaCogs,
  FaBullhorn,
  FaRocket,
  FaComments,
} from "react-icons/fa";

const WhatsAppMarketing = () => {
  // Dummy images from Unsplash
  const whatsappImage1 =
    "https://blog.intercomassets.com/blog/wp-content/uploads/2022/03/Samantha-Slinn-%E2%80%93-personalized-marketing-messaging-scaled.jpeg";
  const whatsappImage2 =
    "https://www.moengage.com/wp-content/uploads/2018/08/Real-Time-Engagement-Works.jpg";
  const whatsappImage3 =
    "https://www.geckoboard.com/blog/content/images/2021/10/Email-Marketing-Dashboard-Example.png";
  const whatsappImage4 =
    "https://th.bing.com/th/id/R.8585d7e7b5f5443a40de13d2d79d5154?rik=6uOLezY6v6hEcQ&riu=http%3a%2f%2fzenenterprises.in%2fimages%2fslider%2fslider3.jpg&ehk=I9M8FwG8D0SbEK5%2f9H0SasQDbI4okuGB5yKQv2Psxek%3d&risl=&pid=ImgRaw&r=0";

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
              height: "calc(100% - 30.5vh)", // Adjust height to compensate for the added top and bottom margins
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
    <section 
      className="bg-transparent py-12 px-6 lg:px-24"
      style={{ marginTop: "-40px" }}
    >
      <div className="container mx-auto">
        {/* Intro Section */}
        <div className="text-center mb-12">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700">
            Enhance your outreach with our customized WhatsApp marketing
            services. From personalized messages to real-time engagement and
            targeted campaigns, we harness WhatsApp's power to boost your
            business growth.
          </p>
        </div>

        {/* Feature Section */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          style={{ marginTop: "-40px" }}
        >
          {/* Feature 1 */}
          <div className="bg-gradient-to-r from-[#1136FF] to-[#00FFEE] p-6 rounded-lg shadow-lg text-white transform transition-transform duration-500 hover:scale-105 hover:rotate-2 hover:shadow-xl">
            <div className="flex justify-center items-center mb-4">
              <FaWhatsapp className="text-4xl" />
              <FaComments className="text-4xl ml-2" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Personalized Messaging
            </h3>
            <p className="text-base mb-4">
              Create impactful, personalized messages that resonate with your
              audience. Our WhatsApp marketing service allows you to send
              targeted messages that engage and convert leads into loyal
              customers.
            </p>
            <img
              src={whatsappImage1}
              alt="Personalized Messaging"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          {/* Feature 2 */}
          <div className="bg-gradient-to-r from-[#1136FF] to-[#00FFEE] p-6 rounded-lg shadow-lg text-white transform transition-transform duration-500 hover:scale-105 hover:-rotate-2 hover:shadow-xl">
            <div className="flex justify-center items-center mb-4">
              <FaUserFriends className="text-4xl" />
              <FaBullhorn className="text-4xl ml-2" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Real-Time Engagement
            </h3>
            <p className="text-base mb-4">
              Engage with your customers in real-time, providing them with
              instant responses and support. Build trust and maintain strong
              relationships through continuous communication on a platform they
              use daily.
            </p>
            <img
              src={whatsappImage2}
              alt="Real-Time Engagement"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          {/* Feature 3 */}
          <div className="bg-gradient-to-r from-[#1136FF] to-[#00FFEE] p-6 rounded-lg shadow-lg text-white transform transition-transform duration-500 hover:scale-105 hover:rotate-1 hover:shadow-xl">
            <div className="flex justify-center items-center mb-4">
              <FaChartPie className="text-4xl" />
              <FaCogs className="text-4xl ml-2" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Campaign Analytics
            </h3>
            <p className="text-base mb-4">
              Monitor the success of your campaigns with in-depth analytics.
              Track key metrics such as message delivery rates, open rates, and
              customer engagement to refine your strategy and maximize your ROI.
            </p>
            <img
              src={whatsappImage3}
              alt="Campaign Analytics"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Additional Content Section */}
        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1136FF] mb-8 text-center">
            Why Choose Our WhatsApp Marketing Services?
          </h3>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            Our comprehensive WhatsApp marketing services are designed to help
            you achieve your business goals by reaching your audience where they
            are most active. Whether you're launching a new product, offering
            promotions, or just staying connected with your customers, our
            services ensure your message is delivered effectively.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            With our focus on personalization, real-time engagement, and
            data-driven strategies, we provide you with the tools and insights
            needed to run successful campaigns. Our team of experts is here to
            guide you every step of the way, ensuring that your marketing
            efforts yield the best results.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            Let us help you unlock the full potential of WhatsApp marketing to
            grow your business and connect with your audience in a more
            meaningful way.
          </p>
          <img
            src={whatsappImage4}
            alt="Why Choose Us"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        </div>

        {/* Expert Support Section */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-lg mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1136FF] mb-6 text-center">
            Expert Support
          </h3>
          <p className="text-lg sm:text-xl text-gray-700 mb-6 text-center">
            Our dedicated support team is available 24/7 to help you with any
            questions or issues you may have. From campaign setup to performance
            analysis, we're here to ensure your WhatsApp marketing efforts are
            successful and hassle-free.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 mb-6 text-center">
            Our experts will work closely with you to optimize your strategies,
            providing guidance and insights that help you get the most out of
            your campaigns. With us, you're never alone on your marketing
            journey.
          </p>
        </div>
      </div>
    </section>
    </section>
  );
};

export default WhatsAppMarketing;
