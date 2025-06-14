import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import AboutSection from "./components/Pages/About/About";
import ServicesPage from "./components/Pages/Services/ServicePage";
import ContactSection from "./components/Pages/Contact/Contact";
import FeaturesSection from "./components/Pages/Features/Features";
import ProjectPage from "./components/Pages/ProjectPage/ProjectPage";
import NotFound from "./components/Pages/NotFound/NotFound";
import TestimonialPage from "./components/Pages/Testimonial Page/TestimonialPage";
import DataScience from "./components/Pages/Pyhton Services/Data Science/DataScience";
import MachineLearning from "./components/Pages/Pyhton Services/Machine Learning/MachineLearning";
import DashboardVisualization from "./components/Pages/Pyhton Services/Dashboard Visualization/DashboardVisualization";
import ApiDevelopment from "./components/Pages/Pyhton Services/API development/API development";
import WebScraping from "./components/Pages/Pyhton Services/Web Scraping/WebScraping";
import TermsAndConditions from "./components/Pages/Terms And Conditions/TermsAndConditions";
import Support from "./components/Pages/Support/Support";
// import NotFound from "./components/Pages/NotFound/NotFound"; // Optional

const App = () => (
  <BrowserRouter>
    <Header />
    <main style={{ minHeight: "80vh" }}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/features" element={<FeaturesSection />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="data-science" element={<DataScience />} />
        <Route path="/machine-learning" element={<MachineLearning />} />
        <Route
          path="/DashboardVisualization"
          element={<DashboardVisualization />}
        />
        <Route path="/ApiDevelopment" element={<ApiDevelopment />} />
        <Route path="/WebScraping" element={<WebScraping />} />
        <Route path="TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="Support" element={<Support />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
