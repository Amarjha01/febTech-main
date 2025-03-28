import React from "react";
import {
  FaThumbsUp,
  FaComment,
  FaShare,
  FaBookmark,
  FaSmile,
  FaHeart,
  FaStar,
} from "react-icons/fa";

// Post Card Component
const PostCard = ({ userName, timeAgo, text, images, imageHeight }) => {
  return (
    <div className="flex flex-col items-center p-4 max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-5">
      {/* Profile Section */}
      <div className="flex items-center border-b border-gray-200 mb-4 w-full">
        <img
          src="https://th.bing.com/th/id/OIP.hGSCbXlcOjL_9mmzerqAbQHaHa?rs=1&pid=ImgDetMain"
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <p className="font-semibold text-gray-800">{userName}</p>
          <p className="text-gray-600 text-sm">{timeAgo}</p>
        </div>
      </div>

      {/* Post Content */}
      <div className="w-full">
        <p className="text-gray-800 text-base mb-4">{text}</p>
        {images.length === 1 && (
          <img
            src={images[0]}
            alt="Post Image"
            className={`w-full object-cover rounded-lg mb-4 ${imageHeight}`}
          />
        )}
        {images.length === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Post Image ${index + 1}`}
                className={`w-full object-cover rounded-lg ${imageHeight}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Post Actions */}
      <div className="flex items-center justify-between border-t border-gray-200 pt-4 w-full">
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-gray-600 hover:text-blue-500">
            <FaThumbsUp className="mr-1" /> Like
          </button>
          <button className="flex items-center text-gray-600 hover:text-blue-500">
            <FaComment className="mr-1" /> Comment
          </button>
          <button className="flex items-center text-gray-600 hover:text-blue-500">
            <FaShare className="mr-1" /> Share
          </button>
        </div>
        <button className="text-gray-600 hover:text-blue-500">
          <FaBookmark />
        </button>
      </div>
    </div>
  );
};

// SocialMediaFeed Component
const SocialMediaFeed = () => {
  const posts = [
    {
      userName: "Jane Doe",
      timeAgo: "2 hours ago",
      text: "Exploring new hiking trails this weekend! 🌲🚶‍♀️ The weather was perfect for an adventure. Here are some photos from the journey. 📸",
      images: [
        "https://offloadmedia.feverup.com/secretseattle.co/wp-content/uploads/2021/04/29054810/cougar-mountain-seattle-hike-trail.png",
        "https://trailsisters.net/wp-content/uploads/2017/11/andrew-drummond-e1510415572314-1024x683.jpg",
      ],
      imageHeight: "h-48", // Default height
    },
    {
      userName: "John Smith",
      timeAgo: "1 day ago",
      text: "Had a great time at the beach yesterday. The sunset was amazing! 🌅",
      images: [
        "https://th.bing.com/th/id/R.d4cee6463608f82e298ff000b37f818d?rik=nXl3ER1yG4u9oA&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2015%2f09%2f15%2famazing-beach-sunset-landscape.jpg&ehk=UlZJghY5n%2fzN8mIDOqtSj4NSOJnRdJlM5nJlxJ4ch%2fE%3d&risl=&pid=ImgRaw&r=0",
      ], // Larger image
      imageHeight: "h-64", // Increased height
    },
    {
      userName: "Alice Johnson",
      timeAgo: "3 days ago",
      text: "Just finished a new book! 📚 It was an incredible read, highly recommended!",
      images: [
        "https://p0.pikist.com/photos/575/495/read-book-girl-study-learn-sofa-leisure-education-novel.jpg",
      ], // Larger image
      imageHeight: "h-64", // Increased height
    },
  ];

  return (
    <div className="flex flex-col min-h-screen mb-[30px]">
      <div className="flex flex-col lg:flex-row">
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/5 p-4 bg-gray-200 border-b lg:border-r border-gray-300 lg:border-b-0 flex flex-col">
          <p className="text-gray-800 font-semibold mb-4 text-lg">
            Popular Topics
          </p>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <FaSmile className="text-2xl text-yellow-500" />
              <p className="text-gray-600">Happy Vibes</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaHeart className="text-2xl text-red-500" />
              <p className="text-gray-600">Love & Care</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaStar className="text-2xl text-blue-500" />
              <p className="text-gray-600">Top Picks</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/5 p-4">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              userName={post.userName}
              timeAgo={post.timeAgo}
              text={post.text}
              images={post.images}
              imageHeight={post.imageHeight}
            />
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-1/5 p-4 bg-gray-200 border-t lg:border-l border-gray-300 lg:border-t-0 flex flex-col">
          <p className="text-gray-800 font-semibold mb-4 text-lg">
            Recent Comments
          </p>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <FaComment className="text-2xl text-green-500" />
              <p className="text-gray-600">Great post!</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaComment className="text-2xl text-blue-500" />
              <p className="text-gray-600">Loved the images!</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaComment className="text-2xl text-purple-500" />
              <p className="text-gray-600">Very inspiring!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Last Section - About Company */}
      <div className="bg-gray-100 p-6 mt-4">
        <p className="text-black">
          At{" "}
          <span className="text-[#1136FF]">Feb Tech IT Solution Pvt. Ltd.</span>
          , we specialize in providing innovative technology solutions tailored
          to meet your needs. Our team of experts is dedicated to solving your
          most challenging problems and delivering cutting-edge solutions that
          drive success. Whether you require software development, web design,
          or IT consulting, our goal is to ensure that your business achieves
          its full potential. Partner with us for reliable and effective
          solutions that will exceed your expectations.
        </p>
      </div>
    </div>
  );
};

export default SocialMediaFeed;
