import React from 'react';

const AboutCEO = () => {
  return (
    <div className="bg-gray-100 mt-8 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center space-x-6">
          <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden">
            {/* Replace with the CEO's image */}
            <img src="./CEO.jpg" alt="Rajat Verma" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Rajat Verma</h1>
            <h2 className="text-xl text-gray-600">Managing Director @ Feb Tech IT </h2>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-gray-700 leading-relaxed text-justify">
            I founded Feb Tech with the vision to provide innovative and technology-driven solutions to our clients. My passion for technology and my entrepreneurial spirit drove me to start this company and I am proud of how far we have come.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed text-justify">
            I am committed to leading Feb Tech towards success and growth by providing our clients with exceptional services and experiences. We have a dedicated team of professionals who share my vision and work tirelessly to bring our clients' ideas to life. My background in Information Technology from Graphic Era Hill University Dehradun has given me a unique perspective on the challenges and opportunities that businesses face today. I believe that technology is the key to success in today's fast-paced world and that's why we are constantly striving to innovate and stay ahead of the curve. At Feb Tech, we believe that every client is unique and we work closely with them to understand their business needs and goals. Our goal is to deliver tailored solutions that drive their success and growth.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Thank you for considering Feb Tech for your technology needs. I look forward to working with you and helping you achieve your goals.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Best regards,<br />
            Rajat Verma
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCEO;
