import React from "react";
import {
  FaSms,
  FaUserCheck,
  FaMobileAlt,
  FaEnvelopeOpenText,
  FaChartBar,
  FaPaperPlane,
  FaHandsHelping,
} from "react-icons/fa";

const SmsMarketing = () => {
  // Dummy images from Unsplash
  const smsImage1 =
    "https://hub.synerise.com/use-cases/all-cases/_gfx/dynamic-sms-campaign.png";
  const smsImage2 =
    "https://dunadesign.com.br/wp-content/uploads/2021/11/web-communication-share-phone-application-online-1024x683.jpg";
  const smsImage3 =
    "https://i1.wp.com/analyticsexplained.com/wp-content/uploads/2020/07/4-Types-of-Analytics.jpg?resize=1080%2C544&ssl=1";
  const smsImage4 =
    "https://th.bing.com/th/id/R.c8477be144695a3639f499edbc330ad8?rik=r77c4Bm0UN14NA&riu=http%3a%2f%2fcampaignlabs.io%2fwp-content%2fuploads%2f2021%2f05%2fsms-marketing-10-best-practices-for-sms-campaign.jpg&ehk=MhYAfylzv%2fPBq09a4gFyvu1QaID2W1RyxK7FKOYLpos%3d&risl=&pid=ImgRaw&r=0";

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
      style={{ marginTop: "-50px" }}
    >
      <div className="container mx-auto">
        {/* Intro Section */}
        <div className="text-center mb-12">
          <p className="text-lg sm:text-xl md:text-2xl text-black">
            Transform your marketing strategy with powerful SMS campaigns. Our
            SMS marketing services offer a direct channel to engage with your
            audience through personalized messages, real-time updates, and
            performance tracking.
          </p>
        </div>

        {/* Feature Section */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          style={{ marginTop: "-40px" }}
        >
          {/* Feature 1 */}
          <div className="relative p-6 bg-gray-100 rounded-lg shadow-lg text-white overflow-hidden transition-transform duration-700 transform hover:scale-110 hover:z-10">
            <div className="absolute inset-0 bg-white opacity-10 rounded-lg -z-10" />
            <div className="flex justify-center items-center mb-4">
              <FaSms className="text-5xl text-[#1136FF]" />
              <FaEnvelopeOpenText className="text-5xl ml-2 text-[#1136FF]" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center text-[#1136FF]">
              Dynamic SMS Campaigns
            </h3>
            <p className="text-base mb-4 text-black">
              Engage your customers with dynamic SMS campaigns that adapt to
              their preferences, making each message personal and relevant.
            </p>
            <div className="w-full h-48 overflow-hidden rounded-lg">
              <img
                src={smsImage1}
                alt="Dynamic SMS Campaigns"
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="relative p-6 bg-gray-100 rounded-lg shadow-lg text-white overflow-hidden transition-transform duration-700 transform hover:scale-110 hover:z-10">
            <div className="absolute inset-0 bg-white opacity-10 rounded-lg -z-10" />
            <div className="flex justify-center items-center mb-4">
              <FaMobileAlt className="text-5xl text-[#1136FF]" />
              <FaUserCheck className="text-5xl ml-2 text-[#1136FF]" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center text-[#1136FF]">
              Instant Engagement
            </h3>
            <p className="text-base mb-4 text-black">
              Ensure your messages are seen immediately with our SMS services
              that guarantee instant delivery and high open rates.
            </p>
            <div className="w-full h-48 overflow-hidden rounded-lg">
              <img
                src={smsImage2}
                alt="Instant Engagement"
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="relative p-6 bg-gray-100 rounded-lg shadow-lg text-white overflow-hidden transition-transform duration-700 transform hover:scale-110 hover:z-10">
            <div className="absolute inset-0 bg-white opacity-10 rounded-lg -z-10" />
            <div className="flex justify-center items-center mb-4">
              <FaChartBar className="text-5xl text-[#1136FF]" />
              <FaPaperPlane className="text-5xl ml-2 text-[#1136FF]" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center text-[#1136FF]">
              Detailed Analytics
            </h3>
            <p className="text-base mb-4 text-black">
              Track the success of your campaigns with our detailed analytics.
              Measure key metrics and adjust your strategy to achieve the best
              results.
            </p>
            <div className="w-full h-48 overflow-hidden rounded-lg">
              <img
                src={smsImage3}
                alt="Detailed Analytics"
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Additional Content Section */}
        <div className="mt-16" style={{ marginTop: "80px" }}>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1136FF] mb-8 text-center">
            Why Our SMS Marketing Stands Out
          </h3>
          <p className="text-lg sm:text-xl text-black mb-6">
            Our SMS marketing services offer a unique approach to reaching your
            audience with personalized, impactful messages. Benefit from our
            expertise in crafting campaigns that deliver results and drive
            engagement.
          </p>
          <p className="text-lg sm:text-xl text-black mb-6">
            From real-time updates to loyalty programs, we tailor our services
            to meet your specific needs and goals. Let us help you leverage SMS
            marketing to its full potential.
          </p>
          <p className="text-lg sm:text-xl text-black mb-6">
            Discover how our innovative strategies and comprehensive analytics
            can transform your marketing efforts and enhance your customer
            interactions.
          </p>
          <div className="w-full h-64 overflow-hidden rounded-lg mb-8">
            <img
              src={smsImage4}
              alt="Why Our SMS Marketing Stands Out"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>

        {/* Unique Section: SMS Campaign Success Stories */}
        <div className="bg-transparent p-6 rounded-lg shadow-lg mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1136FF] mb-6 text-center">
            SMS Campaign Success Stories
          </h3>
          <p className="text-lg sm:text-xl text-black mb-6 text-center">
            Learn how our SMS marketing strategies have led to impressive
            results for our clients. From increased engagement to significant
            boosts in sales, our approach delivers measurable success.
          </p>
          <p className="text-lg sm:text-xl text-black mb-6 text-center">
            Our case studies highlight the effectiveness of targeted SMS
            campaigns and the positive impact on customer relationships.
          </p>
        </div>
      </div>
    </section>
    </section>
  );
};

export default SmsMarketing;
