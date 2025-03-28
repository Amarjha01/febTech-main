import React from "react";
import {
  FaPaintBrush,
  FaEye,
  FaBullseye,
  FaMagic,
  FaFileImage,
} from "react-icons/fa";

// FlyerDesign Component
const FlyerDesign = () => {
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
      className="p-8 bg-gradient-to-r from-black to-[#1136FF] text-white max-w-full mx-auto rounded-lg shadow-2xl mt-8 mb-8"
      style={{ marginTop: "10px" }}
    >
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-lg font-light md:text-xl lg:text-2xl justify-center">
          Our flyer design services provide a unique blend of creativity and
          strategy. Whether you’re looking to promote an event, advertise a
          product, or simply create awareness, our flyers are crafted to capture
          attention and communicate your message effectively. Let us help you
          leave a lasting impression with designs that stand out and speak to
          your audience.
        </p>
      </div>

      {/* Flyer Design Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Feature 1 */}
        <div className="flex items-center">
          <FaPaintBrush className="text-6xl text-yellow-500 mr-6" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Creative Design Concepts
            </h2>
            <p className="text-base">
              Our team of designers brings fresh ideas and unique design
              concepts to each flyer project. We focus on visually appealing
              layouts that align with your brand's identity and message.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-center">
          <FaEye className="text-6xl text-red-500 mr-6" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Eye-Catching Visuals
            </h2>
            <p className="text-base">
              We use high-quality images and vibrant colors to create flyers
              that grab attention. Our designs are crafted to stand out,
              ensuring your message is noticed.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-center">
          <FaBullseye className="text-6xl text-green-500 mr-6" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Targeted Messaging</h2>
            <p className="text-base">
              Every flyer is designed with your target audience in mind. We
              craft messaging that resonates with your intended demographic,
              driving engagement and action.
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex items-center">
          <FaMagic className="text-6xl text-blue-500 mr-6" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Innovative Design Techniques
            </h2>
            <p className="text-base">
              Our flyers incorporate the latest design trends and techniques.
              From modern typography to dynamic layouts, we ensure your flyer is
              both contemporary and effective.
            </p>
          </div>
        </div>
      </div>

      {/* Flyer Samples */}
      <div className="mt-12" style={{ marginTop: "90px" }}>
        <h2 className="text-3xl font-semibold text-center mb-6">
          Flyer Design Samples
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ marginTop: "-15px" }}
        >
          {/* Sample 1 */}
          <div className="relative">
            <img
              src="https://marketplace.canva.com/EAFYf2y7RvE/1/0/300w/canva-blue-futuristic-neon-music-coming-soon-poster-musU-xd6e34.jpg"
              alt="Sample Flyer 1"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
              <h3 className="text-xl font-semibold">Product Launch Flyer</h3>
              <p>
                Promote your latest product with a visually stunning flyer that
                captures the essence of your brand.
              </p>
            </div>
          </div>

          {/* Sample 2 */}
          <div className="relative">
            <img
              src="https://marketplace.canva.com/EAE_X8Jn4RI/1/0/283w/canva-modern-pink-coming-soon-(flyer)-UUSmYHt3td0.jpg"
              alt="Sample Flyer 2"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
              <h3 className="text-xl font-semibold">Event Promotion Flyer</h3>
              <p>
                Attract attendees to your event with a vibrant flyer designed to
                inform and excite.
              </p>
            </div>
          </div>

          {/* Sample 3 */}
          <div className="relative">
            <img
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/coming-soon-free-templates-design-db413f37a03fd1e30edb0c73650c3e02_screen.jpg?ts=1709649081"
              alt="Sample Flyer 3"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
              <h3 className="text-xl font-semibold">
                Service Advertisement Flyer
              </h3>
              <p>
                Highlight your services with a clean and professional flyer that
                communicates your value proposition.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="mt-12" style={{ marginTop: "90px" }}>
        <h2 className="text-3xl font-semibold text-center mb-6">
          Why Choose Our Flyer Design Services?
        </h2>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <FaFileImage className="inline-block text-yellow-500 mr-2" />
            High-Resolution Designs: We deliver print-ready, high-resolution
            flyers that maintain quality across all formats.
          </li>
          <li>
            <FaBullseye className="inline-block text-green-500 mr-2" />
            Customizable Templates: Choose from a variety of customizable
            templates or request a completely bespoke design.
          </li>
          <li>
            <FaMagic className="inline-block text-blue-500 mr-2" />
            Quick Turnaround: Get your flyers designed and ready in record time
            without compromising on quality.
          </li>
          <li>
            <FaEye className="inline-block text-red-500 mr-2" />
            Expert Consultation: Our team works with you to ensure your flyer
            reflects your brand’s message and goals.
          </li>
        </ul>
      </div>
    </div>
    </section>
  );
};

export default FlyerDesign;
