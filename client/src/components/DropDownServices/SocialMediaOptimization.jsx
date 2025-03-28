import React from "react";

const SocialMediaOptimization = () => {
  return (
    <section
      className="bg-transparent py-16 px-4 sm:px-6 lg:px-8"
      style={{ marginTop: "-74px" }}
    >
      <section className="relative flex flex-col lg:flex-row justify-between items-center mb-12">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{
              backgroundImage: "url('../../../../processBg.jpg')",
              marginLeft: "-10vw",
              marginRight: "-10vw",
              marginTop: "-15.5vh", // Adjust these values to increase/decrease the top and bottom margins
              marginBottom: "-10vh",
              width: "calc(100% + 14.5vw)",
              height: "calc(100% + 23vh)", // Adjust height to compensate for the added top and bottom margins
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-lg text-black max-w-xl mx-auto">
            Transform your online presence with our innovative social media
            optimization techniques. Harness the power of data and creativity to
            captivate your audience and amplify your brand.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white text-gray-800 rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500 opacity-10"></div>
            <img
              src="https://businessfirstfamily.com/wp-content/uploads/2017/12/hr-metrics-to-track.jpg"
              alt="Analytics"
              className="w-56 h-56 mx-auto mb-4 rounded-full border-4 border-yellow-500 shadow-lg transform hover:scale-110 transition-transform duration-300 hover:rounded-none"
            />
            <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
            <p className="text-black mb-4">
              Dive deep into your social media metrics with our comprehensive
              analytics tools.
            </p>
            <span className="block text-sm text-gray-500">
              Detailed Reports • Real-time Data • Custom Dashboards
            </span>
          </div>
          {/* Feature 2 */}
          <div className="bg-white text-gray-800 rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-500 to-blue-500 opacity-10"></div>
            <img
              src="https://th.bing.com/th/id/OIP.FJUIb68Z-RFmmespDkuJ2AHaFi?rs=1&pid=ImgDetMain"
              alt="Targeted Content"
              className="w-56 h-56 mx-auto mb-4 rounded-full border-4 border-green-500 shadow-lg transform hover:scale-110 transition-transform duration-300 hover:rounded-none"
            />
            <h3 className="text-xl font-semibold mb-2">Targeted Content</h3>
            <p className="text-black mb-4">
              Create and deliver content tailored specifically to your
              audience’s interests.
            </p>
            <span className="block text-sm text-gray-500">
              Audience Segmentation • Personalization • Content Strategy
            </span>
          </div>
          {/* Feature 3 */}
          <div className="bg-white text-gray-800 rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-indigo-500 to-blue-600 opacity-10"></div>
            <img
              src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v211batch10-minty-014-business_2.jpg?w=1200&dpr=1&fit=default&crop=default&auto=format&fm=pjpg&q=75&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=d5f9189ce5135cbabe3bbc534941a709"
              alt="Engagement Techniques"
              className="w-56 h-56 mx-auto mb-4 rounded-full border-4 border-purple-500 shadow-lg transform hover:scale-110 transition-transform duration-300 hover:rounded-none"
            />
            <h3 className="text-xl font-semibold mb-2">
              Engagement Techniques
            </h3>
            <p className="text-black mb-4">
              Employ advanced techniques to boost interactions and build
              stronger relationships.
            </p>
            <span className="block text-sm text-gray-500">
              Interactive Campaigns • Engagement Metrics • Social Listening
            </span>
          </div>
          {/* Feature 4 */}
          <div className="bg-white text-gray-800 rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-indigo-500 to-purple-500 opacity-10"></div>
            <img
              src="https://www.reliablesoft.net/wp-content/uploads/2020/08/content-strategy-guide.jpg"
              alt="Content Strategy"
              className="w-56 h-56 mx-auto mb-4 rounded-full border-4 border-blue-500 shadow-lg transform hover:scale-110 transition-transform duration-300 hover:rounded-none"
            />
            <h3 className="text-xl font-semibold mb-2">Content Strategy</h3>
            <p className="text-black mb-4">
              Develop a comprehensive content strategy to effectively reach and
              engage your audience.
            </p>
            <span className="block text-sm text-gray-500">
              Strategic Planning • Content Calendars • Performance Tracking
            </span>
          </div>
          {/* Feature 5 */}
          <div className="bg-white text-gray-800 rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-300 via-blue-500 to-purple-600 opacity-10"></div>
            <img
              src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-audience-growth-icon-infochart-flat-crowd-vector-png-image_19530200.jpg"
              alt="Audience Growth"
              className="w-56 h-56 mx-auto mb-4 rounded-full border-4 border-teal-500 shadow-lg transform hover:scale-110 transition-transform duration-300 hover:rounded-none"
            />
            <h3 className="text-xl font-semibold mb-2">Audience Growth</h3>
            <p className="text-black mb-4">
              Implement strategies to grow your audience and increase engagement
              on social platforms.
            </p>
            <span className="block text-sm text-gray-500">
              Growth Strategies • Engagement Boosts • Targeted Campaigns
            </span>
          </div>
          {/* Feature 6 */}
          <div className="bg-white text-gray-800 rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-500 to-pink-600 opacity-10"></div>
            <img
              src="https://www.aimtechnologies.co/wp-content/uploads/2023/08/Brand-Visibility.jpg"
              alt="Brand Visibility"
              className="w-56 h-56 mx-auto mb-4 rounded-full border-4 border-orange-500 shadow-lg transform hover:scale-110 transition-transform duration-300 hover:rounded-none"
            />
            <h3 className="text-xl font-semibold mb-2">Brand Visibility</h3>
            <p className="text-black mb-4">
              Enhance your brand's visibility and create a lasting impression
              across social channels.
            </p>
            <span className="block text-sm text-gray-500">
              Visibility Campaigns • Brand Positioning • Cross-platform Presence
            </span>
          </div>
        </div>
      </div>
      </section>
    </section>
  );
};

export default SocialMediaOptimization;
