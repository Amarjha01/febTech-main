import React from "react";
import {
  FaLock,
  FaCreditCard,
  FaWallet,
  FaChartLine,
  FaShieldAlt,
  FaPlug,
  FaGlobe,
  FaTools,
} from "react-icons/fa";

const PaymentGateway = () => {
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
              height: "calc(100% + 17.5vh)", // Adjust height to compensate for the added top and bottom margins
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
    <div
      className="bg-transparent text-gray-900 py-8 px-4 md:px-8 lg:px-12"
      style={{ marginTop: "-40px",}}
    >
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-12">
        <section className="mb-8">
          <p className="text-black text-sm md:text-base lg:text-lg mb-6 text-justify">
            Our payment gateway solution offers a seamless and secure way for
            your customers to make transactions on your website. Designed with
            flexibility and security in mind, our payment gateway integrates
            smoothly into your site, providing a reliable and user-friendly
            payment experience. Whether you are running a small online store or
            a large e-commerce platform, our gateway supports a wide range of
            payment methods, including credit/debit cards, digital wallets, and
            alternative payment options. The solution ensures that every
            transaction is processed with the highest level of security, giving
            your customers confidence in their purchases. With features such as
            real-time processing, comprehensive fraud prevention, and detailed
            reporting, our payment gateway is designed to meet the diverse needs
            of modern businesses.
          </p>
          <div className="flex justify-center mb-6">
            <img
              src="https://stylemixthemes.com/wp/wp-content/uploads/sites/2/2019/06/599-Converted.png"
              alt="Payment Gateway Overview"
              className="w-full h-auto max-h-[250px] object-cover rounded-lg shadow-md"
            />
          </div>
        </section>

        <section className="mb-8">
          <h2
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#1136FF] mb-4"
            style={{ marginTop: "70px" }}
          >
            Key Features
          </h2>
          <ul className="list-disc list-inside space-y-4">
            <li className="flex items-start">
              <FaLock className="text-[#1136FF] text-xl md:text-2xl mr-3 mt-1" />
              <div>
                <strong>Secure Transactions</strong>
                <ul className="list-disc list-inside pl-6">
                  <li>
                    <strong>Encryption</strong>: Advanced encryption protocols
                    (SSL/TLS) to protect payment information.
                  </li>
                  <li>
                    <strong>PCI-DSS Compliance</strong>: Adherence to Payment
                    Card Industry Data Security Standards (PCI-DSS).
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex items-start">
              <FaCreditCard className="text-[#1136FF] text-xl md:text-2xl mr-3 mt-1" />
              <div>
                <strong>Multiple Payment Methods</strong>
                <ul className="list-disc list-inside pl-6">
                  <li>
                    Credit/Debit Cards: Visa, MasterCard, American Express,
                    Discover.
                  </li>
                  <li>Digital Wallets: PayPal, Apple Pay, Google Pay.</li>
                  <li>
                    Alternative Payments: Cryptocurrencies, bank transfers.
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex items-start">
              <FaWallet className="text-[#1136FF] text-xl md:text-2xl mr-3 mt-1" />
              <div>
                <strong>User-Friendly Interface</strong>
                <ul className="list-disc list-inside pl-6">
                  <li>Responsive Design: Smooth experience on all devices.</li>
                  <li>
                    Customizable Forms: Match payment forms to your site's
                    branding.
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex items-start">
              <FaChartLine className="text-[#1136FF] text-xl md:text-2xl mr-3 mt-1" />
              <div>
                <strong>Transaction Management</strong>
                <ul className="list-disc list-inside pl-6">
                  <li>
                    Real-Time Processing: Immediate feedback on transactions.
                  </li>
                  <li>
                    Dashboard Access: Manage transactions, generate reports,
                    track performance.
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex items-start">
              <FaShieldAlt className="text-[#1136FF] text-xl md:text-2xl mr-3 mt-1" />
              <div>
                <strong>Fraud Prevention</strong>
                <ul className="list-disc list-inside pl-6">
                  <li>
                    Advanced Security Features: Address verification (AVS), card
                    verification value (CVV) checks.
                  </li>
                  <li>
                    Customizable Filters: Set up fraud prevention filters.
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex items-start">
              <FaPlug className="text-[#1136FF] text-xl md:text-2xl mr-3 mt-1" />
              <div>
                <strong>Integration and Support</strong>
                <ul className="list-disc list-inside pl-6">
                  <li>
                    Easy Integration: Compatible with e-commerce platforms and
                    custom solutions.
                  </li>
                  <li>
                    Technical Support: Dedicated support for integration and
                    maintenance.
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex items-start">
              <FaTools className="text-[#1136FF] text-xl md:text-2xl mr-3 mt-1" />
              <div>
                <strong>Reporting and Analytics</strong>
                <ul className="list-disc list-inside pl-6">
                  <li>
                    Detailed Reports: View transaction history and sales trends.
                  </li>
                  <li>
                    Analytics Tools: Insights into customer behavior and payment
                    trends.
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex items-start">
              <FaGlobe className="text-[#1136FF] text-xl md:text-2xl mr-3 mt-1" />
              <div>
                <strong>Global Reach</strong>
                <ul className="list-disc list-inside pl-6">
                  <li>
                    Multi-Currency Support: Accept payments in various
                    currencies.
                  </li>
                  <li>
                    Localized Payment Options: Popular payment methods for
                    different regions.
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="flex justify-center mt-6">
            <img
              src="https://blog.2checkout.com/wp-content/uploads/2020/07/How-Online-Payment-Gateways-Work-and-How-to-Choose-the-Best-for-Your-Business.png"
              alt="Key Features"
              className="w-full h-auto max-h-[250px] object-cover rounded-lg shadow-md"
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#1136FF] mb-4">
            Example Integration
          </h2>
          <p className="text-black text-sm md:text-base lg:text-lg mb-6 text-justify">
            Here's a brief example of how the payment gateway can be integrated
            into a website:
          </p>
          <ol className="list-decimal list-inside space-y-4 pl-6">
            <li>
              <strong>Client Website Setup</strong>: Integration into your
              website with alignment to your design and functionality.
            </li>
            <li>
              <strong>Payment Form Customization</strong>: Customize forms to
              match your branding, including color schemes and logos.
            </li>
            <li>
              <strong>Testing and Launch</strong>: Thorough testing to ensure
              proper functionality before going live.
            </li>
            <li>
              <strong>Ongoing Support</strong>: Dedicated support for issues and
              updates after launch.
            </li>
          </ol>
          <div className="flex justify-center mt-6">
            <img
              src="https://static.vecteezy.com/system/resources/previews/017/603/636/non_2x/integration-data-system-system-integration-technology-concept-industrial-and-smart-technology-business-and-automation-solutions-wireframe-hand-touching-digital-interface-illustration-vector.jpg"
              alt="Example Integration"
              className="w-full h-auto max-h-[250px] object-cover rounded-lg shadow-md"
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#1136FF] mb-4">
            Our Payment Gateway
          </h2>
          <p className="text-black text-sm md:text-base lg:text-lg mb-6 text-justify">
            Our payment gateway is designed to offer a comprehensive and
            reliable solution for processing transactions on your website. It
            combines cutting-edge technology with a user-centric approach to
            ensure a smooth payment experience. With our gateway, you gain
            access to a secure platform that supports multiple payment methods,
            including credit cards, digital wallets, and alternative payment
            options. The system is equipped with advanced fraud prevention
            measures and real-time processing capabilities, making it an ideal
            choice for businesses of all sizes.
          </p>
          <div className="flex justify-center mt-6">
            <img
              src="https://www.paycron.com/wp-content/uploads/2020/03/Payment-Gateway-APIs.jpg"
              alt="Our Payment Gateway"
              className="w-full h-auto max-h-[250px] object-cover rounded-lg shadow-md"
            />
          </div>
        </section>
      </div>
    </div>
    </section>
  );
};

export default PaymentGateway;
