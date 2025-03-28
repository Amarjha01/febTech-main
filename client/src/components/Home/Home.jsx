import { AHero, Connect, Service, Strategy, Growing, ProjectContainer, Partner, Business, TestimonialContainer, NewsContainer ,NewsLetter} from "./index";
import InternTestimonial from "./Testimonial/InternTestimonial";
import "./Home.css";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div className="home  w-[100%]">
      <AHero />
      <Connect />
      <Service />
      <Strategy />
      <Growing />
      <ProjectContainer />
      <Partner />
      <Business />
      <TestimonialContainer />
      <InternTestimonial />
      <Gallery />
      <NewsContainer />
      <NewsLetter />
    </div>
  );
};

export default Home;
