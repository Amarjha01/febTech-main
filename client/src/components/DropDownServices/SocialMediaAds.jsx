import React from "react";
import {
  FaBullhorn,
  FaChartLine,
  FaRocket,
  FaDollarSign,
  FaUsers,
  FaThumbsUp,
  FaShare,
  FaComment,
  FaHeart,
} from "react-icons/fa";
import {
  AiOutlineAppstoreAdd,
  AiOutlineRise,
  AiOutlineDollarCircle,
  AiOutlineUsergroupAdd,
  AiOutlineFundProjectionScreen,
  AiOutlineBarChart,
  AiOutlineShoppingCart,
  AiOutlineSetting,
  AiOutlineTags,
} from "react-icons/ai";

// SocialMediaAds Component
const SocialMediaAds = () => {
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
    <div
      className="p-6 bg-gradient-to-r from-[#1136FF] to-black text-white max-w-full mx-auto rounded-lg mb-8 shadow-2xl mt-8"
      style={{ marginTop: "2px" }}
    >
      {/* Header Section */}
      <div className="text-center mb-8">
        <p className="text-lg font-light md:text-xl lg:text-2xl justify-center">
          Experience the next level of advertising with our innovative social
          media ad solutions. Our comprehensive approach helps you craft
          captivating campaigns that not only capture attention but also drive
          meaningful engagement. We offer tools and strategies designed to
          amplify your online presence and enhance brand recognition. From
          creative ad designs to targeted marketing techniques, we ensure that
          your messages reach the right audience at the right time. Partner with
          us to transform your social media advertising and achieve exceptional
          results in today's competitive digital landscape.
        </p>
      </div>

      {/* Ads Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {/* Ad Card 1 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center">
          <AiOutlineAppstoreAdd className="text-6xl mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">Boost Your Engagement</h2>
          <p className="text-base mb-4">
            Engage with your audience like never before. Our tools are designed
            to help you increase interaction and build stronger connections.
            Maximize your social media impact with targeted strategies and
            creative campaigns.
          </p>
          <div className="flex gap-4 justify-between items-center">
            <FaThumbsUp className="text-2xl text-blue-600" />
            <FaShare className="text-2xl text-green-600" />
            <FaComment className="text-2xl text-yellow-600" />
            <FaHeart className="text-2xl text-red-600" />
          </div>
        </div>

        {/* Ad Card 2 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center">
          <AiOutlineRise className="text-6xl mb-4 text-green-600" />
          <h2 className="text-xl font-semibold mb-2">Expand Your Reach</h2>
          <p className="text-base mb-4">
            Take your brand to the next level with targeted ads that reach your
            ideal audience. Maximize your visibility and grow your following
            with tailored strategies and creative approaches.
          </p>
          <div className="flex gap-4 justify-between items-center">
            <FaThumbsUp className="text-2xl text-blue-600" />
            <FaShare className="text-2xl text-green-600" />
            <FaComment className="text-2xl text-yellow-600" />
            <FaHeart className="text-2xl text-red-600" />
          </div>
        </div>

        {/* Ad Card 3 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center">
          <AiOutlineDollarCircle className="text-6xl mb-4 text-red-600" />
          <h2 className="text-xl font-semibold mb-2">Drive Conversions</h2>
          <p className="text-base mb-4">
            Turn clicks into customers with our high-converting ad solutions.
            Enhance your marketing strategy and see measurable results with our
            optimized campaigns and data-driven insights.
          </p>
          <div className="flex gap-4 justify-between items-center">
            <FaThumbsUp className="text-2xl text-blue-600" />
            <FaShare className="text-2xl text-green-600" />
            <FaComment className="text-2xl text-yellow-600" />
            <FaHeart className="text-2xl text-red-600" />
          </div>
        </div>

        {/* Ad Card 4 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center">
          <AiOutlineUsergroupAdd className="text-6xl mb-4 text-yellow-600" />
          <h2 className="text-xl font-semibold mb-2">Increase Visibility</h2>
          <p className="text-base mb-4">
            Ensure your brand stands out with eye-catching ads that capture
            attention. Boost your online presence and drive more traffic to your
            site with creative and strategic advertising.
          </p>
          <div className="flex gap-4 justify-between items-center">
            <FaThumbsUp className="text-2xl text-blue-600" />
            <FaShare className="text-2xl text-green-600" />
            <FaComment className="text-2xl text-yellow-600" />
            <FaHeart className="text-2xl text-red-600" />
          </div>
        </div>

        {/* Ad Card 5 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center">
          <AiOutlineFundProjectionScreen className="text-6xl mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">Engage with Creativity</h2>
          <p className="text-base mb-4">
            Leverage creative ad designs to captivate your audience. Our
            solutions focus on crafting engaging content that resonates and
            inspires action, driving better results for your campaigns.
          </p>
          <div className="flex gap-4 justify-between items-center">
            <FaThumbsUp className="text-2xl text-blue-600" />
            <FaShare className="text-2xl text-green-600" />
            <FaComment className="text-2xl text-yellow-600" />
            <FaHeart className="text-2xl text-red-600" />
          </div>
        </div>

        {/* Ad Card 6 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center">
          <AiOutlineBarChart className="text-6xl mb-4 text-green-600" />
          <h2 className="text-xl font-semibold mb-2">Maximize ROI</h2>
          <p className="text-base mb-4">
            Optimize your ad spend with strategies that maximize return on
            investment. Our data-driven approach ensures your budget is used
            effectively to achieve the best possible outcomes.
          </p>
          <div className="flex gap-4 justify-between items-center">
            <FaThumbsUp className="text-2xl text-blue-600" />
            <FaShare className="text-2xl text-green-600" />
            <FaComment className="text-2xl text-yellow-600" />
            <FaHeart className="text-2xl text-red-600" />
          </div>
        </div>

        {/* Ad Card 7 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center">
          <AiOutlineShoppingCart className="text-6xl mb-4 text-orange-600" />
          <h2 className="text-xl font-semibold mb-2">Boost Brand Awareness</h2>
          <p className="text-base mb-4">
            Increase your brand's visibility with impactful ad campaigns. Our
            strategies are designed to enhance your brand recognition and drive
            engagement through targeted ads.
          </p>
          <div className="flex gap-4 justify-between items-center">
            <FaThumbsUp className="text-2xl text-blue-600" />
            <FaShare className="text-2xl text-green-600" />
            <FaComment className="text-2xl text-yellow-600" />
            <FaHeart className="text-2xl text-red-600" />
          </div>
        </div>

        {/* Ad Card 8 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center">
          <AiOutlineSetting className="text-6xl mb-4 text-red-600" />
          <h2 className="text-xl font-semibold mb-2">
            Enhance User Experience
          </h2>
          <p className="text-base mb-4">
            Create ads that offer a seamless user experience. Our solutions
            focus on delivering high-quality content and smooth interactions to
            keep your audience engaged and satisfied.
          </p>
          <div className="flex gap-4 justify-between items-center">
            <FaThumbsUp className="text-2xl text-blue-600" />
            <FaShare className="text-2xl text-green-600" />
            <FaComment className="text-2xl text-yellow-600" />
            <FaHeart className="text-2xl text-red-600" />
          </div>
        </div>

        {/* Ad Card 9 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center">
          <AiOutlineTags className="text-6xl mb-4 text-purple-600" />
          <h2 className="text-xl font-semibold mb-2">
            Transform Your Campaigns
          </h2>
          <p className="text-base mb-4">
            Transform your advertising campaigns with our dynamic solutions.
            Achieve greater impact and results with creative strategies that are
            tailored to your specific goals and audience.
          </p>
          <div className="flex gap-4 justify-between items-center">
            <FaThumbsUp className="text-2xl text-blue-600" />
            <FaShare className="text-2xl text-green-600" />
            <FaComment className="text-2xl text-yellow-600" />
            <FaHeart className="text-2xl text-red-600" />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default SocialMediaAds;
