import React, { useState } from "react";
import NavItem from "./NavBar/NavItem";
import MenuButton from "./NavBar/MenuButton";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const handleOpen = () => setIsMenuOpen(true);
  const handleClose = () => setIsMenuOpen(false);

  return (
    <header className="border-b border-gray-700 w-[100%] tracking-wide  z-50">
      <nav className="flex items-center justify-around min-h-[30px] px-4">
        <NavLink
          to="/"
          className={`${isMenuOpen ? "hidden" : "block"} w-[10%]`}
        >
          <img src="./logo.png" alt="logo" className="max-w-[80px]" />
        </NavLink>
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 lg:hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
          onClick={handleClose}
        ></div>
        <div
          className={`fixed top-0 left-0 w-3/4 h-full bg-white z-50 p-6 transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:static lg:translate-x-0 lg:flex lg:items-center lg:w-auto lg:bg-transparent lg:p-0`}
        >
          <button onClick={handleClose} className="lg:hidden mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-2 space-y-4 lg:space-y-0">
            <NavItem to="/" label="Home" handleClose={handleClose} />
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <NavItem
                to="/services"
                label="Services"
                handleClose={handleClose}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3A1 1 0 0110 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
              {isServicesDropdownOpen && (
                <div className="absolute hidden lg:flex gap-5 top-9 left-[-100px] w-[900px] bg-white shadow-lg rounded mt-2 p-4 z-50">
                  <div>
                    <h6 className="text-base text-[#007bff] font-bold">
                      Web Development
                    </h6>
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li>
                        <NavLink
                          to="/serviceform/domain-registration"
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Domain Registration
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/serviceform/web-design"
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Website Design
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/web-development"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Website Development
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/software-development"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Software Development
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/e-commerce-website"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          E-commerce Website
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/payment-gateway"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Payment Gateway
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/web-hosting"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Web Hosting
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/professional-emails"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Professional Emails
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/mobile-application"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Mobile Application
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-base text-[#007bff] font-bold">
                      Digital Marketing
                    </h6>
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/seo-services"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          SEO Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/social-media-optimization"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Social Media Optimization
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/pay-per-click"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Pay Per Click
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/social-media-marketing"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Social Media Marketing
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/email-marketing"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Email Marketing
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/whatsapp-marketing"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Whatsapp Marketing
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/sms-marketing"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          SMS Marketing
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-base text-[#007bff] font-bold">
                      Graphic Design
                    </h6>
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/business-card-design"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Business Card Design
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/social-media-post-design"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Social Media Post Design
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/pamphlet-design"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Pamphlet Design
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/brochure-design"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Brochure Design
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/social-media-ads-design"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Social Media Ads Design
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/flyer-design"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Flyer Design
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/letter-head-design"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Letter Head Design
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/product-catalogue-design"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Product Catalogue Design
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className=" flex flex-col">
                    <h6 className="text-base text-[#007bff] font-bold">
                      Social Media Marketing
                    </h6>
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/facebook-marketing"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Facebook Marketing
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/facebook-ads"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Facebook Ads
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/whtsapp-ads"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          WhatsApp Ads
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/instagram-ads"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Instagram Ads
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/google-ads"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Google Ads
                        </NavLink>
                      </li>
                    </ul>
                    <h6 className="text-base text-[#007bff] font-bold mt-2">
                      Legal Services
                    </h6>
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/domestic-trademark"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Domestic Trademark
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                          }}
                          to="/serviceform/international-trademark"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          International Trademark
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div
              className="relative group"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <NavItem
                to="/about"
                label="About"
                handleClose={handleClose}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3A1 1 0 0110 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
              {isAboutDropdownOpen && (
                <div className="absolute top-9 left-0 bg-white shadow-lg rounded mt-2 p-2 z-50">
                  <ul className="space-y-2">
                    <li>
                      <NavLink
                        to="/gallery"
                        onClick={() => setIsAboutDropdownOpen(false)}
                        className="hover:text-[#007bff] text-gray-500 font-bold text-sm block w-20 h-15 mx-auto flex items-center justify-center"
                      >
                        Gallery
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <NavItem to="/client" label="Clients" handleClose={handleClose} />
            <NavItem
              to="/certificate"
              label="Certificate"
              handleClose={handleClose}
            />
            <NavItem to="/careers" label="Careers" handleClose={handleClose} />
            <NavItem
              to="/contactUs"
              label="Contact"
              handleClose={handleClose}
            />
            <NavItem to="/project" label="Project" handleClose={handleClose} />
          </ul>
        </div>
        <MenuButton isMenuOpen={isMenuOpen} handleOpen={handleOpen} />
      </nav>
    </header>
  );
};

export default Header;
