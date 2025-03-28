import React from "react";
import { FaEnvelope, FaBullhorn, FaChartLine } from "react-icons/fa";

const EmailMarketing = () => {
  // Dummy images from Unsplash
  const emailImage1 =
    "https://www.infolinks.com/wp-content/uploads/2014/07/Dollarphotoclub_83070034.jpg";
  const emailImage2 =
    "https://www.tye.io/en/wp-content/uploads/sites/3/Tye.io-Featured-Image-4.jpg";
  const emailImage3 =
    "https://assets.bigcartel.com/product_images/347125546/WhatsApp+Image+2022-07-11+at+8.53.25+PM.jpeg?auto=format&fit=max&h=1200&w=1200";
  const emailImage4 =
    "https://thedigitaltantra.com/wp-content/uploads/2020/10/contactus-2.jpg";

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
              height: "calc(100% - 27vh)", // Adjust height to compensate for the added top and bottom margins
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
            Maximize your business potential with our email marketing services.
            We offer personalized campaigns and automated flows to boost
            engagement, nurture leads, and convert prospects into loyal
            customers.
          </p>
        </div>

        {/* Feature Section */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          style={{ marginTop: "-40px" }}
        >
          {/* Feature 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <FaEnvelope className="text-4xl text-blue-700 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2 text-center">
              Personalized Email Campaigns
            </h3>
            <p className="text-base text-gray-700 mb-4">
              Tailor your email marketing efforts to the specific needs and
              preferences of your audience. Our personalized campaigns ensure
              that each email resonates with your subscribers, resulting in
              higher open rates and conversions.
            </p>
            <img
              src={emailImage1}
              alt="Personalized Email Campaigns"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <FaBullhorn className="text-4xl text-blue-700 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2 text-center">
              Automated Email Flows
            </h3>
            <p className="text-base text-gray-700 mb-4">
              Streamline your communication with automated email flows that
              engage your audience at the right time. From welcome series to
              re-engagement campaigns, we help you stay connected with your
              customers effortlessly.
            </p>
            <img
              src={emailImage2}
              alt="Automated Email Flows"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <FaChartLine className="text-4xl text-blue-700 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2 text-center">
              Data-Driven Insights
            </h3>
            <p className="text-base text-gray-700 mb-4">
              Leverage data-driven insights to optimize your email marketing
              strategy. Our comprehensive analytics and reporting tools help you
              track performance, identify trends, and make informed decisions to
              improve your results.
            </p>
            <img
              src={emailImage3}
              alt="Data-Driven Insights"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Additional Content Section */}
        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-8 text-center">
            Why Choose Our Email Marketing Services?
          </h3>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            Our team of email marketing experts is dedicated to helping you
            achieve your business goals through tailored strategies that align
            with your brand's unique voice. Whether you're looking to nurture
            leads, boost sales, or enhance customer retention, we have the tools
            and expertise to deliver results.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            With a focus on personalization, automation, and data-driven
            insights, we ensure that your email marketing campaigns are not only
            effective but also provide a seamless experience for your
            subscribers.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            Let us help you harness the power of email marketing to build
            lasting relationships with your customers and drive sustainable
            growth for your business.
          </p>
          <img
            src={emailImage4}
            alt="Why Choose Us"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        </div>

        {/* Testimonials Section */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-lg mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 text-center">
            What Our Clients Say
          </h3>
          <p className="text-lg sm:text-xl text-gray-700 mb-6 text-center">
            "The email marketing strategies provided by this team have
            significantly improved our customer engagement. We've seen a notable
            increase in open rates and conversions, and the personalized
            approach has resonated well with our audience."
          </p>
          <p className="text-lg sm:text-xl text-gray-700 mb-6 text-center">
            "Automated email flows have saved us so much time while keeping our
            customers informed and engaged."
          </p>
        </div>
      </div>
    </section>
    </section>
  );
};

export default EmailMarketing;
