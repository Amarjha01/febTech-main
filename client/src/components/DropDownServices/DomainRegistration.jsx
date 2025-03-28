import React from "react";

const DomainRegistration = () => {
  return (
    <div
      className="min-h-screen bg-transparent py-8"
      style={{ marginTop: "-40px" }}
    >
      <main className="container mx-auto px-4">
        {/* Section 1: Introduction */}
        <section className="relative mb-12">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{
              backgroundImage: "url('../../../../processBg.jpg')",
              marginLeft: "-10vw",
              marginRight: "-10vw",
              marginTop: "-15.5vh", // Adjust these values to increase/decrease the top and bottom margins
              marginBottom: "-10vh",
              width: "calc(100% + 13.5vw)",
              height: "calc(100% + 16vh)", // Adjust height to compensate for the added top and bottom margins
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="flex flex-col items-center py-8 ">
            <img
              src="https://i.pcmag.com/imagery/articles/01FpToD9LfVOVA5AcAEaVl7-3.fit_lim.v1660829921.jpg"
              alt="Domain Registration"
              className="w-full h-[350px] object-cover rounded-lg shadow-lg"
            />
            <div className="text-center mt-6 w-full">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#1136FF]">
                Why Register a Domain?
              </h2>
              <div className="w-full mx-auto">
                <p className="text-black mb-6 text-center text-base md:text-lg lg:text-xl text-justify font-medium">
                  Registering a domain name is essential for establishing a
                  strong online presence. A domain name serves as your website's
                  address on the internet, making it easier for customers to
                  locate your site. With a unique domain, you can distinguish
                  your business from competitors, improve your search engine
                  ranking, and enhance your brand's credibility. Moreover,
                  owning a domain allows you to create a professional email
                  address and offers greater control over your online identity.
                  This process not only helps in building brand recognition but
                  also ensures that your website remains accessible and
                  memorable to your audience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Benefits */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center text-[#1136FF]">
            Benefits of Owning a Domain
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
              <img
                src="https://miro.medium.com/v2/resize:fit:1024/1*LRR6OM0CIdK7HW9zLRgvQg.png"
                alt="Professionalism"
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-[#1136FF]">
                Professionalism
              </h3>
              <p className="text-black text-center text-base md:text-lg lg:text-xl">
                A custom domain name enhances your business’s professional image
                and builds trust with your audience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
              <img
                src="https://thumbs.dreamstime.com/b/brand-identity-business-marketing-words-typography-concept-motivational-inspirational-quotes-lettering-142738520.jpg"
                alt="Brand Identity"
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-[#1136FF]">
                Brand Identity
              </h3>
              <p className="text-black text-center text-base md:text-lg lg:text-xl">
                A custom domain helps reinforce your brand identity, making it
                easier for customers to remember your site.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
              <img
                src="https://www.byteforza.com/static/media/app_development_2.0c3b986ab0a5b1619512.jpg"
                alt="Control"
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-[#1136FF]">
                Control
              </h3>
              <p className="text-black text-center text-base md:text-lg lg:text-xl">
                Full control over your domain means you manage your website and
                email addresses without restrictions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
              <img
                src="https://cbx-prod.b-cdn.net/COLOURBOX38724065.jpg?class=thumbmedium"
                alt="Credibility"
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-[#1136FF]">
                Credibility
              </h3>
              <p className="text-black text-center text-base md:text-lg lg:text-xl">
                A unique domain name boosts credibility and distinguishes you
                from competitors in the online space.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: How It Works */}
        <section className="relative mb-12">
        <section className="relative mb-12">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{
              backgroundImage: "url('../../../../processBg.jpg')",
              marginLeft: "-10vw",
              marginRight: "-10vw",
              marginTop: "-1vh", // Adjust these values to increase/decrease the top and bottom margins
              marginBottom: "-10vh",
              width: "calc(100% + 13.5vw)",
              height: "calc(100% + 3vh)", // Adjust height to compensate for the added top and bottom margins
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="flex flex-col items-center py-8">
            <img
              src="https://www.lanechange.net/media/posts/2/domain-name-registration.jpg"
              alt="How It Works"
              className="w-full h-[350px] object-cover rounded-lg shadow-lg"
            />
            <div className="text-center mt-6 w-full">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#1136FF]">
                How Domain Registration Works
              </h2>
              <div className="w-full mx-auto">
                <p className="text-black mb-6 text-center text-base md:text-lg lg:text-xl text-justify font-medium">
                  The domain registration process is straightforward but crucial
                  for securing your online presence. First, you need to choose a
                  domain name that reflects your brand or business. Next, you
                  check the availability of your chosen name using a domain
                  registrar's search tool. If the domain is available, you
                  proceed with the registration, which involves providing your
                  contact details and paying the registration fee. Once
                  registered, you gain ownership of the domain and can manage
                  its settings through a domain management interface. Regular
                  renewal is required to keep your domain active and prevent it
                  from expiring. This process ensures that your domain remains
                  yours and continues to serve as a key component of your online
                  identity.
                </p>
              </div>
            </div>
          </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default DomainRegistration;
