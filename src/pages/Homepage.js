import React from "react";
import Hero from "../components/Hero";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import AboutSection from "../components/AboutSection";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <AboutSection />
    </>
  );
};

export default Homepage;
