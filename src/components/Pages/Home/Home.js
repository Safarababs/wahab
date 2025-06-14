import React from "react";
import Carousel from "../../Carousel/Carousel";
import AboutUs from "../../About me/AboutUs";
import FactsSection from "../../Facts/Facts";
import WhyChooseUs from "../../WhyChooseUs/WhyChooseUs";
import CallbackForm from "../../ContactForm/ContactForm";
import Projects from "../../Projects/Projects";
import TestimonialCarousel from "../../Testimonial/Testimonial";
import ServicesSection from "../../ServicesSection/Services";

const Home = () => {
  return (
    <div>
      <Carousel />
      <AboutUs />
      <FactsSection />
      <WhyChooseUs />
      <ServicesSection />
      <CallbackForm />
      <Projects />
      <TestimonialCarousel />
    </div>
  );
};

export default Home;
