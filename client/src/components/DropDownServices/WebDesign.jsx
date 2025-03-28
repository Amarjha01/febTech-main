import React from "react";

const WebDesignService = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8" style={{ marginTop: "-40px" }}>
      <section className="relative mb-12">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('../../../../processBg.jpg')",
            marginLeft: "-10vw",
            marginRight: "-10vw",
            marginTop: "-15.5vh", // Adjust these values to increase/decrease the top and bottom margins
            marginBottom: "-10vh",
            width: "calc(100% + 19.4vw)",
            height: "calc(100% + 185vh)", // Adjust height to compensate for the added top and bottom margins
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <p className="text-lg sm:text-base md:text-lg text-black mb-6 text-justify">
          At{" "}
          <span className="text-[#1136FF]">Feb Tech IT Solution Pvt. Ltd</span>,
          we blend creativity and technology to craft visually stunning websites
          that capture the essence of your brand and engage your audience. Our
          team of skilled professionals specializes in creating responsive and
          user-friendly designs tailored to your specific needs. We understand
          the importance of a well-designed website in today’s digital
          landscape, where first impressions matter. With our expertise, we
          ensure that your site not only looks great but also functions
          seamlessly across all devices, providing an exceptional user
          experience.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <img
            src="https://miro.medium.com/v2/resize:fit:3200/1*SNUFXbMYSOArQbA-Iwi-jA.png"
            alt="Web Design Example 1"
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <img
            src="https://i.pinimg.com/originals/11/77/11/1177117bc7a379b542f5887142f24c99.png"
            alt="Web Design Example 2"
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <img
            src="https://cdn.dribbble.com/userupload/2836756/file/original-c00eadced2acc90f0084f0d4625dc4c8.jpg?resize=752x"
            alt="Web Design Example 3"
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 col-span-full sm:col-span-2 lg:col-span-3">
          <img
            src="https://images.techhive.com/images/article/2014/12/web-design-thinkstock-100534929-large.jpg?auto=webp&quality=85,70"
            alt="Web Design Example 4"
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <img
            src="https://cdn.dribbble.com/userupload/3638580/file/original-8768421a43b66013eeb0c7d00846bf75.jpg?compress=1&resize=800x600&vertical=top"
            alt="Web Design Example 1"
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <img
            src="https://www.uidownload.com/files/425/541/246/personal-portfolio-website-v1discover-the-world%E2%80%99s-top-designers-creatives.png"
            alt="Web Design Example 2"
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <img
            src="https://cdn.dribbble.com/users/590661/screenshots/3757871/dribbble.jpg "
            alt="Web Design Example 3"
            className="w-full h-64 object-cover"
          />
        </div>
      </section>

      <section className="relative mb-12">
        <h2 className="text-3xl sm:text-2xl md:text-3xl font-semibold text-[#1136FF] mb-6">
          Why Choose Us?
        </h2>
        <p className="text-lg sm:text-base md:text-lg text-black mb-4 text-justify">
          Our approach to web design is meticulously crafted to align with your
          unique business goals and objectives. We focus on delivering custom
          solutions that stand out in the crowded digital marketplace. By
          combining innovative design techniques with a deep understanding of
          user behavior, we create websites that are not only visually appealing
          but also highly functional. Our designs prioritize user experience,
          ensuring that visitors have a smooth and engaging interaction with
          your site. This results in higher engagement, better user
          satisfaction, and ultimately, increased success for your business.
        </p>
        <p className="text-lg sm:text-base md:text-lg text-black text-justify">
          When you choose our services, you’re not just getting a website;
          you’re investing in a comprehensive solution that will enhance your
          online presence and drive growth. We are committed to providing
          exceptional value through personalized service and high-quality
          design. Contact us today to discuss your project and discover how we
          can help you achieve your digital goals with a website that truly
          represents your brand and engages your audience effectively.
        </p>
      </section>
    </div>
  );
};

export default WebDesignService;
