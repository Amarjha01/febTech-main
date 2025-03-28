import React from "react";
import {
  FaBrush,
  FaShapes,
  FaCreativeCommons,
  FaStar,
  FaSyncAlt,
} from "react-icons/fa";

const ProductCatalogueDesign = () => {
  // Array of random colors for the icons
  const iconColors = [
    "#FF5733", // Red-Orange
    "#33FF57", // Green
    "#3357FF", // Blue
    "#FF33A1", // Pink
    "#FFC300", // Yellow
  ];

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
      className="p-10 text-white max-w-full mx-auto rounded-lg shadow-2xl mt-8 mb-8"
      style={{
        background: "linear-gradient(135deg, #1136FF, black)",
        marginTop: "10px",
      }}
    >
      {/* Header Section */}
      <div className="text-center mb-12" style={{ marginTop: "60px" }}>
        <p className="text-lg font-light md:text-xl lg:text-2xl">
          Step away from the ordinary with a product catalogue that breaks the
          mold. Our unique design approach fuses bold aesthetics, creative
          layouts, and innovative patterns to craft a catalogue that truly
          stands out. Elevate your brand with a design that’s as unique as your
          products.
        </p>
      </div>

      {/* Unique Design Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center">
          <FaBrush className="text-6xl mb-4" style={{ color: iconColors[0] }} />
          <h2 className="text-2xl font-semibold mb-2">Asymmetrical Layouts</h2>
          <p className="text-base">
            Break away from conventional symmetry with our avant-garde layouts,
            designed to catch the eye and engage the viewer in unexpected ways.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center">
          <FaShapes
            className="text-6xl mb-4"
            style={{ color: iconColors[1] }}
          />
          <h2 className="text-2xl font-semibold mb-2">Innovative Patterns</h2>
          <p className="text-base">
            We incorporate bold and innovative patterns that add a unique flair
            to your catalogue, ensuring it’s memorable and impactful.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center">
          <FaCreativeCommons
            className="text-6xl mb-4"
            style={{ color: iconColors[2] }}
          />
          <h2 className="text-2xl font-semibold mb-2">Bold Typography</h2>
          <p className="text-base">
            Make a statement with typography that’s as bold and unique as your
            brand. Our designs feature striking fonts that draw attention to
            your content.
          </p>
        </div>
      </div>

      {/* Catalogue Highlights Section */}
      <div className="mt-12" style={{ marginTop: "90px" }}>
        <h2 className="text-3xl font-semibold text-center mb-6">
          Catalogue Highlights
        </h2>
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-8"
          style={{ marginTop: "50px" }}
        >
          {/* Highlight 1 */}
          <div className="relative group flex-shrink-0">
            <img
              src="https://s3u.tmimgcdn.com/800x0/u78196262/f16b1762d2edaa24d3cc1095dea360de.jpg"
              alt="Organic Design"
              className="w-80 h-80 object-cover rounded-full shadow-lg border-4 border-white"
            />
            <div className="absolute bottom-4 left-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-transform transform group-hover:translate-y-full group-hover:opacity-0">
              <h3 className="text-xl font-semibold">Organic Design</h3>
              <p>
                Featuring fluid, natural shapes inspired by nature, our organic
                design brings a soothing and harmonious feel to your catalogue.
              </p>
            </div>
          </div>

          {/* Highlight 2 */}
          <div className="relative group flex-shrink-0">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1845fe89045081.5de8adec60610.jpg"
              alt="Minimalist Elegance"
              className="w-80 h-80 object-cover rounded-lg shadow-lg transform rotate-6"
            />
            <div className="absolute bottom-4 left-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-transform transform group-hover:translate-y-full group-hover:opacity-0">
              <h3 className="text-xl font-semibold">Minimalist Elegance</h3>
              <p>
                Clean lines, simple shapes, and plenty of white space define our
                minimalist approach, bringing a modern and sophisticated look.
              </p>
            </div>
          </div>

          {/* Highlight 3 */}
          <div className="relative group flex-shrink-0">
            <img
              src="https://s3u.tmimgcdn.com/800x0/u78196262/118f7fa4026c94bada3599ebc8b48bf1.jpg"
              alt="Vintage Charm"
              className="w-80 h-80 object-cover rounded-lg shadow-lg filter grayscale"
            />
            <div className="absolute bottom-4 left-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-transform transform group-hover:translate-y-full group-hover:opacity-0">
              <h3 className="text-xl font-semibold">Vintage Charm</h3>
              <p>
                With a touch of nostalgia, our vintage designs incorporate
                classic elements and textures for a timeless, charming appeal.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Unique Features Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Why Choose Our Unique Product Catalogue Design?
        </h2>
        <ul
          className="list-disc list-inside space-y-4"
          style={{ marginTop: "80px" }}
        >
          <li>
            <FaStar
              className="inline-block mr-2"
              style={{ color: iconColors[3] }}
            />
            Stand Out: Our unique designs ensure that your catalogue stands out
            in a sea of competitors, making a lasting impression on your
            audience.
          </li>
          <li>
            <FaSyncAlt
              className="inline-block mr-2"
              style={{ color: iconColors[4] }}
            />
            Dynamic Visuals: We create visuals that are not just eye-catching
            but also dynamic, adding a sense of motion and life to your
            catalogue.
          </li>
          <li>
            <FaBrush
              className="inline-block mr-2"
              style={{ color: iconColors[0] }}
            />
            Artistic Approach: Our design philosophy combines artistic elements
            with strategic design, resulting in a catalogue that is both
            beautiful and functional.
          </li>
        </ul>
      </div>
    </div>
    </section>
  );
};

export default ProductCatalogueDesign;
