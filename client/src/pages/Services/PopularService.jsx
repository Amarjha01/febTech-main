import React from 'react';
import { 
  PiRocketThin, 
  PiMouseThin, 
  PiMonitorPlayThin, 
  PiScrollThin 
} from "react-icons/pi";
import { 
  SiAmazonsimpleemailservice, 
  SiGoogleads, 
} from "react-icons/si";
import { 
  MdPayment, 
  MdDomain, 
  MdOutlineMobileFriendly,
  MdOutlineBusinessCenter
} from "react-icons/md";
import { 
  FaShoppingCart, 
  FaBusinessTime, 
  FaTrademark,
  FaWhatsapp
} from "react-icons/fa";
import {
    RiMailSendLine,
    RiLock2Line,
  } from "react-icons/ri";
import { 
  BiPen, 
  BiMessageRoundedDots 
} from "react-icons/bi";
import { 
  FiMonitor 
} from "react-icons/fi";
import { LiaAdSolid } from "react-icons/lia";
import { TbSquareLetterL } from "react-icons/tb";
import { 
  AiOutlineFileText ,
  AiOutlineAntDesign,
  AiFillProduct
} from "react-icons/ai";
import { HiArrowLongRight } from "react-icons/hi2";
import "./Services.css";
import { NavLink } from 'react-router-dom';

const PopularService = () => {
  const serviceData = [
    { icon: <MdDomain />, technology: "Domain Registration", para: "Secure your unique domain name for your website.",url:"/serviceform/domain-registration" },
    { icon: <FiMonitor />, technology: "Website Design", para: "Crafting visually appealing and user-friendly websites.",url:"/serviceform/web-design" },
    { icon: <PiMouseThin />, technology: "Website Development", para: "Developing high-quality websites tailored to your needs.",url:"/serviceform/website-development" },
    { icon: <FaShoppingCart />, technology: "E-commerce Website", para: "Creating robust online stores to boost your sales.",url:"/serviceform/e-commerce-website" },
    { icon: <MdPayment />, technology: "Payment Gateway", para: "Integrate secure payment gateways to your website.",url:"/serviceform/payment-gateway" },
    { icon: <RiMailSendLine />, technology: "Professional Emails", para: "Set up professional email addresses for your business.",url:"/serviceform/professional-emails" },
    { icon: <MdOutlineMobileFriendly />, technology: "Mobile Application", para: "Developing user-friendly mobile applications.",url:"/serviceform/mobile-application" },
    { icon: <PiRocketThin />, technology: "Digital Marketing", para: "Promote your business with our digital marketing services.",url:"/serviceform/digital-marketing" },
    { icon: <PiRocketThin />, technology: "SEO Services", para: "Improve your search engine rankings with our SEO services.",url:"/serviceform/seo-services" },
    { icon: <PiMonitorPlayThin />, technology: "Social Media Optimization", para: "Enhance your social media presence effectively.",url:"/serviceform/social-media-optimization" },
    { icon: <SiGoogleads />, technology: "Pay Per Click", para: "Drive targeted traffic with our PPC services.",url:"/serviceform/pay-per-click" },
    { icon: <PiScrollThin />, technology: "Content Writing", para: "Create engaging content to attract and retain customers.",url:"/serviceform/content-writing" },
    { icon: <SiAmazonsimpleemailservice />, technology: "Email Marketing", para: "Reach your audience with effective email campaigns.",url:"/serviceform/email-marketing" },
    { icon: <FaWhatsapp />, technology: "Whatsapp Marketing", para: "Leverage WhatsApp for your marketing campaigns.",url:"/serviceform/whatsapp-marketing" },
    { icon: <BiMessageRoundedDots />, technology: "SMS Marketing", para: "Directly reach your customers with SMS marketing.",url:"/serviceform/sms-marketing" },
    { icon: <BiPen />, technology: "Graphic Design", para: "Professional graphic design services for your business.",url:"/serviceform/graphic-design" },
    { icon: <MdOutlineBusinessCenter />, technology: "Business Card Design", para: "Design unique business cards that stand out.",url:"/serviceform/business-card-design" },
    { icon: <AiOutlineFileText />, technology: "Social Media Post Design", para: "Create eye-catching social media posts.",url:"/serviceform/social-media-post-design" },
    { icon: <AiOutlineAntDesign />, technology: "Pamphlet Design", para: "Design informative pamphlets for your business.",url:"/serviceform/pamphlet-design" },
    { icon: <AiOutlineFileText />, technology: "Brochure Design", para: "Create detailed brochures to showcase your services.",url:"/serviceform/brochure-design" },
    { icon: <LiaAdSolid />, technology: "Social Media Ads Design", para: "Design compelling ads for social media platforms.",url:"/serviceform/social-media-ads-design" },
    { icon: <AiOutlineFileText />, technology: "Flyer Design", para: "Design attractive flyers for your promotions.",url:"/serviceform/flyer-design" },
    { icon: <TbSquareLetterL />, technology: "Letter Head Design", para: "Create professional letterhead for your business.",url:"/serviceform/letter-head-design" },
    { icon: <AiFillProduct />, technology: "Product Catalogue Design", para: "Design product catalogs that highlight your offerings.",url:"/serviceform/product-catalogue-design" },
    { icon: <FaBusinessTime />, technology: "Social Media Marketing", para: "Boost your social media presence and engagement.",url:"/serviceform/social-media-marketing" },
    { icon: <SiGoogleads />, technology: "Google Ads", para: "Advertise effectively on Google with our services.",  url:"/serviceform/google-ads" },
    { icon: <FaTrademark />, technology: "Domestic Trademark", para: "Register and protect your trademark domestically.",url:"/serviceform/domestic-trademark" },
    { icon: <FaTrademark />, technology: "International Trademark", para: "Secure your trademark internationally.",url:"/serviceform/international-trademark" },
  ];

  return (
    <div className='bg-[#FFF4E8] w-[90%] mx-auto py-10'>
      <div className='w-[90%] mx-auto py-10'>
        <div className='flex justify-between'>
          <div>
            <img src="stars.png" alt="stars image" className='animate-bounce' />
          </div>
          <div className='flex flex-col items-center gap-6'>
            <div>
              <span className='text-xl capitalize text-white font-bold bg-[#1136FF] text-center px-2 py-2 a-shadow-sm rounded'>Popular Service</span>
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
              Outsmart the competition with best-in-class <br /> Digital Services
            </p>
          </div>
          <div>
            <img src="sun.png" alt="sun image" className='animate-spin transition duration-1000 delay-100' />
          </div>
        </div>
        <div className='mt-16 flex gap-5 flex-wrap justify-center'>
          {serviceData.map((item, index) => (
            <div key={index} className='card w-[100%] xl:w-[23%] lg:w-[360px] sm:[360px] bg-white flex flex-col items-center p-4 mb-10 gap-4 hover:shadow-2xl hover:shadow-slate-500 rounded-md'>
              <div className='service_icon rounded-full text-6xl p-2 bg-[#1136FF] text-white my-3 a-shadow-sm z-10 '>
                {item.icon}
              </div>
              <p className='text-lg font-semibold z-10 '>{item.technology}</p>
              <p className='text-center px-6  z-10'>{item.para}</p>
              <NavLink to={item.url}  className='capitalize underline underline-offset-4 mb-4 z-10 flex items-center gap-2'>Read More <HiArrowLongRight/> </NavLink>
              <div className='overlay2'></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularService;
