import React, { useRef } from "react";
import {
  FaPalette,
  FaFont,
  FaLayerGroup,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaBriefcase,
  FaUserTie,
} from "react-icons/fa";

const BusinessCardComponent = () => {
  const cardRef = useRef(null);
  const centerDivRef = useRef(null);

  const handleMouseMove = (e) => {
    const element = centerDivRef.current || cardRef.current;
    const { width, height, left, top } = element.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    const rotateX = -(y / height) * 20;
    const rotateY = (x / width) * 20;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale(1)`;
  };

  return (
    <section className="relative flex flex-col justify-between items-center mb-12">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{
              backgroundImage: "url('../../../../processBg.jpg')",
              marginLeft: "-10vw",
              marginRight: "-10vw",
              marginTop: "-17vh", // Adjust these values to increase/decrease the top and bottom margins
              marginBottom: "-10vh",
              width: "calc(100% + 12.4vw)",
              height: "calc(100% + 6vh)", // Adjust height to compensate for the added top and bottom margins
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
    <div className="p-4 min-h-screen flex flex-col items-center bg-transparent">
      {/* Business Card Design */}
      <br />
      <br />
      <br />
      <div
        ref={cardRef}
        className="relative w-full max-w-md mx-auto p-4 bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl rounded-lg overflow-hidden mb-12 transform transition-transform duration-700 hover:shadow-3xl"
        style={{ backgroundColor: "transparent" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1136FF] to-indigo-500 opacity-0 hover:opacity-30 transition-opacity duration-700"></div>
        <div
          ref={centerDivRef}
          className="flex flex-col items-center justify-center relative z-10"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="text-lg font-bold text-white text-center">
            Feb Tech IT Solution Pvt. Ltd.
          </div>
          <div className="text-sm font-semibold text-gray-300 text-center">
            Software Engineer
          </div>
          <div className="mt-4 text-gray-200 text-center">
            <p className="text-xl font-semibold">John Doe</p>
            <p className="flex items-center justify-center mt-2">
              <FaEnvelope className="mr-2 text-xl text-[#1136FF]" />{" "}
              john.doe@example.com
            </p>
            <p className="flex items-center justify-center mt-2">
              <FaPhone className="mr-2 text-xl text-[#1136FF]" /> +1 234 567 890
            </p>
            <p className="flex items-center justify-center mt-2">
              <FaGlobe className="mr-2 text-xl text-[#1136FF]" />{" "}
              www.febtechitsolution.com
            </p>
            <p className="flex items-center justify-center mt-2">
              <FaMapMarkerAlt className="mr-2 text-xl text-[#1136FF]" /> 123
              Business Ave, City, State, 12345
            </p>
          </div>
        </div>
      </div>

      {/* Details Section Using Icons */}
      <div className="w-full min-h-screen bg-transparent flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 lg:p-8">
          <div className="flex items-start p-4 bg-white shadow-lg rounded-lg">
            <FaPalette className="text-5xl text-[#1136FF] mr-4" />
            <div>
              <h3 className="text-2xl font-semibold">Color Scheme</h3>
              <p className="text-gray-700 mt-2">
                The card features a dynamic gradient color scheme that
                transitions from dark gray to a vibrant blue, giving it a modern
                and sleek appearance.
              </p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-white shadow-lg rounded-lg">
            <FaFont className="text-5xl text-[#1136FF] mr-4" />
            <div>
              <h3 className="text-2xl font-semibold">Typography</h3>
              <p className="text-gray-700 mt-2">
                Utilizes bold and clear fonts for enhanced readability. The
                combination of modern typography ensures that the card is both
                stylish and functional.
              </p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-white shadow-lg rounded-lg">
            <FaLayerGroup className="text-5xl text-[#1136FF] mr-4" />
            <div>
              <h3 className="text-2xl font-semibold">Layout</h3>
              <p className="text-gray-700 mt-2">
                The layout is thoughtfully designed to be clean and minimal,
                highlighting the key details and ensuring a professional look.
              </p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-white shadow-lg rounded-lg">
            <FaBriefcase className="text-5xl text-[#1136FF] mr-4" />
            <div>
              <h3 className="text-2xl font-semibold">Material</h3>
              <p className="text-gray-700 mt-2">
                Printed on premium quality matte-finish paper, giving the card a
                sophisticated feel and durability.
              </p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-white shadow-lg rounded-lg">
            <FaUserTie className="text-5xl text-[#1136FF] mr-4" />
            <div>
              <h3 className="text-2xl font-semibold">Professionalism</h3>
              <p className="text-gray-700 mt-2">
                Designed with a focus on professionalism, the card reflects the
                high standards of Feb Tech IT Solution Pvt. Ltd.
              </p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-white shadow-lg rounded-lg pt-0">
            <FaPalette className="text-5xl text-[#1136FF] mr-4" />
            <div>
              <h3 className="text-2xl font-semibold">Iconography</h3>
              <p className="text-gray-700 mt-2">
                Features simple yet meaningful icons that convey information
                quickly and effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default BusinessCardComponent;
