import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGooglePlus,
  FaPinterest,
  FaSnapchat,
  FaReddit,
  FaTiktok,
} from "react-icons/fa";

const SocialMediaMarketing = () => {
  return (<section className="relative flex flex-col lg:flex-row justify-between items-center mb-12">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{
              backgroundImage: "url('../../../../processBg.jpg')",
              marginLeft: "-10vw",
              marginRight: "-10vw",
              marginTop: "-17vh", // Adjust these values to increase/decrease the top and bottom margins
              marginBottom: "-10vh",
              width: "calc(100% + 12.4vw)",
              height: "calc(100% + 14.5vh)", // Adjust height to compensate for the added top and bottom margins
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
    <section className="bg-transparent py-8 px-4 lg:px-16 mb-5">
      <div className="container mx-auto">

        {/* Intro Section */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-base sm:text-lg md:text-xl text-gray-700">
            Elevate your brand's presence with our cutting-edge social media
            marketing strategies. From creative content to targeted ads, we
            offer solutions that drive results and engage your audience.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <FaFacebook className="text-3xl sm:text-4xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2 text-center">
              Facebook Marketing
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              Leverage Facebook's massive user base to reach your target
              audience. Our strategies include engaging posts, targeted ads, and
              community management to boost your brand's visibility.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <FaTwitter className="text-3xl sm:text-4xl text-blue-400 mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2 text-center">
              Twitter Advertising
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              Engage with your audience through dynamic tweets and strategic ad
              placements. Our approach helps you grow followers, enhance brand
              recognition, and drive traffic to your website.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <FaInstagram className="text-3xl sm:text-4xl text-pink-600 mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2 text-center">
              Instagram Campaigns
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              Capture the essence of your brand with visually stunning Instagram
              campaigns. We create eye-catching content and targeted ads to
              increase engagement and drive conversions.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <FaLinkedin className="text-3xl sm:text-4xl text-blue-700 mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2 text-center">
              LinkedIn Strategy
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              Connect with professionals and decision-makers through LinkedIn.
              Our strategy focuses on thought leadership, content marketing, and
              targeted ads to enhance your professional network.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <FaGooglePlus className="text-3xl sm:text-4xl text-red-500 mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2 text-center">
              Google Ads Management
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              Maximize your reach with Google Ads. We handle everything from
              keyword research to ad creation and optimization to ensure you get
              the best ROI for your advertising spend.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <FaPinterest className="text-3xl sm:text-4xl text-red-700 mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2 text-center">
              Pinterest Marketing
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              Drive traffic and engagement with Pinterest's visual discovery
              platform. Our approach includes creating compelling pins and
              targeted ads to reach your ideal audience.
            </p>
          </div>

          {/* Feature 7 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <FaSnapchat className="text-3xl sm:text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2 text-center">
              Snapchat Ads
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              Engage with a younger audience through Snapchat ads and creative
              content. We craft engaging Snap ads and filters to boost brand
              awareness and drive user interaction.
            </p>
          </div>

          {/* Feature 8 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <FaReddit className="text-3xl sm:text-4xl text-orange-600 mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2 text-center">
              Reddit Promotions
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              Reach niche communities and passionate users with Reddit
              promotions. Our strategy includes targeted ads and engaging
              content to connect with relevant audiences.
            </p>
          </div>

          {/* Feature 9 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <FaTiktok className="text-3xl sm:text-4xl text-black mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2 text-center">
              TikTok Marketing
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              Capture the attention of a global audience with creative TikTok
              campaigns. We develop viral content and targeted ads to enhance
              your brand's visibility and engagement.
            </p>
          </div>
        </div>

        {/* Additional Details Section */}
        <div className="mt-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 text-center">
            Why Choose Us?
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
            Our team of social media marketing experts is dedicated to helping
            you achieve your business goals. We offer personalized strategies
            tailored to your brand's unique needs. With our expertise, you'll
            benefit from:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 mb-8">
            <li>Innovative and creative marketing solutions.</li>
            <li>Data-driven approach to optimize campaign performance.</li>
            <li>
              Engaging and high-quality content tailored to your audience.
            </li>
            <li>Comprehensive analytics and reporting to track success.</li>
            <li>Expertise across all major social media platforms.</li>
          </ul>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
            Our goal is to not just meet, but exceed your expectations. Partner
            with us to transform your social media presence and achieve
            remarkable growth.
          </p>
        </div>
      </div>
    </section>
    </section>
  );
};

export default SocialMediaMarketing;
