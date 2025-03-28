import React from "react";
import {
  FaPencilAlt,
  FaFont,
  FaSitemap,
  FaClipboardCheck,
  FaFileContract,
} from "react-icons/fa";

// LetterheadDesign Component
const LetterheadDesign = () => {
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
              height: "calc(100% + 18vh)", // Adjust height to compensate for the added top and bottom margins
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
    <div
      className="p-8 bg-gradient-to-r from-[#1136FF] to-black text-white max-w-full mx-auto rounded-lg shadow-2xl mt-8 mb-8"
      style={{ marginTop: "10px" }}
    >
      {/* Header Section */}
      <div className="text-center mb-12" style={{ marginTop: "60px" }}>
        <p className="text-lg font-light md:text-xl lg:text-2xl justify-center">
          Elevate your business communications with our professional letterhead
          design services. We create letterheads that not only reflect your
          brand’s identity but also add a touch of elegance to your
          correspondence. Let us help you make a lasting impression with
          letterhead designs that convey professionalism and attention to
          detail.
        </p>
      </div>

      {/* Letterhead Design Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Feature 1 */}
        <div className="flex items-center">
          <FaPencilAlt className="text-6xl text-yellow-500 mr-6" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Custom Branding Elements
            </h2>
            <p className="text-base">
              Our designs incorporate your brand’s unique elements, such as
              logos, color schemes, and fonts, ensuring consistency across all
              business communications.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-center">
          <FaFont className="text-6xl text-red-500 mr-6" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Modern Typography</h2>
            <p className="text-base">
              We use contemporary fonts and typography that complement your
              brand’s image, enhancing readability and visual appeal.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-center">
          <FaSitemap className="text-6xl text-green-500 mr-6" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Strategic Layout</h2>
            <p className="text-base">
              Our letterhead designs feature strategic layouts that balance text
              and whitespace, creating a clean and professional look.
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex items-center">
          <FaClipboardCheck className="text-6xl text-blue-500 mr-6" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              High-Quality Materials
            </h2>
            <p className="text-base">
              We ensure that your letterhead design is optimized for print on
              premium paper, ensuring a high-quality finish that impresses
              recipients.
            </p>
          </div>
        </div>
      </div>

      {/* Letterhead Samples */}
      <div className="mt-12" style={{ marginTop: "130px" }}>
        <h2 className="text-3xl font-semibold text-center mb-6">
          Letterhead Design Samples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sample 1 */}
          <div className="relative">
            <img
              src="https://i1.wp.com/graphicyard.com/wp-content/uploads/2019/04/Branding-Creative-Corporate-Letterhead-Design-Template-4.jpg?fit=3000%2C3000&ssl=1"
              alt="Sample Letterhead 1"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
              <h3 className="text-xl font-semibold">Corporate Letterhead</h3>
              <p>
                A sleek and modern letterhead design perfect for corporate
                communications.
              </p>
            </div>
          </div>

          {/* Sample 2 */}
          <div className="relative">
            <img
              src="https://www.creativefabrica.com/wp-content/uploads/2022/08/17/Corporate-Agency-Letterhead-Template-Graphics-36424393-1.jpg"
              alt="Sample Letterhead 2"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
              <h3 className="text-xl font-semibold">
                Creative Agency Letterhead
              </h3>
              <p>
                An innovative design that reflects the creativity and dynamism
                of your agency.
              </p>
            </div>
          </div>

          {/* Sample 3 */}
          <div className="relative">
            <img
              src="https://graphicsfamily.com/wp-content/uploads/edd/2022/01/Professional-business-letterhead-template-design-999x999.jpg"
              alt="Sample Letterhead 3"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
              <h3 className="text-xl font-semibold">
                Professional Services Letterhead
              </h3>
              <p>
                A clean and professional design ideal for legal, financial, and
                consulting services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="mt-12" style={{ marginTop: "170px" }}>
        <h2 className="text-3xl font-semibold text-center mb-6">
          Why Choose Our Letterhead Design Services?
        </h2>
        <ul
          className="list-disc list-inside space-y-4"
          style={{ marginTop: "70px" }}
        >
          <li>
            <FaFileContract className="inline-block text-yellow-500 mr-2" />
            Professional Appearance: Our designs enhance the professional
            appearance of your business documents.
          </li>
          <li>
            <FaPencilAlt className="inline-block text-green-500 mr-2" />
            Customization: We tailor each design to match your brand’s unique
            identity and preferences.
          </li>
          <li>
            <FaSitemap className="inline-block text-blue-500 mr-2" />
            Print-Ready: We deliver designs that are ready for print, ensuring
            seamless production.
          </li>
          <li>
            <FaClipboardCheck className="inline-block text-red-500 mr-2" />
            Timely Delivery: Our team is committed to delivering high-quality
            designs on time, every time.
          </li>
        </ul>
      </div>
    </div>
    </section>
  );
};

export default LetterheadDesign;
