import React from "react";
import Hero from "../../components/Hero/Hero";
import CareerForm from "./CareerForm";
import Opportunity from "./Opportunity";
import CurrentOpenings from "./CurrentOpenings";

const Career = () => {
  return (
    <>
      <Hero title={"Careers"} subtitle={"Careers"} path={"career.png"}/>
      <Opportunity />
      <CareerForm />
      <CurrentOpenings />
    </>
  );
};

export default Career;
