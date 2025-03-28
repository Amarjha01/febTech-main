import React, { useState } from "react";

const Pricing = () => {
  const [billPlan, setBillPlan] = useState("monthly");
  const plans = [
    {
      name: "Basic",
      price: { monthly: 399, annually: 2999 },
      discretion:
        "Perfect for those just starting out or looking for a simple online presence. With affordable pricing and essential features.",
      features: [
        "Free Domain*",
        "Free Hosting",
        "Delivery 2 Days",
        "Pages 1",
        "Technical Support 1 Month",
        "Maintenance Support  6 Month",
        "Additional page 1,000/page",
        "Social Media Account",
        "All Devices Responsive",
        "Enquiry form",
        "Free SSL",
        "Platform php, HTML, WordPress",
        "A.M.C 20% After one year",
        "Google Map",
        "80% payment advance",
      ],
    },
    {
      name: "Professional",
      price: { monthly: 699, annually: 5999 },
      discretion:
        "Offers a comprehensive website solution for businesses looking to expand their online presence. With advanced features such as SEO optimization",
      features: [
        "Free Domain*",
        "Free Hosting",
        "Delivery 3-7 Days",
        "Pages 5",
        "Technical Support 3 Month",
        "Maintenance Support  6 Month",
        "Additional page 1,000/page",
        "Social Media Account",
        "All Devices Responsive",
        "Enquiry form",
        "Free SSL",
        "Platform php, HTML, WordPress",
        "A.M.C 20% After one year",
        "Google Map",
        "60% payment advance",
      ],
    },
    {
      name: "Enterprise",
      price: { monthly: 1299, annually: 11999 },
      discretion:
        "Designed for businesses that require a comprehensive and custom-built solution for their online presence.",
      features: [
        "Free Domain*",
        "Free Hosting",
        "Delivery 10 Days",
        "Pages 10",
        "Technical Support 12 Month",
        "Maintenance Support  12 Month",
        "Additional page 2,000/page",
        "Social Media Account",
        "All Devices Responsive",
        "Enquiry form",
        "Free SSL",
        "Platform php, HTML, WordPress",
        "A.M.C 20% After one year",
        "Google Map",
        "60% payment advance",
      ],
    },
  ];

  return (
    <main className="mx-4 my-16" id="pricing">
      <div className="text-center">
        <h1 className="mb-4 text-2xl font-normal md:text-3xl lg:text-4xl">
          Our <span className="font-semibold">plans</span> for your{" "}
          <span className="font-semibold">strategies</span>
        </h1>
        <p className="text-sm font-normal text-gray-400">
          See below our main three plans for your business, for your
          startup, and agency.
        </p>
        <p className="text-sm font-normal text-gray-400">
          It starts from here! You can teach yourself what you really like.
        </p>
      </div>

      {/* Plan switch */}
      <div className="flex items-center justify-center mt-10 space-x-4">
        <span className="text-base font-medium">Bill Monthly</span>
        <button
          className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() =>
            setBillPlan(billPlan === "monthly" ? "annually" : "monthly")
          }
        >
          <div className="w-16 h-8 transition bg-indigo-500 rounded-full shadow-md outline-none"></div>
          <div
            className={`absolute inline-flex items-center justify-center w-6 h-6 transition-all duration-200 ease-in-out transform bg-white rounded-full shadow-sm top-1 left-1 ${
              billPlan === "monthly" ? "translate-x-0" : "translate-x-8"
            }`}
          ></div>
        </button>
        <span className="text-base font-medium">Bill Annually</span>
      </div>

      {/* Plans */}
      <div className="flex flex-col items-center justify-center mt-16 space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0">
        {plans.map((plan, index) => (
          <section
            key={index}
            className={`flex flex-col w-full max-w-sm p-12 space-y-6 bg-white rounded-lg shadow-md transition-transform transform hover:-translate-y-2 ${
              plan.name === "Professional" ? "relative" : ""
            }`}
          >
            {/* Popular Badge */}
            {plan.name === "Professional" && (
              <div className="absolute top-0 right-0 px-4 py-1 text-sm font-semibold text-white bg-red-500 rounded-bl-lg animate-bounce">
                Popular
              </div>
            )}

            {/* Price */}
            <div className="flex-shrink-0">
              <span
                className={`text-4xl font-medium tracking-tight ${
                  plan.name === "Basic" ? "text-green-500" : ""
                }`}
              >
                ₹
                {billPlan === "monthly"
                  ? plan.price.monthly
                  : plan.price.annually}
              </span>
              <span className="text-gray-400">
                {billPlan === "monthly" ? "/month" : "/year"}
              </span>
            </div>

            {/* Description */}
            <div className="flex-shrink-0 pb-6 space-y-2 border-b">
              <h2 className="text-2xl font-normal">{plan.name}</h2>
              <p className="text-sm text-gray-400">{plan.discretion}</p>
            </div>

            {/* Features */}
            <ul className="flex-1 space-y-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-3 text-base font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex-shrink-0 pt-4">
              <button
                className={`inline-flex items-center justify-center w-full max-w-xs px-4 py-2 transition-colors border rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  plan.name === "Basic"
                    ? "bg-indigo-500 text-white hover:bg-indigo-700"
                    : "hover:bg-indigo-500 hover:text-white"
                }`}
              >
                Get {plan.name}
              </button>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Pricing;
