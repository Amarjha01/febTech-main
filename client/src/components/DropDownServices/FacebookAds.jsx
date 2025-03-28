import React from "react";
import {
  FaBullseye,
  FaDollarSign,
  FaChartLine,
  FaBell,
  FaRocket,
  FaPaintBrush,
  FaUserShield,
  FaCogs,
  FaSmile,
} from "react-icons/fa";

const FacebookAds = () => {
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
          <div className="mb-4 text-6xl text-blue-600">
            <FaBullseye />
          </div>
          <h2 className="text-3xl font-semibold text-blue-600 mb-3">
            Targeted Advertising
          </h2>
          <p className="text-gray-700 mb-4">
            Facebook Ads provide powerful targeting options that allow you to
            reach the right audience. With features like demographic targeting,
            interests, behaviors, and custom audiences, you can ensure that your
            ads are shown to people who are most likely to engage with your
            content and convert.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Target">
              🎯
            </span>
            <span role="img" aria-label="Graph">
              📊
            </span>
            <span role="img" aria-label="Audience">
              👥
            </span>
          </div>
        </div>

        {/* Ad Section 2 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-blue-600">
            <FaDollarSign />
          </div>
          <h2 className="text-3xl font-semibold text-blue-600 mb-3">
            Cost-Effective Solutions
          </h2>
          <p className="text-gray-700 mb-4">
            Facebook Ads offer a flexible budgeting system that allows you to
            control how much you spend and optimize your ad campaigns. Whether
            you’re running a small business or a large enterprise, you can
            adjust your ad spend according to your needs and achieve a high
            return on investment.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Money">
              💵
            </span>
            <span role="img" aria-label="Savings">
              💰
            </span>
            <span role="img" aria-label="Calculator">
              🧮
            </span>
          </div>
        </div>

        {/* Ad Section 3 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-blue-600">
            <FaChartLine />
          </div>
          <h2 className="text-3xl font-semibold text-blue-600 mb-3">
            Enhanced Analytics
          </h2>
          <p className="text-gray-700 mb-4">
            Track your ad performance with detailed analytics and insights
            provided by Facebook Ads. Measure key metrics such as reach,
            engagement, and conversion rates to understand your ad’s
            effectiveness and make data-driven decisions to optimize your
            campaigns for better results.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Chart">
              📈
            </span>
            <span role="img" aria-label="Stats">
              📉
            </span>
            <span role="img" aria-label="Data">
              🗂️
            </span>
          </div>
        </div>

        {/* Ad Section 4 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-blue-600">
            <FaBell />
          </div>
          <h2 className="text-3xl font-semibold text-blue-600 mb-3">
            Increased Engagement
          </h2>
          <p className="text-gray-700 mb-4">
            Facebook Ads are designed to capture attention and drive engagement.
            Create compelling ad creatives and use engaging calls-to-action to
            encourage users to interact with your ads, leading to increased
            brand awareness and customer engagement.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Engage">
              🔔
            </span>
            <span role="img" aria-label="Reaction">
              ❤️
            </span>
            <span role="img" aria-label="Comment">
              💬
            </span>
          </div>
        </div>

        {/* Ad Section 5 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-blue-600">
            <FaRocket />
          </div>
          <h2 className="text-3xl font-semibold text-blue-600 mb-3">
            Scalable Advertising
          </h2>
          <p className="text-gray-700 mb-4">
            Facebook Ads are highly scalable, making them suitable for
            businesses of all sizes. Whether you’re running a local campaign or
            a global ad strategy, you can adjust your ad campaigns to meet your
            growing business needs and achieve your marketing objectives
            effectively.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Scale">
              📏
            </span>
            <span role="img" aria-label="Growth">
              🌱
            </span>
            <span role="img" aria-label="Expansion">
              🚀
            </span>
          </div>
        </div>

        {/* Ad Section 6 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-blue-600">
            <FaPaintBrush />
          </div>
          <h2 className="text-3xl font-semibold text-blue-600 mb-3">
            Creative Flexibility
          </h2>
          <p className="text-gray-700 mb-4">
            Facebook Ads offer a variety of ad formats to suit your creative
            needs. Whether you want to create image ads, video ads, carousel
            ads, or slideshow ads, you have the flexibility to design visually
            appealing ads that resonate with your target audience and align with
            your brand’s message.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Creativity">
              🎨
            </span>
            <span role="img" aria-label="Design">
              🖌️
            </span>
            <span role="img" aria-label="Media">
              📸
            </span>
          </div>
        </div>

        {/* Ad Section 7 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-blue-600">
            <FaUserShield />
          </div>
          <h2 className="text-3xl font-semibold text-blue-600 mb-3">
            Enhanced Privacy
          </h2>
          <p className="text-gray-700 mb-4">
            Facebook Ads adhere to strict privacy policies, ensuring that your
            ad data and user information are protected. With advanced privacy
            features, you can trust that your advertising efforts are secure and
            compliant with regulations.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Privacy">
              🔒
            </span>
            <span role="img" aria-label="Protection">
              🛡️
            </span>
            <span role="img" aria-label="Security">
              ⚠️
            </span>
          </div>
        </div>

        {/* Ad Section 8 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-blue-600">
            <FaCogs />
          </div>
          <h2 className="text-3xl font-semibold text-blue-600 mb-3">
            Customizable Settings
          </h2>
          <p className="text-gray-700 mb-4">
            Customize your Facebook Ads with a range of settings and options.
            Tailor your ad campaigns to fit your specific goals and preferences,
            and make adjustments as needed to optimize your results and achieve
            your desired outcomes.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Settings">
              ⚙️
            </span>
            <span role="img" aria-label="Tools">
              🛠️
            </span>
            <span role="img" aria-label="Adjustment">
              🔧
            </span>
          </div>
        </div>

        {/* Ad Section 9 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-blue-600">
            <FaSmile />
          </div>
          <h2 className="text-3xl font-semibold text-blue-600 mb-3">
            Customer Satisfaction
          </h2>
          <p className="text-gray-700 mb-4">
            Facebook Ads are designed to enhance customer satisfaction by
            delivering relevant and engaging content. By targeting the right
            audience and optimizing ad performance, you can ensure that your
            customers have a positive experience with your brand and feel more
            connected to your products and services.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Happiness">
              😊
            </span>
            <span role="img" aria-label="Feedback">
              💬
            </span>
            <span role="img" aria-label="Success">
              🌟
            </span>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default FacebookAds;
