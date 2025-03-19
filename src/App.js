import React from "react";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import AboutUs from "./components/About me/AboutUs";
import FactsSection from "./components/Facts/Facts";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import CallbackForm from "./components/ContactForm/ContactForm";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <AboutUs />
      <FactsSection />
      <WhyChooseUs />
      <ServicesSection />
      <CallbackForm />
      <Projects />
    </div>
  );
};

export default App;
