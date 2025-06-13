import React, { useState } from "react";

const TabContent = ({ id, content, activeTab }) => (
  <div
    className={`tab-pane fade ${activeTab === id ? "show active" : ""}`}
    id={id}
    role="tabpanel"
  >
    <p className="mb-0">{content}</p>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
    <div className="h-100">
      <div className="d-flex">
        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
          <i className={`fa ${icon} text-white`} />
        </div>
        <div className="ps-3">
          <h4>{title}</h4>
          <p className="mb-0">{description}</p>{" "}
          {/* Fixed description display */}
        </div>
        <div className="border-end d-none d-lg-block"></div>
      </div>
      <div className="border-bottom mt-4 d-block d-lg-none"></div>
    </div>
  </div>
);

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("nav-story");

  return (
    <div
      className="container-xxl py-5"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="container">
        <div className="row g-4 align-items-end mb-4">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
              About Us
            </p>
            <h1 className="display-5 mb-4">
              Empowering Businesses with Cutting-Edge AI Solutions
            </h1>
            <p className="mb-4">
              We leverage the power of Artificial Intelligence to drive
              innovation and efficiency. Our AI-driven solutions help businesses
              automate processes, gain insights, and enhance decision-making.
            </p>

            <div className="border rounded p-4">
              <nav>
                <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                  {["nav-story", "nav-mission", "nav-vision"].map((tabId) => (
                    <button
                      key={tabId}
                      className={`nav-link fw-semi-bold ${
                        activeTab === tabId ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(tabId)}
                      type="button"
                      role="tab"
                      aria-controls={tabId}
                      aria-selected={activeTab === tabId}
                    >
                      {tabId.replace("nav-", "").charAt(0).toUpperCase() +
                        tabId.replace("nav-", "").slice(1)}
                    </button>
                  ))}
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <TabContent
                  id="nav-story"
                  activeTab={activeTab}
                  content="Our journey began with a passion for AI and its ability to transform industries. Today, we help businesses integrate AI-powered solutions to optimize operations and enhance customer experiences."
                />
                <TabContent
                  id="nav-mission"
                  activeTab={activeTab}
                  content="Our mission is to harness the power of AI to build intelligent, scalable, and efficient solutions that solve real-world challenges and drive business success."
                />
                <TabContent
                  id="nav-vision"
                  activeTab={activeTab}
                  content="We envision a future where AI seamlessly integrates into businesses, enhancing human capabilities, automating complex tasks, and creating innovative opportunities."
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <img
              className="img-fluid rounded"
              src="img/about.png"
              alt="About Us"
            />
          </div>
        </div>

        <div className="border rounded p-4 wow fadeInUp" data-wow-delay="0.1s">
          <div className="row g-4">
            <FeatureCard
              icon="fa-brain"
              title="AI-Powered Solutions"
              description="We develop cutting-edge AI models tailored to your business needs."
            />
            <FeatureCard
              icon="fa-cogs"
              title="Automation & Efficiency"
              description="Automate repetitive tasks and streamline operations with AI."
            />
            <FeatureCard
              icon="fa-chart-line"
              title="Data-Driven Insights"
              description="Leverage AI to gain deep insights and make informed decisions."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
