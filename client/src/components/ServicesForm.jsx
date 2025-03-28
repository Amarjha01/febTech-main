import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalAxios from "../../GlobalAxios/GlobalAxios";
import { PropagateLoader } from "react-spinners";
import DomainRegistration from "./DropDownServices/DomainRegistration";
import WebDesign from "./DropDownServices/WebDesign";
import WebDevelopment from "./DropDownServices/WebDevelopment";
import SoftwareDevelopment from "./DropDownServices/SoftwareDevelopment";
import ECommerce from "./DropDownServices/ECommerce";
import PaymentGateway from "./DropDownServices/PaymentGateway";
import WebHosting from "./DropDownServices/WebHosting";
import ProfessionalEmails from "./DropDownServices/ProfessionalEmails";
import MobileApplication from "./DropDownServices/MobileApplication";
import SeoServices from "./DropDownServices/SeoServices";
import SocialMediaOptimization from "./DropDownServices/SocialMediaOptimization";
import PayPerClick from "./DropDownServices/PayPerClick";
import SocialMediaMarketing from "./DropDownServices/SocialMediaMarketing";
import EmailMarketing from "./DropDownServices/EmailMarketing";
import WhatsAppMarketing from "./DropDownServices/WhatsAppMarketing";
import SmsMarketing from "./DropDownServices/SmsMarketing";
import BusinessCardComponent from "./DropDownServices/BusinessCardComponent";
import SocialMediaPost from "./DropDownServices/SocialMediaPost";
import Pamphlet from "./DropDownServices/Pamphlet";
import Brochure from "./DropDownServices/BrochureDesign";
import SocialMediaAds from "./DropDownServices/SocialMediaAds";
import FlyerDesign from "./DropDownServices/FlyerDesign";
import LetterheadDesign from "./DropDownServices/LetterheadDesign";
import ProductCatalogueDesign from "./DropDownServices/ProductCatalogueDesign";
import FacebookMarketing from "./DropDownServices/FacebookMarketing";
import FacebookAds from "./DropDownServices/FacebookAds";
import WhatsappAds from "./DropDownServices/WhatsappAds";
import InstagramAds from "./DropDownServices/InstagramAds";
import GoogleAds from "./DropDownServices/GoogleAds";
import DomesticTrademark from "./DropDownServices/DomesticTrademark";
import InternationalTrademark from "./DropDownServices/InternationalTrademark";
const ServicesForm = () => {
  const { service } = useParams();

  const services = [
    {
      id: 1,
      name: "domain registration",
      component: DomainRegistration,
      para: "Secure your online identity with our reliable domain registration services. We help you find the perfect domain name that represents your brand and makes it easy for customers to find you online. Our services ensure your domain is registered quickly and safely, giving you peace of mind.",
      image:
        "https://www.picpedia.org/highway-signs/images/domain-registration.jpg",
    },
    {
      id: 2,
      name: "web design",
      component: WebDesign,
      para: "Our web design services create visually stunning and user-friendly websites that capture your brand’s essence. We focus on responsive design, ensuring your site looks great on all devices. Let us help you make a lasting impression with a professional and creative web design.",
      image:
        "https://psdlearning.com/wp-content/uploads/2020/04/2173df74a356e89b40b18897e1b8655d.jpeg",
    },
    {
      id: 3,
      name: "web development",
      component: WebDevelopment,
      para: "We offer comprehensive web development services to build robust and scalable websites tailored to your business needs. From e-commerce platforms to custom web applications, our team ensures your site is fast, secure, and easy to manage, helping you achieve your online goals efficiently.",
      image:
        "https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-1536x1177.jpg",
    },
    {
      id: 4,
      name: "software development",
      component: SoftwareDevelopment,
      para: "Our software development services provide custom solutions tailored to your unique business requirements. We specialize in building scalable, high-performance software that drives efficiency and growth. Whether you need a desktop application or enterprise software, we deliver innovative solutions that meet your needs.",
      image: "https://wallpaperaccess.com/full/1385386.jpg",
    },
    {
      id: 5,
      name: "e commerce website",
      component: ECommerce,
      para: "We design and develop e-commerce websites that offer a seamless shopping experience for your customers. Our solutions include intuitive navigation, secure payment gateways, and mobile-friendly designs. Let us help you boost your online sales with a fully functional and visually appealing e-commerce platform.",
      image:
        "https://images.yourstory.com/cs/2/fb7ee200-7579-11e9-995c-171c030e4eb8/Ecomm-min1560422084936.jpg?fm=png&auto=format",
    },
    {
      id: 6,
      name: "payment gateway",
      component: PaymentGateway,
      para: "Secure your transactions with our reliable payment gateway integration services. We ensure a smooth and safe payment process for your customers, supporting multiple payment methods. Our services help you build trust and credibility with your clients, increasing your conversion rates and sales.",
      image:
        "https://codetheorem.co/blogs/wp-content/uploads/2022/10/best-payment-gateway-for-your-eCommerce-business.jpg",
    },
    {
      id: 7,
      name: "web hosting",
      component: WebHosting,
      para: "Our web hosting services ensure your website is always up and running with minimal downtime. We provide fast, secure, and scalable hosting solutions to meet the needs of your growing business. Enjoy reliable performance and 24/7 support with our comprehensive web hosting services.",
      image: "https://www.sectorlink.com/img/blog/web-hosting.jpeg",
    },
    {
      id: 8,
      name: "professional emails",
      component: ProfessionalEmails,
      para: "Establish credibility with our professional email services. We provide custom email addresses that match your domain, making your business appear more trustworthy and established. Our services include secure email hosting, spam protection, and easy-to-use interfaces for managing your business communications.",
      image:
        "https://149356901.v2.pressablecdn.com/wp-content/uploads/2018/07/Email-MarketingBytes.io-Digital-Marketing-Consulting.jpg",
    },
    {
      id: 9,
      name: "mobile application",
      component: MobileApplication,
      para: "We develop mobile applications that provide a seamless user experience on both iOS and Android platforms. Our team focuses on creating intuitive, feature-rich apps that engage users and meet your business goals. Whether you need an app for commerce, communication, or entertainment, we've got you covered.",
      image:
        "https://static.vecteezy.com/system/resources/previews/000/523/046/original/vector-mobile-app-development-concept.jpg",
    },
    {
      id: 10,
      name: "seo services",
      component: SeoServices,
      para: "Boost your website's visibility with our expert SEO services. We use proven strategies to improve your search engine rankings, drive organic traffic, and increase conversions. Our services include keyword research, on-page optimization, and link building to ensure your website stands out in search results.",
      image:
        "https://www.webhopers.com/wp-content/uploads/2022/02/SEO-Services-in-Dehradun.jpg",
    },
    {
      id: 11,
      name: "social media optimization",
      component: SocialMediaOptimization,
      para: "Enhance your brand's presence on social media with our social media optimization services. We help you engage with your audience, increase followers, and drive traffic to your website. Our strategies are tailored to your business goals, ensuring maximum impact on platforms like Facebook, Twitter, and Instagram.",
      image:
        "https://digitalmarketology.com/wp-content/uploads/2017/09/social-media-optimization.jpg",
    },
    {
      id: 12,
      name: "pay per click",
      component: PayPerClick,
      para: "Maximize your ROI with our pay-per-click (PPC) advertising services. We create targeted ad campaigns that drive qualified traffic to your website. Our team manages everything from keyword selection to bid management, ensuring your ads reach the right audience and deliver measurable results.",
      image:
        "https://bestseo4u.co.uk/wp-content/uploads/2018/01/Pay-Per-Click-Campaign-Tips.jpg",
    },
    {
      id: 13,
      name: "social media marketing",
      component: SocialMediaMarketing,
      para: "Grow your brand with our comprehensive social media marketing services. We create and manage campaigns that resonate with your audience, increase engagement, and drive conversions. From content creation to analytics, we handle all aspects of social media marketing, ensuring your brand stays relevant and impactful.",
      image:
        "https://futurewithtech.com/wp-content/uploads/2020/09/Social-Media-Marketing-Tools-For-2020.jpg",
    },
    {
      id: 14,
      name: "email marketing",
      component: EmailMarketing,
      para: "Reach your audience directly with our effective email marketing services. We design and execute targeted email campaigns that deliver personalized messages to your subscribers. Our services help you build relationships, increase customer loyalty, and drive sales with measurable results and high ROI.",
      image:
        "https://thebrandhopper.com/wp-content/uploads/2022/12/email-marketing-strategy.jpg",
    },
    {
      id: 15,
      name: "whatsapp marketing",
      component: WhatsAppMarketing,
      para: "Connect with your customers on a personal level with our WhatsApp marketing services. We create and manage campaigns that engage users, promote your products, and drive conversions. Leverage the power of instant messaging to reach your audience directly, with content tailored to their needs and preferences.",
      image:
        "https://www.techsmashable.com/wp-content/uploads/2019/11/whatsapp-marketing.jpg",
    },
    {
      id: 16,
      name: "sms marketing",
      component: SmsMarketing,
      para: "Deliver your message instantly with our SMS marketing services. We craft targeted SMS campaigns that reach your audience wherever they are, driving engagement and conversions. Our services include list management, message creation, and analytics to ensure your campaigns are effective and impactful.",
      image:
        "https://www.mafiadomarketing.com.br/wp-content/uploads/2018/11/sms-marketing.jpg",
    },
    {
      id: 17,
      name: "business card design",
      component: BusinessCardComponent,
      para: "Make a lasting impression with our professional business card design services. We create custom business cards that reflect your brand’s identity and stand out from the competition. Our designs are not only visually appealing but also functional, ensuring that your contact information is presented clearly and memorably.",
      image:
        "https://www.seoclerk.com/pics/000/925/676/ad835e3511c643dfcce57ee9a7b3f648.jpg",
    },
    {
      id: 18,
      name: "social media post design",
      component: SocialMediaPost,
      para: "Capture attention with our creative social media post design services. We create visually stunning posts that align with your brand's voice and resonate with your audience. Whether you need graphics for promotions, announcements, or regular content, our designs help you stand out on platforms like Instagram, Facebook, and Twitter.",
      image:
        "https://cdn.dribbble.com/users/5715212/screenshots/14219934/media/68050be005febfbb741fb81226483618.jpg",
    },
    {
      id: 19,
      name: "pamphlet design",
      component: Pamphlet,
      para: "Communicate your message effectively with our professional pamphlet design services. We create eye-catching pamphlets that are informative and visually appealing. Whether for marketing, events, or informational purposes, our designs ensure your pamphlets leave a lasting impression on your audience.",
      image:
        "https://venngage-wordpress-gallery.s3.amazonaws.com/uploads/2018/08/Natural-Green-Illustrated-Nonprofit-Tri-Fold-Brochure-Idea1.jpg",
    },
    {
      id: 20,
      name: "brochure design",
      component: Brochure,
      para: "Showcase your products and services with our expertly designed brochures. We create brochures that are visually engaging and easy to read, helping you communicate your brand’s value proposition effectively. Our designs are tailored to your business needs, ensuring your brochures make a strong impact.",
      image: "https://pixelclerks.com/pics/502-2jaoin1530954667.jpg",
    },
    {
      id: 21,
      name: "social media ads design",
      component: SocialMediaAds,
      para: "Stand out in the crowded social media landscape with our custom ad design services. We create attention-grabbing ads that align with your brand's messaging and drive engagement. Whether you’re running campaigns on Facebook, Instagram, or LinkedIn, our designs help you achieve your advertising goals.",
      image:
        "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1688441724/catalog/1676015057478594560/vanvahv4zpxwu9mcwzwc.jpg",
    },
    {
      id: 22,
      name: "flyer design",
      component: FlyerDesign,
      para: "Promote your events, products, or services with our professional flyer design services. We create visually appealing flyers that convey your message clearly and effectively. Our designs are tailored to your target audience, ensuring your flyers grab attention and drive action.",
      image:
        "https://static.vecteezy.com/system/resources/previews/010/990/457/original/corporate-business-flyer-template-design-flyer-template-used-for-business-poster-layout-it-company-flyer-corporate-banners-and-leaflets-colorful-graphic-design-layout-vector.jpg",
    },
    {
      id: 23,
      name: "letter head design",
      component: LetterheadDesign,
      para: "Enhance your brand’s professionalism with our custom letterhead design services. We create letterheads that reflect your brand’s identity and make your correspondence stand out. Our designs are clean, elegant, and tailored to your business needs, ensuring your documents leave a positive impression.",
      image:
        "https://cdn.dribbble.com/users/3864855/screenshots/10061328/media/e380a039cd17d3cab428e0c1c059cecd.jpg",
    },
    {
      id: 24,
      name: "product catalogue design",
      component: ProductCatalogueDesign,
      para: "Present your products in the best light with our product catalogue design services. We create catalogues that are visually appealing, well-organized, and easy to navigate. Our designs help you showcase your products effectively, making it easier for customers to find what they’re looking for and make a purchase.",
      image:
        "https://tint.creativemarket.com/NTLKEcEBhcMRCN9Ezx2ZwUoOQQFG9b3lYHJtIeEKy24/width:1820/height:1214/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzY4NC82ODQyLzY4NDIyNDgvdGh1bWJuYWlsLWltYWdlLXByb2R1Y3QtY2F0YWxvZy1vLmpwZw",
    },
    {
      id: 25,
      name: "facebook marketing",
      component: FacebookMarketing,
      para: "Reach your target audience on Facebook with our strategic Facebook Marketing services. We help you build brand awareness, engage with your audience, and drive conversions through targeted campaigns and creative content.",
      image:
        "https://th.bing.com/th/id/R.103d1ed015f61a2999c4132610d95b31?rik=3g%2ftTJ7qj5YPhQ&riu=http%3a%2f%2fwww.marketingsoluciones.com%2fwp-content%2fuploads%2f2019%2f02%2fpublicidad-en-facebook-2-767x409%402x.jpg&ehk=3nxzQzi%2bSxrqrEFGlLiS5u07nEqPQDIQEI07rHmxIcM%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 26,
      name: "facebook ads",
      component: FacebookAds,
      para: "Maximize your ROI with our Facebook Ads services. We create and manage high-performing ad campaigns tailored to your business goals. From audience targeting to ad design, we ensure your ads reach the right people and deliver results.",
      image:
        "https://alidropship.com/wp-content/uploads/2019/09/Facebook-ads-examples.png",
    },
    {
      id: 27,
      name: "whtsapp ads",
      component: WhatsappAds,
      para: "Leverage the power of WhatsApp to connect with your customers directly. Our WhatsApp Ads services help you engage your audience with personalized messages and offers, driving higher engagement and conversions.",
      image:
        "https://chetenet.com/wp-content/uploads/2020/01/c2G9xtNbJsR2Ro8DvjsCtg-scaled.jpg",
    },
    {
      id: 28,
      name: "instagram ads",
      component: InstagramAds,
      para: "Boost your brand's visibility on Instagram with our Instagram Ads services. We create visually appealing ads that capture attention and drive engagement. Whether it's stories, posts, or carousel ads, we ensure your brand stands out.",
      image:
        "https://www.techlofy.com/wp-content/uploads/2020/06/Instagram-Ads-Featured-Image-StudioBinder.jpg",
    },
    {
      id: 29,
      name: "google ads",
      component: GoogleAds,
      para: "Increase your online visibility and drive traffic to your website with our Google Ads services. We design and manage campaigns that target the right keywords and audience, maximizing your reach and ensuring a high return on investment.",
      image: "https://metricppc.com/wp-content/uploads/2019/09/google-ads.jpeg",
    },
    {
      id: 30,
      name: "domestic trademark",
      component: DomesticTrademark,
      para: "Protect your brand within your country with our Domestic Trademark services. We help you navigate the trademark registration process, ensuring your brand's name, logo, and other assets are legally protected against infringement.",
      image:
        "https://www.brientip.com/wp-content/uploads/2023/04/iStock-1427520063-scaled.jpg",
    },
    {
      id: 31,
      name: "international trademark",
      component: InternationalTrademark,
      para: "Expand your brand's protection globally with our International Trademark services. We assist you in securing trademarks in multiple countries, ensuring your brand is safeguarded as you grow and enter new markets.",
      image:
        "https://lawyerinc.net/learning/wp-content/uploads/2020/03/International-Trademark-Registration.jpg",
    },
  ];

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    mobile_number: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    formData.service = service;
    try {
      const response = await GlobalAxios.post("/user/services", formData);
      if (response.data.status === "success") {
        toast.success("Message sent successfully!");
        setFormData({
          full_name: "",
          email: "",
          mobile_number: "",
          message: "",
          service: "",
        });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <br />
      <br />
      <div className="flex flex-col items-center justify-center gap-5 py-10 px-5">
        {services.map((item) => {
        // Check if the current service matches the selected service
        if (item.name === service.split("-").join(" ")) {
          // Dynamically render the component if it exists
          const Component = item.component;

          return (
            <div key={item.id} className="p-4">
              <h2 className="text-center" style={{ marginTop: "-70px" }}>
                <span className="text-3xl md:text-4xl px-3 py-2 rounded-md text-center font-bold capitalize a-shadow text-[#fff] bg-[#1136ff]">
                  {item.name}
                </span>
              </h2>
              <br />
              <br />
              {/* Render the component if it exists */}
              {Component && <Component />}
              <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                <div className="flex-shrink-0 w-full md:w-4/5 lg:w-[28%] flex items-center justify-center rounded-sm overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                    // style={{ paddingTop: "30px", paddingBottom: "30px" }}
                  />
                </div>
                <div className="w-full md:w-1/2 flex items-center">
                  <div className="w-full flex justify-center">
                    <p
                      className="text-base md:text-lg lg:text-xl lg:w-[80%] leading-relaxed text-justify w-full md:pr-10"
                      style={{
                        paddingTop: "30px",
                        paddingBottom: "30px",
                      }}
                    >
                      {item.para}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }

        return null;
      })}

        <ToastContainer />
        <p className="text-3xl text-center font-semibold capitalize">
          Contact Us for{" "}
          <span className="text-[#1136ff]">{service.split("-").join(" ")}</span>
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[60%] max-w-screen-lg mx-auto flex flex-col gap-5 py-5 rounded-md"
        >
          <div className="w-full flex flex-col md:flex-row gap-5">
            <input
              type="text"
              onChange={handleChange}
              id="name"
              name="full_name"
              value={formData.full_name}
              required
              className="p-4 border border-gray-300 text-black md:w-1/3 w-full rounded"
              placeholder="Full Name"
            />
            <input
              type="tel"
              onChange={handleChange}
              id="mobile"
              name="mobile_number"
              value={formData.mobile_number}
              required
              className="p-4 border border-gray-300 md:w-1/3 w-full rounded"
              placeholder="Phone Number"
            />
            <input
              type="email"
              onChange={handleChange}
              id="email"
              name="email"
              value={formData.email}
              required
              className="p-4 border border-gray-300 md:w-1/3 w-full rounded"
              placeholder="E-mail"
            />
          </div>
          <textarea
            name="message"
            onChange={handleChange}
            value={formData.message}
            placeholder="Write Message"
            className="w-full h-40 border border-gray-300 p-4 rounded"
          ></textarea>
          <div className="flex justify-center items-center gap-5 w-full">
            {loading ? (
              <PropagateLoader color="#1136FF" />
            ) : (
              <button
                type="submit"
                className="capitalize bg-yellow-400 flex items-center justify-between px-6 py-3 gap-2 shadow-sm rounded"
              >
                Send Us Message
                <span>
                  <svg
                    width="16px"
                    height="16px"
                    viewBox="0 0 66 43"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <path
                        fill="#000"
                        d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                      ></path>
                      <path
                        fill="#000"
                        d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                      ></path>
                      <path
                        fill="#000"
                        d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                      ></path>
                    </g>
                  </svg>
                </span>
              </button>
            )}
          </div>
        </form>

        {/* Sawan's code start */}

        
        {/* Sawan's code end */}
      </div>
    </>
  );
};

export default ServicesForm;
