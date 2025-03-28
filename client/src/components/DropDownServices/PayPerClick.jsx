import React from "react";
import {
  FaSearch,
  FaBullhorn,
  FaChartLine,
  FaTachometerAlt,
} from "react-icons/fa";

const PayPerClick = () => {
  return (
    <div className="bg-transparent text-black mb-8 mt-8">
      <section className="relative flex flex-col lg:flex-row justify-between items-center mb-12">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('../../../../processBg.jpg')",
            marginLeft: "-10vw",
            marginRight: "-10vw",
            marginTop: "-21vh", // Adjust these values to increase/decrease the top and bottom margins
            marginBottom: "-10vh",
            width: "calc(100% + 12.4vw)",
            height: "calc(100% + 57vh)", // Adjust height to compensate for the added top and bottom margins
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <header className="text-center py-12 bg-[#1136FF] text-white">
          <p className="text-lg md:text-xl mt-4 text-justify px-5">
            Boosting your online presence with targeted ads is crucial for
            reaching the right audience and maximizing your marketing efforts.
            Our Pay Per Click (PPC) advertising services help you achieve this
            by strategically placing your ads where they will be seen by
            potential customers who are actively searching for products or
            services similar to what you offer. With tailored ad campaigns and
            precise targeting, we ensure that your marketing budget is
            effectively used to drive high-quality traffic to your website,
            increase conversions, and enhance your overall online visibility.
          </p>
        </header>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <p className="text-base md:text-lg mb-6">
            Pay Per Click (PPC) is a strategic online advertising model where
            advertisers only pay when their ad is clicked. This cost-effective
            method ensures that your budget is spent only on actual engagement.
            With PPC, you can target specific keywords and reach users actively
            searching for products or services similar to what you offer. This
            precision in targeting allows you to drive relevant traffic to your
            website quickly and effectively, improving your chances of
            conversions and achieving a higher return on investment. PPC
            advertising provides measurable results, enabling you to adjust your
            campaigns based on performance metrics to optimize your marketing
            efforts.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1136FF]">
            Benefits of PPC Advertising
          </h2>
          <div className="space-y-8 md:space-y-6">
            <div className="flex items-start space-x-4">
              <FaSearch className="text-[#1136FF] text-3xl md:text-4xl" />
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                  Immediate Results
                </h3>
                <p className="text-base md:text-lg">
                  One of the key advantages of PPC advertising is the speed at
                  which you can see results. As soon as your campaign is live,
                  your ads can start appearing in search results and other
                  platforms, driving immediate traffic to your site and
                  generating potential leads quickly.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaBullhorn className="text-[#1136FF] text-3xl md:text-4xl" />
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                  Highly Targeted
                </h3>
                <p className="text-base md:text-lg">
                  PPC allows you to target specific audiences based on various
                  criteria such as location, demographics, and interests. This
                  precise targeting ensures that your ads are shown to users who
                  are most likely to be interested in your products or services,
                  enhancing the effectiveness of your campaign.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaChartLine className="text-[#1136FF] text-3xl md:text-4xl" />
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                  Cost Control
                </h3>
                <p className="text-base md:text-lg">
                  With PPC, you have full control over your advertising budget.
                  You can set daily or monthly spending limits and adjust bids
                  based on performance. This flexibility helps in managing costs
                  effectively and ensures you only pay for actual clicks on your
                  ads.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaTachometerAlt className="text-[#1136FF] text-3xl md:text-4xl" />
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                  Measurable ROI
                </h3>
                <p className="text-base md:text-lg">
                  PPC provides detailed performance metrics, allowing you to
                  track and analyze the effectiveness of your ads. You can
                  measure key indicators such as click-through rates, conversion
                  rates, and overall ROI. This data-driven approach helps in
                  optimizing your campaigns for better results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="relative flex flex-col lg:flex-row justify-between items-center mb-12 mt-20">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('../../../../processBg.jpg')",
            marginLeft: "-10vw",
            marginRight: "-10vw",
            marginTop: "-5vh", // Adjust these values to increase/decrease the top and bottom margins
            marginBottom: "-10vh",
            width: "calc(100% + 12.4vw)",
            height: "calc(100% + 58vh)", // Adjust height to compensate for the added top and bottom margins
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1136FF]">
            Effective PPC Strategies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Keyword Research
              </h3>
              <p className="text-base md:text-lg mb-4">
                Successful PPC campaigns start with thorough keyword research.
                Identifying high-performing keywords that are relevant to your
                business helps in targeting the right audience. Use keyword
                research tools to discover terms with high search volume and low
                competition to maximize your ad’s effectiveness.
              </p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Ad Copy Optimization
              </h3>
              <p className="text-base md:text-lg mb-4">
                Crafting compelling ad copy is essential for capturing user
                attention and encouraging clicks. Ensure your ad copy is
                relevant to the keywords and includes a clear call-to-action.
                Test different ad variations to determine which performs best
                and continuously optimize for better results.
              </p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Landing Page Experience
              </h3>
              <p className="text-base md:text-lg mb-4">
                The quality of your landing page significantly impacts PPC
                performance. Ensure your landing pages are relevant to your ad
                copy, user-friendly, and optimized for conversions. A
                well-designed landing page with a clear call-to-action can
                enhance user experience and increase the likelihood of achieving
                your campaign goals.
              </p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Continuous Monitoring
              </h3>
              <p className="text-base md:text-lg mb-4">
                Regular monitoring and analysis of your PPC campaigns are
                crucial for ongoing success. Track key metrics such as
                click-through rates, conversion rates, and cost per acquisition.
                Use this data to make informed adjustments to your campaigns and
                optimize performance over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-8 bg-[#1136FF] text-white text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Boost Your Business with PPC?
        </h2>
        <p className="text-base md:text-lg mb-6 text-justify">
          Contact us today to explore how our expert PPC management services can
          help you achieve your marketing objectives. Our team of specialists
          will work closely with you to create a customized PPC strategy that
          aligns with your business goals. By leveraging advanced targeting
          techniques and optimizing your campaigns, we aim to drive high-quality
          traffic to your website, increase conversions, and maximize your
          return on investment. Let's partner together to take your online
          presence to the next level.
        </p>
      </section>
    </div>
  );
};

export default PayPerClick;
