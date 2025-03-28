import React from "react";
import {
  FaSearch,
  FaBullseye,
  FaDollarSign,
  FaChartBar,
  FaGlobe,
  FaThumbsUp,
  FaPen,
  FaUsers,
  FaTools,
} from "react-icons/fa";

const GoogleAds = () => {
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
            <FaSearch />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Search Ads
          </h2>
          <p className="text-gray-700 mb-4">
            Reach users actively searching for products or services like yours
            with targeted search ads. Optimize your ad campaigns to appear on
            relevant search results and attract high-intent customers.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Search">
              🔍
            </span>
            <span role="img" aria-label="Magnifying Glass">
              🔎
            </span>
            <span role="img" aria-label="Target">
              🎯
            </span>
          </div>
        </div>

        {/* Ad Section 2 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-[#1136FF]">
            <FaBullseye />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Targeting
          </h2>
          <p className="text-gray-700 mb-4">
            Utilize precise targeting options to reach your ideal audience.
            Google Ads offers various targeting methods, including demographics,
            interests, and location-based targeting.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Target">
              🎯
            </span>
            <span role="img" aria-label="Pinpoint">
              📍
            </span>
            <span role="img" aria-label="Arrow">
              ➡️
            </span>
          </div>
        </div>

        {/* Ad Section 3 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-[#1136FF]">
            <FaDollarSign />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Budget Management
          </h2>
          <p className="text-gray-700 mb-4">
            Control your ad spending with flexible budget management options.
            Google Ads allows you to set daily budgets and adjust bids to
            maximize the return on investment for your ad campaigns.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Money">
              💵
            </span>
            <span role="img" aria-label="Cash">
              💰
            </span>
            <span role="img" aria-label="Budget">
              💳
            </span>
          </div>
        </div>

        {/* Ad Section 4 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-[#1136FF]">
            <FaChartBar />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Performance Tracking
          </h2>
          <p className="text-gray-700 mb-4">
            Monitor the performance of your ads with detailed analytics. Google
            Ads provides comprehensive reports to help you understand how your
            ads are performing and identify areas for improvement.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Analytics">
              📈
            </span>
            <span role="img" aria-label="Graph">
              📊
            </span>
            <span role="img" aria-label="Report">
              📑
            </span>
          </div>
        </div>

        {/* Ad Section 5 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-[#1136FF]">
            <FaGlobe />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Global Reach
          </h2>
          <p className="text-gray-700 mb-4">
            Expand your reach to a global audience with Google Ads. Create ads
            that target users in different countries and regions to grow your
            international presence.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="World">
              🌍
            </span>
            <span role="img" aria-label="Map">
              🗺️
            </span>
            <span role="img" aria-label="Location">
              📍
            </span>
          </div>
        </div>

        {/* Ad Section 6 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-[#1136FF]">
            <FaThumbsUp />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Customer Engagement
          </h2>
          <p className="text-gray-700 mb-4">
            Increase engagement with your ads by targeting interested users.
            Google Ads helps you connect with potential customers who are more
            likely to interact with your brand.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Like">
              👍
            </span>
            <span role="img" aria-label="Heart">
              ❤️
            </span>
            <span role="img" aria-label="Comment">
              💬
            </span>
          </div>
        </div>

        {/* Ad Section 7 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-[#1136FF]">
            <FaPen />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Ad Creation
          </h2>
          <p className="text-gray-700 mb-4">
            Create compelling ads with Google's easy-to-use ad creation tools.
            Customize your ads with text, images, and calls-to-action to attract
            and engage your target audience.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Edit">
              ✏️
            </span>
            <span role="img" aria-label="Pencil">
              🖊️
            </span>
            <span role="img" aria-label="Write">
              📝
            </span>
          </div>
        </div>

        {/* Ad Section 8 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-[#1136FF]">
            <FaUsers />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Audience Insights
          </h2>
          <p className="text-gray-700 mb-4">
            Gain insights into your audience's behavior and preferences with
            Google Ads. Use this data to refine your ad strategy and target
            users more effectively.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Users">
              👥
            </span>
            <span role="img" aria-label="Insights">
              🔍
            </span>
            <span role="img" aria-label="Data">
              📊
            </span>
          </div>
        </div>

        {/* Ad Section 9 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-[#1136FF]">
            <FaTools />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Optimization Tools
          </h2>
          <p className="text-gray-700 mb-4">
            Enhance your ad campaigns with Google Ads' optimization tools.
            Utilize automated suggestions and performance metrics to
            continuously improve your ad effectiveness.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Tools">
              🛠️
            </span>
            <span role="img" aria-label="Gear">
              ⚙️
            </span>
            <span role="img" aria-label="Wrench">
              🔧
            </span>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default GoogleAds;
