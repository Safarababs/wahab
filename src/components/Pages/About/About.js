import React, { useState } from "react";
import FactsSection from "../../Facts/Facts";
import CallbackForm from "../../ContactForm/ContactForm";
import ServicesSection from "../../ServicesSection/Services";
import WhyChooseUs from "../../WhyChooseUs/WhyChooseUs";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("story");

  return (
    <>
      {/* Page Header */}
      <div
        className="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <h1 className="display-3 mb-4 animated slideInDown">About</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/">Pages</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4 align-items-end mb-4">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <img
                className="img-fluid rounded"
                src="img/about.jpg"
                alt="About"
              />
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
                About Me
              </p>
              <h1 className="display-5 mb-4">
                Empowering Businesses with Python & Data Science
              </h1>
              <p className="mb-4">
                I am a passionate Python developer specializing in Data Science,
                Machine Learning, and automation. I help businesses unlock
                insights from data, automate workflows, and build intelligent
                solutions using modern Python tools and libraries.
              </p>
              <div className="border rounded p-4">
                <nav>
                  <div
                    className="nav nav-tabs mb-3"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className={`nav-link fw-semi-bold${
                        activeTab === "story" ? " active" : ""
                      }`}
                      id="nav-story-tab"
                      type="button"
                      role="tab"
                      aria-controls="nav-story"
                      aria-selected={activeTab === "story"}
                      onClick={() => setActiveTab("story")}
                    >
                      Story
                    </button>
                    <button
                      className={`nav-link fw-semi-bold${
                        activeTab === "mission" ? " active" : ""
                      }`}
                      id="nav-mission-tab"
                      type="button"
                      role="tab"
                      aria-controls="nav-mission"
                      aria-selected={activeTab === "mission"}
                      onClick={() => setActiveTab("mission")}
                    >
                      Mission
                    </button>
                    <button
                      className={`nav-link fw-semi-bold${
                        activeTab === "vision" ? " active" : ""
                      }`}
                      id="nav-vision-tab"
                      type="button"
                      role="tab"
                      aria-controls="nav-vision"
                      aria-selected={activeTab === "vision"}
                      onClick={() => setActiveTab("vision")}
                    >
                      Vision
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className={`tab-pane fade${
                      activeTab === "story" ? " show active" : ""
                    }`}
                    id="nav-story"
                    role="tabpanel"
                    aria-labelledby="nav-story-tab"
                  >
                    <p>
                      My journey began with a love for problem-solving and
                      technology. Over the years, I have worked on diverse
                      Python projects, from building data pipelines to deploying
                      machine learning models in production.
                    </p>
                    <p className="mb-0">
                      Today, I collaborate with clients worldwide to deliver
                      robust, scalable, and insightful solutions that drive real
                      business value.
                    </p>
                  </div>
                  <div
                    className={`tab-pane fade${
                      activeTab === "mission" ? " show active" : ""
                    }`}
                    id="nav-mission"
                    role="tabpanel"
                    aria-labelledby="nav-mission-tab"
                  >
                    <p>
                      My mission is to empower organizations by transforming raw
                      data into actionable insights and automating complex
                      processes using Python and AI.
                    </p>
                    <p className="mb-0">
                      I strive to make advanced analytics and automation
                      accessible to everyone, regardless of technical
                      background.
                    </p>
                  </div>
                  <div
                    className={`tab-pane fade${
                      activeTab === "vision" ? " show active" : ""
                    }`}
                    id="nav-vision"
                    role="tabpanel"
                    aria-labelledby="nav-vision-tab"
                  >
                    <p>
                      I envision a future where data-driven decision making and
                      intelligent automation are at the core of every successful
                      business.
                    </p>
                    <p className="mb-0">
                      My goal is to be a trusted partner for companies seeking
                      to innovate and grow with Python and Data Science.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="border rounded p-4 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="row g-4">
              <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                <div className="h-100">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i className="fa fa-brain text-white"></i>
                    </div>
                    <div className="ps-3">
                      <h4>Data Science & AI</h4>
                      <span>
                        Building predictive models, dashboards, and analytics
                        solutions using Python, Pandas, and scikit-learn.
                      </span>
                    </div>
                    <div className="border-end d-none d-lg-block"></div>
                  </div>
                  <div className="border-bottom mt-4 d-block d-lg-none"></div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                <div className="h-100">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i className="fa fa-cogs text-white"></i>
                    </div>
                    <div className="ps-3">
                      <h4>Automation & Scripting</h4>
                      <span>
                        Automating workflows, web scraping, and repetitive tasks
                        to save time and reduce errors.
                      </span>
                    </div>
                    <div className="border-end d-none d-lg-block"></div>
                  </div>
                  <div className="border-bottom mt-4 d-block d-lg-none"></div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                <div className="h-100">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i className="fa fa-rocket text-white"></i>
                    </div>
                    <div className="ps-3">
                      <h4>Deployment & APIs</h4>
                      <span>
                        Deploying machine learning models and building REST APIs
                        with Flask, FastAPI, and Docker.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FactsSection />
      <ServicesSection />

      <WhyChooseUs />
      <CallbackForm />
      {/* About End */}
    </>
  );
};

export default AboutSection;
