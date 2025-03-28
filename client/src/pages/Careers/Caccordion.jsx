import React from "react";
import { useState } from "react";
import "./Careers.css";

const Caccordion = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleAccordion = (index) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="relative font-inter antialiased">
      <main className="relative flex flex-col  bg-slate-50 overflow-hidden">
        <div className="w-full max-w-2xl mx-auto px-4 md:px-6 py-24">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            Current Openings
          </h1>

          <div className="divide-y divide-slate-200">
            {/* Accordion items */}
            {febItems.map((item, index) => (
              <div key={index} className="py-2">
                <h2>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full text-left font-semibold py-2"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={expandedItems[index]}
                    aria-controls={`faqs-text-${index + 1}`}
                  >
                    <span>{item.position}</span>
                    <svg
                      className={`fill-indigo-500 shrink-0 ml-8 transform origin-center transition duration-200 ease-out ${
                        expandedItems[index] ? "rotate-0" : "rotate-90"
                      }`}
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="7" width="16" height="2" rx="1" />
                    </svg>
                  </button>
                </h2>
                <div
                  id={`faqs-text-${index + 1}`}
                  role="region"
                  aria-labelledby={`faqs-title-${index + 1}`}
                  className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedItems[index]
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-3">{item.para}</p>
                    <p className="py-2 font-semibold">Key Responsibilities:</p>
                    <ul className="listyle mx-4">
                      {item.res.map((listItem, index) => {
                        return (
                          <li key={index} className="listyle">
                            {listItem}
                          </li>
                        );
                      })}
                    </ul>
                    <p className="py-2 font-semibold">Requirements:</p>
                    <ul className="listyle mx-4">
                      {item.qres.map((listItem, index) => {
                        return (
                          <li key={index} className="listyle">
                            {listItem}
                          </li>
                        );
                      })}
                    </ul>
                    <p className="py-3">{item.lpara}</p>
                    <p>
                      <span className="font-semibold">LOCATION:</span> Roorkee
                      Haridwar, Uttarakhand
                    </p>
                    <p>
                      <span className="font-semibold uppercase">
                        Experience:
                      </span>{" "}
                      {item.exp}
                    </p>
                    <div className="flex items-center w-full my-10">
                      <div className="capitalize bg-yellow-400 flex items-center justify-between px-6 py-3 gap-2 pb-shadow">
                        <a href="#cform"> Apply Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

// Sample FAQ items
const febItems = [
  {
    position: "Senior Software Developer - Web Development",
    para: "FEB TECH IT SOLUTIONS PVT LTD is seeking a highly skilled and experienced Senior Software Developer – Web Development to join our growing team. As a Senior Software Developer, you will be responsible for designing, developing, and implementing web-based software applications for our clients. You will work closely with our project managers, designers, and other developers to ensure that the software we deliver meets our clients’ needs and exceeds their expectations.",
    res: [
      "Design, develop, and maintain web-based software applications using modern programming languages and frameworks",
      "Collaborate with project managers, designers, and other developers to identify requirements and develop effective solutions",
      "Write clean, well-documented, and reusable code that adheres to best practices and coding standards",
      "Participate in code reviews and provide feedback to other developers",
      "Troubleshoot and resolve software issues as they arise",
    ],
    qres: [
      "Bachelor’s degree in Computer Science or related field",
      "Minimum of 0-1 years of experience in web development",
      "Strong proficiency in PHP or any other language",
      "Excellent problem-solving skills and attention to detail",
      "Ability to work collaboratively as part of a team",
      "Strong communication and interpersonal skills",
    ],

    lpara:
      "If you are a self-starter with a passion for web development and a desire to work on challenging projects with a dynamic team, we want to hear from you. Apply today to join our team at FEB TECH IT SOLUTIONS PVT LTD.",

    exp: "3+ YEARS EXPERIENCE, GRADUATION",
  },
  {
    position: "PHP Developer",
    para: "We are seeking a talented and experienced PHP developer to join our team at FEB TECH. As a PHP developer, you will be responsible for developing and maintaining our website and web applications.",
    res: [
      "Design, develop, and maintain web-based software applications using modern programming languages and frameworks",
      "Collaborate with project managers, designers, and other developers to identify requirements and develop effective solutions",
      "Write clean, well-documented, and reusable code that adheres to best practices and coding standards",
      "Participate in code reviews and provide feedback to other developers",
      "Troubleshoot and resolve software issues as they arise",
    ],
    qres: [
      "Bachelor’s degree in Computer Science or related field",
      "Minimum of 0-1 years of experience in web development",
      "Strong proficiency in PHP or any other language",
      "Excellent problem-solving skills and attention to detail",
      "Ability to work collaboratively as part of a team",
      "Strong communication and interpersonal skills",
    ],

    lpara:
      "If you are a self-starter who is passionate about web development and eager to take on new challenges, we encourage you to apply. We offer a competitive salary, flexible work hours, and opportunities for professional growth and advancement.",

    exp: "3+ YEARS EXPERIENCE, GRADUATION",
  },
  {
    position: "Front-End Developer - Software Developer",
    para: "As a front-end developer or software developer, you will be responsible for developing and maintaining the user interface of our software applications. This will involve working closely with our design and back-end development teams to ensure a seamless user experience.",
    res: [
      "Design, develop, and maintain web-based software applications using modern programming languages and frameworks",
      "Collaborate with project managers, designers, and other developers to identify requirements and develop effective solutions",
      "Write clean, well-documented, and reusable code that adheres to best practices and coding standards",
      "Participate in code reviews and provide feedback to other developers",
      "Troubleshoot and resolve software issues as they arise",
    ],
    qres: [
      "Bachelor’s degree in Computer Science or related field",
      "Minimum of 0-1 years of experience in web development",
      "Strong proficiency in PHP or any other language",
      "Excellent problem-solving skills and attention to detail",
      "Ability to work collaboratively as part of a team",
      "Strong communication and interpersonal skills",
    ],

    lpara:
      "If you are passionate about front-end development and want to work in a fast-paced, innovative environment, we encourage you to apply for our Front-End Developer – Software Developer position.",

    exp: "3+ YEARS EXPERIENCE, GRADUATION",
  },
  {
    position: "Graphic Designer",
    para: "As a graphic designer at FEB TECH, you will be responsible for creating visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, and captivate our customers. You will work on a variety of products and activities, such as websites, advertising campaigns, social media posts, packaging, and much more. Your duties will include but not be limited to:",
    res: [
      "Design, develop, and maintain web-based software applications using modern programming languages and frameworks",
      "Collaborate with project managers, designers, and other developers to identify requirements and develop effective solutions",
      "Write clean, well-documented, and reusable code that adheres to best practices and coding standards",
      "Participate in code reviews and provide feedback to other developers",
      "Troubleshoot and resolve software issues as they arise",
    ],
    qres: [
      "Bachelor’s degree in Computer Science or related field",
      "Minimum of 0-1 years of experience in web development",
      "Strong proficiency in PHP or any other language",
      "Excellent problem-solving skills and attention to detail",
      "Ability to work collaboratively as part of a team",
      "Strong communication and interpersonal skills",
    ],

    lpara:
      "The ideal candidate for this position should have a strong portfolio of graphic design work, proficiency in design software such as Adobe Creative Suite, and excellent communication and teamwork skills. A degree in graphic design or a related field is preferred.",

    exp: "3+ YEARS EXPERIENCE, GRADUATION",
  },
];

export default Caccordion;
