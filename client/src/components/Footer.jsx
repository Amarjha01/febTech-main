import React from "react";
import {
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiPhoneCall,
  FiMail,
  FiNavigation2,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import BotPenguinWidget from "../../GlobalAxios/BotPeguinWidget";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FiFacebook />,
      url: "https://www.facebook.com/febtech.in",
    },
    {
      id: 3,
      icon: <FaWhatsapp />,
      url: "https://wa.me/8868864441?text=Hello%20Febtech",
    },
    {
      id: 4,
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/company/febtech-it-solutions/posts/?feedView=all",
    },
    {
      id: 5,
      icon: <FiInstagram />,
      url: "https://www.instagram.com/febtech.in/",
    },
  ];
  return (
    <>
      <footer
        className="py-5 tracking-wide w-[100%]"
        style={{
          background: `url(footerBg.jpg) no-repeat center center/cover`,
        }}
      >
        <div className="py-14 px-6 sm:px-10">
          <div className="grid  lg:justify-around grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="max-lg:flex w-full flex-col justify-center items-center">
              <NavLink to="/">
                <img src="./logo.png" alt="logo" className="w-44 mb-2" />
              </NavLink>
              <p className="lg:w-3/4 max-lg:text-center text-left text-gray-800 text-md">
                We are passionate about providing innovative IT solutions to
                businesses of all sizes. Our team of experienced professionals
                works tirelessly to create custom solutions tailored to meet the
                unique needs of our clients.
              </p>
              <ul className="flex max-lg:justify-center gap-4 mt-4">
                {socialLinks.map((link, index) => (
                  <li
                    key={index}
                    className="h-[40px] w-[40px] flex justify-center items-center bg-[#5c28ca] text-[#fff] rounded-full hover:bg-[#1133ff]"
                  >
                    <a
                      href={link.url}
                      target="__blank"
                      key={link.id}
                      className="cursor-pointer rounded-lg shadow-sm  duration-300"
                    >
                      <i className="text-lg">{link.icon}</i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-row gap-10 md:gap-16 lg:gap-24 py-8 mx-auto bg-transparent">
              <div className="flex-1">
                <h4 className="text-sm md:text-base lg:text-lg xl:text-lg font-semibold mb-4 text-black whitespace-nowrap">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  <li>
                    <NavLink
                      to="/services"
                      className="text-sm md:text-base lg:text-lg xl:text-lg text-gray-800 hover:text-[#1136ff] whitespace-nowrap"
                    >
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/pricing"
                      className="text-sm md:text-base lg:text-lg xl:text-lg text-gray-800 hover:text-[#1136ff] whitespace-nowrap"
                    >
                      Our Pricing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/product-details"
                      className="text-sm md:text-base lg:text-lg xl:text-lg text-gray-800 hover:text-[#1136ff] whitespace-nowrap"
                    >
                      Product Details
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/portfolio"
                      className="text-sm md:text-base lg:text-lg xl:text-lg text-gray-800 hover:text-[#1136ff] whitespace-nowrap"
                    >
                      Our Portfolio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact-us"
                      className="text-sm md:text-base lg:text-lg xl:text-lg text-gray-800 hover:text-[#1136ff] whitespace-nowrap"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/team"
                      className="text-sm md:text-base lg:text-lg xl:text-lg text-gray-800 hover:text-[#1136ff] whitespace-nowrap"
                    >
                      Team
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="flex-1">
                <h4 className="text-sm md:text-base lg:text-lg xl:text-lg font-semibold mb-4 text-black whitespace-nowrap">
                  Company Info
                </h4>
                <ul className="space-y-2">
                  <li>
                    <NavLink
                      to="/about"
                      className="text-sm md:text-base lg:text-lg xl:text-lg text-gray-800 hover:text-[#1136ff] whitespace-nowrap"
                    >
                      About Company
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact-us"
                      className="text-sm md:text-base lg:text-lg xl:text-lg text-gray-800 hover:text-[#1136ff] whitespace-nowrap"
                    >
                      Our Contact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/clients"
                      className="text-sm md:text-base lg:text-lg xl:text-lg text-gray-800 hover:text-[#1136ff] whitespace-nowrap"
                    >
                      Our Clients
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/faqs"
                      className="text-sm md:text-base lg:text-lg xl:text-lg text-gray-800 hover:text-[#1136ff] whitespace-nowrap"
                    >
                      Faqs
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center mt-[35px]">
              <h4 className="text-lg max-lg:text-center font-semibold mb-8 text-[#000]">
                Supports
              </h4>
              <div className="space-y-4">
                <div className="text-black text-lg flex gap-2">
                  <li className="h-[50px] w-[50px] flex justify-center items-center bg-[#5c28ca] text-[#fff] rounded-full hover:bg-[#1133ff]">
                    <a
                      target="__blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer rounded-lg shadow-sm duration-300"
                    >
                      <i className="text-xl">
                        <FiNavigation2 />
                      </i>
                    </a>
                  </li>
                  <div>
                    <p className="text-lg font-semibold text-[#000]">
                      Location
                    </p>
                    <a
                      href="https://www.google.com/maps/place/FEBTECH+IT+SOLUTIONS+Pvt.+Ltd/@29.8845467,77.8633216,15z/data=!4m6!3m5!1s0x390eb51d58bca643:0x35e3e1db1d8a7707!8m2!3d29.8917664!4d77.8681671!16s%2Fg%2F11ppzl_txm?entry=ttu"
                      target="__blank"
                      rel="noopener noreferrer"
                      className="text-base font-light text-[#000]"
                    >
                      Roorkee, India
                    </a>
                  </div>
                </div>
                <div className="text-black text-lg flex gap-2">
                  <li className="h-[50px] w-[50px] flex justify-center items-center bg-[#5c28ca] text-[#fff] rounded-full hover:bg-[#1133ff]">
                    <a
                      target="__blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer rounded-lg shadow-sm duration-300"
                    >
                      <i className="text-xl">
                        <FiMail />
                      </i>
                    </a>
                  </li>
                  <div>
                    <p className="text-lg font-semibold text-[#000]">
                      Email Us
                    </p>
                    <a
                      href="mailto:rajat@febtech.in"
                      className="text-base font-light text-[#000]"
                    >
                      support@febtech.in
                    </a>
                  </div>
                </div>
                <div className="flex gap-2">
                  <li className="h-[50px] w-[50px] flex justify-center items-center bg-[#5c28ca] text-[#fff] rounded-full hover:bg-[#1133ff]">
                    <a
                      href="tel:+918868864441"
                      target="__blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer rounded-lg shadow-sm duration-300"
                    >
                      <i className="text-xl">
                        <FiPhoneCall />
                      </i>
                    </a>
                  </li>
                  <div>
                    <p className="text-lg font-semibold text-[#000]">Hotline</p>
                    <a
                      href="tel:+918868864441"
                      className="text-base font-light text-[#000]"
                    >
                      +91 8868864441
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sawan's code */}

        <div className="bg-transparent p-6 rounded-lg w-full max-w-full mx-auto my-6">
          <ul className="list-none p-0 m-0 text-sm">
            <marquee behavior="scroll" direction="left" scrollamount="4">
              <li className="mb-3 inline-block mr-4">
                <a
                  href="./serviceform/domain-registration"
                  className="text-black hover:bg-[#1133FF] hover:text-white transition-colors duration-300 block py-2 px-4 rounded"
                >
                  Domain Registration
                </a>
              </li>
              <li className="mb-3 inline-block mr-4">
                <a
                  href="./serviceform/web-design"
                  className="text-black hover:bg-[#1133FF] hover:text-white transition-colors duration-300 block py-2 px-4 rounded"
                >
                  Website Design
                </a>
              </li>
              <li className="mb-3 inline-block mr-4">
                <a
                  href="./serviceform/seo-services"
                  className="text-black hover:bg-[#1133FF] hover:text-white transition-colors duration-300 block py-2 px-4 rounded"
                >
                  SEO Services
                </a>
              </li>
              <li className="mb-3 inline-block mr-4">
                <a
                  href="./serviceform/social-media-optimization"
                  className="text-black hover:bg-[#1133FF] hover:text-white transition-colors duration-300 block py-2 px-4 rounded"
                >
                  Social Media Optimization
                </a>
              </li>
              <li className="mb-3 inline-block mr-4">
                <a
                  href="./serviceform/business-card-design"
                  className="text-black hover:bg-[#1133FF] hover:text-white transition-colors duration-300 block py-2 px-4 rounded"
                >
                  Business Card Design
                </a>
              </li>
              <li className="mb-3 inline-block mr-4">
                <a
                  href="./serviceform/social-media-post-design"
                  className="text-black hover:bg-[#1133FF] hover:text-white transition-colors duration-300 block py-2 px-4 rounded"
                >
                  Social Media Post Design
                </a>
              </li>
              <li className="mb-3 inline-block mr-4">
                <a
                  href="./serviceform/facebook-marketing"
                  className="text-black hover:bg-[#1133FF] hover:text-white transition-colors duration-300 block py-2 px-4 rounded"
                >
                  Facebook Marketing
                </a>
              </li>
              <li className="mb-3 inline-block mr-4">
                <a
                  href="./serviceform/facebook-ads"
                  className="text-black hover:bg-[#1133FF] hover:text-white transition-colors duration-300 block py-2 px-4 rounded"
                >
                  Facebook Ads
                </a>
              </li>
              <li className="mb-3 inline-block mr-4">
                <a
                  href="./services"
                  className="text-black hover:bg-[#1133FF] hover:text-white transition-colors duration-300 block py-2 px-4 rounded"
                >
                  More...
                </a>
              </li>
            </marquee>
          </ul>
        </div>

        <div className="pt-5 pb-3 px-5 border-t-2 flex  justify-between">
          <p className="text-gray-800 max-lg:py-5 max-lg:text-center text-lg">
            © 2024 Feb Tech IT Solutions. All Rights Reserved.
          </p>
          <ul className="text-black max-lg:hidden text-lg flex gap-5">
            <li>About</li>
            <li>Setting & privacy</li>
            <li>Faqs</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
