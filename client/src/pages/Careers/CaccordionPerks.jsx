import React from "react";
import { useState } from "react";
import "./Careers.css";

const CaccordionPerks = () => {
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
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Perks</h1>

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
                    <span className="capitalize">{item.perks}</span>
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
                    <ol className="listyle mx-4">
                      {item.res.map((listItem, index) => {
                        return (
                          <li key={index} className="listyle">
                            {listItem}
                          </li>
                        );
                      })}
                    </ol>
                    <p className="py-3">{item.lpara}</p>
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

const febItems = [
  {
    perks: "our benefits",
    para: "",
    res: [
      "Competitive Salary: We offer a competitive salary package to ensure our employees are paid fairly and have a stable income.",

      "Health Insurance: We provide health insurance coverage to our employees and their families to ensure they have access to quality healthcare when needed.",

      "Flexible Working Hours: We understand the importance of work-life balance and offer flexible working hours to accommodate our employees’ personal schedules.",

      "Professional Development: We encourage our employees to continue learning and growing in their field by providing opportunities for professional development.",

      "Team Building Activities: We organize team building activities to build a strong bond among our employees and create a positive work environment.",
    ],

    lpara:
      "At FEB TECH IT SOLUTIONS, we believe that our employees are our greatest asset and strive to provide them with a supportive and inclusive workplace.",
  },
  {
    perks: "our culture",
    para: "At FEB TECH IT SOLUTIONS, our culture is a reflection of our values and our commitment to excellence. We are a team of passionate professionals who work together to provide innovative and reliable solutions to our clients.Our culture is built on respect, integrity, and collaboration.We believe in fostering an inclusive environment where every team member has a voice and is valued for their unique perspectives and contributions.We encourage learning and growth, both professionally and personally, and support our team members in their pursuit of success.",
    res: [],
    lpara:
      "We believe that a healthy work- life balance is essential for overall well - being, which is why we offer flexible work arrangements and other benefits to support our team members.We also believe in giving back to our community and regularly participate in social and environmental initiatives.At FEB TECH, we strive to create a positive and fulfilling work experience for our team members, which in turn translates into exceptional service and solutions for our clients.",
  },
  {
    perks: "join our team",
    para: "As a part of our team, you will have access to world-className training and development programs, competitive compensation and benefits, and a dynamic and challenging work environment. You will work with some of the best minds in the industry, collaborate on innovative projects, and make a meaningful impact on our clients and society.",
    res: [],
    qres: [],

    lpara: "",

    exp: "",
  },
  {
    perks: "hiring process",
    para: "Our hiring process is rigorous yet transparent, and we believe in giving everyone an equal opportunity to showcase their skills and potential. We encourage diversity and inclusivity in our workplace and are committed to creating a culture of mutual respect and appreciation.",
    res: [],
    qres: [],

    lpara: "",

    exp: "",
  },
];

export default CaccordionPerks;
