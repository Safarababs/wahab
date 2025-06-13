import React from "react";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import AboutUs from "./components/About me/AboutUs";
import FactsSection from "./components/Facts/Facts";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import CallbackForm from "./components/ContactForm/ContactForm";
import Projects from "./components/Projects/Projects";
import TestimonialCarousel from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

const App = () => {
  // const toggleTheme = () => {
  //   document.body.classList.toggle("dark-mode");
  // };

  return (
    <div>
      {/* <button
        onClick={toggleTheme}
        style={{
          position: "fixed",
          bottom: 190,
          left: 10,
          zIndex: 1000,
        }}
      >
        Toggle Theme
      </button> */}
      <Header />
      <Carousel />
      <AboutUs />
      <FactsSection />
      <WhyChooseUs />
      <ServicesSection />
      <CallbackForm />
      <Projects />
      <TestimonialCarousel />
      <Footer />
    </div>
  );
};

export default App;
