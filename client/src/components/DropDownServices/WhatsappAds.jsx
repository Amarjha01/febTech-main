import React from "react";
import {
  FaCommentDots,
  FaUsers,
  FaHandshake,
  FaMobileAlt,
  FaRocket,
  FaLock,
  FaChartBar,
  FaTag,
  FaHeadset,
} from "react-icons/fa";

const WhatsappAds = () => {
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
    <div className="p-8 bg-transparent text-gray-900">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Ad Section 1 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-[#1136FF]">
            <FaCommentDots />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Direct Messaging
          </h2>
          <p className="text-gray-700 mb-4">
            WhatsApp Ads allow you to engage with your audience directly through
            personalized messaging. Reach out to potential customers with
            tailored content and encourage meaningful interactions.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Chat">
              💬
            </span>
            <span role="img" aria-label="Message">
              📩
            </span>
            <span role="img" aria-label="Notification">
              🔔
            </span>
          </div>
        </div>

        {/* Ad Section 2 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-[#1136FF]">
            <FaUsers />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Audience Targeting
          </h2>
          <p className="text-gray-700 mb-4">
            Utilize WhatsApp Ads to target specific audiences based on their
            interests and behavior. Ensure that your ads reach the right people,
            maximizing engagement and conversion rates.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Group">
              👥
            </span>
            <span role="img" aria-label="Target">
              🎯
            </span>
            <span role="img" aria-label="User">
              🧑
            </span>
          </div>
        </div>

        {/* Ad Section 3 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-[#1136FF]">
            <FaHandshake />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Customer Engagement
          </h2>
          <p className="text-gray-700 mb-4">
            Build strong customer relationships through interactive WhatsApp
            Ads. Encourage engagement by offering personalized deals and prompt
            responses to inquiries.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Handshake">
              🤝
            </span>
            <span role="img" aria-label="Support">
              🙋
            </span>
            <span role="img" aria-label="Feedback">
              📝
            </span>
          </div>
        </div>

        {/* Ad Section 4 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-[#1136FF]">
            <FaMobileAlt />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Mobile-First Approach
          </h2>
          <p className="text-gray-700 mb-4">
            WhatsApp Ads are optimized for mobile devices, ensuring a seamless
            user experience. Capture the attention of users on the go with ads
            designed for smartphones and tablets.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Mobile">
              📱
            </span>
            <span role="img" aria-label="Tablet">
              💻
            </span>
            <span role="img" aria-label="Notification">
              🔔
            </span>
          </div>
        </div>

        {/* Ad Section 5 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-[#1136FF]">
            <FaRocket />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Boosted Visibility
          </h2>
          <p className="text-gray-700 mb-4">
            Increase the visibility of your brand with WhatsApp Ads. Utilize
            targeted campaigns to reach a wider audience and enhance your
            brand’s presence in the digital space.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Boost">
              🚀
            </span>
            <span role="img" aria-label="Growth">
              🌱
            </span>
            <span role="img" aria-label="Reach">
              📈
            </span>
          </div>
        </div>

        {/* Ad Section 6 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-[#1136FF]">
            <FaLock />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Enhanced Security
          </h2>
          <p className="text-gray-700 mb-4">
            WhatsApp Ads prioritize user privacy and security. Your ads and
            messages are protected with encryption, ensuring that your
            audience’s data remains secure and confidential.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Security">
              🔒
            </span>
            <span role="img" aria-label="Privacy">
              🔐
            </span>
            <span role="img" aria-label="Protection">
              🛡️
            </span>
          </div>
        </div>

        {/* Ad Section 7 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-[#1136FF]">
            <FaChartBar />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Advanced Analytics
          </h2>
          <p className="text-gray-700 mb-4">
            Track the performance of your WhatsApp Ads with advanced analytics.
            Gain insights into engagement, conversion rates, and more to
            optimize your ad strategies and achieve better results.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Analytics">
              📊
            </span>
            <span role="img" aria-label="Graph">
              📈
            </span>
            <span role="img" aria-label="Statistics">
              📉
            </span>
          </div>
        </div>

        {/* Ad Section 8 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-[#1136FF]">
            <FaTag />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Promotional Offers
          </h2>
          <p className="text-gray-700 mb-4">
            Create effective promotional offers with WhatsApp Ads. Share special
            discounts, deals, and exclusive offers directly with your audience
            to drive sales and increase customer loyalty.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Promotion">
              🏷️
            </span>
            <span role="img" aria-label="Discount">
              💸
            </span>
            <span role="img" aria-label="Deal">
              🎁
            </span>
          </div>
        </div>

        {/* Ad Section 9 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-[#1136FF]">
            <FaHeadset />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Customer Support
          </h2>
          <p className="text-gray-700 mb-4">
            WhatsApp Ads provide an excellent platform for customer support.
            Engage with customers, answer their questions promptly, and provide
            assistance directly through WhatsApp to enhance their overall
            experience.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Support">
              🎧
            </span>
            <span role="img" aria-label="Help">
              🆘
            </span>
            <span role="img" aria-label="Assistance">
              🙌
            </span>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default WhatsappAds;
