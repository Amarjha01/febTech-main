import React from "react";
import {
  FaPhotoVideo,
  FaHashtag,
  FaBullhorn,
  FaShareAlt,
  FaHeart,
  FaCalendarAlt,
  FaUsers,
  FaChartLine,
  FaLocationArrow,
} from "react-icons/fa";

const InstagramAds = () => {
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
            <FaPhotoVideo />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Visual Appeal
          </h2>
          <p className="text-gray-700 mb-4">
            Capture attention with stunning visuals and high-quality videos.
            Instagram Ads are designed to showcase your brand's creativity and
            make a lasting impression on your audience.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Photo">
              📸
            </span>
            <span role="img" aria-label="Video">
              🎥
            </span>
            <span role="img" aria-label="Gallery">
              🖼️
            </span>
          </div>
        </div>

        {/* Ad Section 2 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-[#1136FF]">
            <FaHashtag />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Hashtag Targeting
          </h2>
          <p className="text-gray-700 mb-4">
            Utilize popular hashtags to increase the reach of your Instagram
            Ads. Engage with audiences interested in trending topics and enhance
            your brand's visibility on the platform.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Hashtag">
              #️⃣
            </span>
            <span role="img" aria-label="Trending">
              🔥
            </span>
            <span role="img" aria-label="Tag">
              🏷️
            </span>
          </div>
        </div>

        {/* Ad Section 3 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-[#1136FF]">
            <FaBullhorn />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Promotional Campaigns
          </h2>
          <p className="text-gray-700 mb-4">
            Drive engagement with targeted promotional campaigns. Instagram Ads
            allow you to create compelling offers and promotions that resonate
            with your audience and drive conversions.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Promotion">
              📣
            </span>
            <span role="img" aria-label="Ad">
              📢
            </span>
            <span role="img" aria-label="Deal">
              🎁
            </span>
          </div>
        </div>

        {/* Ad Section 4 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-[#1136FF]">
            <FaShareAlt />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Shareability
          </h2>
          <p className="text-gray-700 mb-4">
            Enhance your brand's reach with shareable content. Instagram Ads are
            designed to be easily shared, helping your brand to reach a broader
            audience through organic sharing.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Share">
              🔗
            </span>
            <span role="img" aria-label="Repost">
              🔄
            </span>
            <span role="img" aria-label="Network">
              🌐
            </span>
          </div>
        </div>

        {/* Ad Section 5 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-[#1136FF]">
            <FaHeart />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Engagement
          </h2>
          <p className="text-gray-700 mb-4">
            Foster a strong connection with your audience through engaging
            content. Instagram Ads help you build meaningful interactions with
            likes, comments, and shares.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Like">
              ❤️
            </span>
            <span role="img" aria-label="Comment">
              💬
            </span>
            <span role="img" aria-label="Follow">
              👣
            </span>
          </div>
        </div>

        {/* Ad Section 6 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-[#1136FF]">
            <FaCalendarAlt />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Scheduled Ads
          </h2>
          <p className="text-gray-700 mb-4">
            Plan and schedule your Instagram Ads to run at optimal times. Reach
            your audience when they are most active and increase the
            effectiveness of your campaigns.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Calendar">
              📅
            </span>
            <span role="img" aria-label="Clock">
              ⏰
            </span>
            <span role="img" aria-label="Event">
              🎉
            </span>
          </div>
        </div>

        {/* Ad Section 7 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-[#1136FF]">
            <FaUsers />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Audience Insights
          </h2>
          <p className="text-gray-700 mb-4">
            Gain valuable insights into your audience's preferences and
            behavior. Instagram Ads provide analytics to help you understand
            your audience and tailor your content accordingly.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Users">
              👥
            </span>
            <span role="img" aria-label="Insights">
              🔍
            </span>
            <span role="img" aria-label="Demographics">
              📊
            </span>
          </div>
        </div>

        {/* Ad Section 8 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-[#1136FF]">
            <FaChartLine />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Performance Tracking
          </h2>
          <p className="text-gray-700 mb-4">
            Monitor the performance of your Instagram Ads with detailed metrics.
            Track key performance indicators to optimize your ad strategy and
            achieve better results.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Performance">
              📈
            </span>
            <span role="img" aria-label="Growth">
              📊
            </span>
            <span role="img" aria-label="Analysis">
              🔎
            </span>
          </div>
        </div>

        {/* Ad Section 9 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4 text-6xl text-[#1136FF]">
            <FaLocationArrow />
          </div>
          <h2 className="text-3xl font-semibold text-[#1136FF] mb-3">
            Geotargeting
          </h2>
          <p className="text-gray-700 mb-4">
            Target specific locations with Instagram Ads. Reach audiences based
            on their geographic location to enhance the relevance of your ads
            and drive local engagement.
          </p>
          <div className="flex space-x-4 text-4xl">
            <span role="img" aria-label="Location">
              📍
            </span>
            <span role="img" aria-label="Map">
              🗺️
            </span>
            <span role="img" aria-label="Target">
              🎯
            </span>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default InstagramAds;
