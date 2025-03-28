import React from "react";
import { FaSearch, FaCogs, FaLink, FaChartLine } from "react-icons/fa";

const SeoServices = () => {
  return (
    <section className="relative flex flex-col lg:flex-row justify-between items-center mb-12">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{
              backgroundImage: "url('../../../../processBg.jpg')",
              marginLeft: "-10vw",
              marginRight: "-10vw",
              marginTop: "-16.5vh", // Adjust these values to increase/decrease the top and bottom margins
              marginBottom: "-10vh",
              width: "calc(100% + 12.4vw)",
              height: "calc(100% + 17vh)", // Adjust height to compensate for the added top and bottom margins
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
    <div className="bg-transparent px-4 py-8" style={{ marginTop: "-40px" }}>
      {/* Section 1: Introduction */}
      <section className="mb-8">
        <p className="text-sm md:text-base lg:text-lg text-black text-justify leading-relaxed">
          Our SEO services are meticulously designed to enhance your website's
          visibility, attract more organic traffic, and ultimately drive more
          leads to your business. We employ cutting-edge techniques in search
          engine optimization to ensure your site ranks higher on search engine
          results pages (SERPs). Our comprehensive approach includes everything
          from on-page optimization to strategic link building, all aimed at
          helping you outperform your competitors and achieve sustainable online
          success.
        </p>
      </section>

      {/* Section 2: Key Features */}
      <section className="mb-8">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#1136FF] mb-4">
          Our Key SEO Features
        </h3>
        <ul className="list-disc list-inside text-black text-sm md:text-base lg:text-lg">
          <li className="flex items-start mb-3">
            <FaSearch className="w-5 h-5 md:w-6 md:h-6 mr-3 text-[#1136FF]" />
            <span className="text-justify">
              In-depth Keyword Research: We identify the most relevant keywords
              that drive traffic and conversions for your business.
            </span>
          </li>
          <li className="flex items-start mb-3">
            <FaCogs className="w-5 h-5 md:w-6 md:h-6 mr-3 text-[#1136FF]" />
            <span className="text-justify">
              On-Page Optimization: We optimize your website’s content, meta
              tags, and structure to align with search engine algorithms.
            </span>
          </li>
          <li className="flex items-start mb-3">
            <FaLink className="w-5 h-5 md:w-6 md:h-6 mr-3 text-[#1136FF]" />
            <span className="text-justify">
              Quality Link Building: We build high-quality backlinks that
              improve your website’s authority and rankings.
            </span>
          </li>
          <li className="flex items-start mb-3">
            <FaChartLine className="w-5 h-5 md:w-6 md:h-6 mr-3 text-[#1136FF]" />
            <span className="text-justify">
              Performance Tracking: We provide regular reports to monitor your
              website's SEO performance and adjust strategies as needed.
            </span>
          </li>
        </ul>
      </section>

      {/* Section 3: Visual Representation */}
      <section className="mb-8">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#1136FF] mb-4">
          How Our SEO Services Work
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://filmdaily.co/wp-content/uploads/2021/04/seo-lede.jpg"
              alt="SEO Process"
              className="w-full h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-lg"
            />
            <p className="text-sm md:text-base lg:text-lg text-black text-justify mt-4">
              Our SEO process begins with understanding your business goals and
              audience. We then develop a comprehensive SEO strategy, focusing
              on on-page and off-page optimization, content creation, and
              technical audits. Our aim is to enhance your site's visibility and
              performance, aligning SEO with your business objectives for
              long-term success.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://img.freepik.com/premium-photo/seo-search-engine-optimization-business-concept_31965-4355.jpg?w=2000"
              alt="SEO Success"
              className="w-full h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-lg"
            />
            <p className="text-sm md:text-base lg:text-lg text-black text-justify mt-4">
              Achieving SEO success involves more than just reaching top
              rankings. It requires a commitment to driving qualified traffic
              and improving user engagement. Our services focus on sustainable
              growth and measurable results. By analyzing data and refining our
              strategies, we aim to help your business thrive online, ensuring
              that your digital presence grows steadily and effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Conclusion */}
      <section>
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#1136FF] mb-4">
          Why Choose Our SEO Services?
        </h3>
        <p className="text-sm md:text-base lg:text-lg text-black text-justify leading-relaxed">
          Choosing our SEO services means partnering with a team of dedicated
          experts committed to your online success. We understand that every
          business has unique needs and goals, which is why we customize our
          strategies to fit your specific requirements. Our transparent and
          results-driven approach ensures that you are always informed about our
          progress and the impact of our efforts. Let us help you reach new
          heights in the digital world with our comprehensive SEO solutions.
        </p>
      </section>
    </div>
    </section>
  );
};

export default SeoServices;
