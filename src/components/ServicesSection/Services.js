import { useState } from "react";

const services = [
  { id: "tab-pane-1", title: "Data Science", img: "img/service-1.webp" },
  { id: "tab-pane-2", title: "Machine Learning", img: "img/service-4.jpeg" },

  { id: "tab-pane-3", title: "Deep Learning", img: "img/service-3.webp" },
  { id: "tab-pane-4", title: "AI Automation", img: "img/service-1.jpeg" },
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("tab-pane-1");

  return (
    <div
      className="container-xxl service py-5"
      style={{ backgroundColor: "#DEE3FB" }}
    >
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: "600px" }}>
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
            My Expertise
          </p>
          <h1 className="display-5 mb-5">AI & Data Science Solutions</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="nav nav-pills d-flex flex-column w-100 h-100 me-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  className={`nav-link w-100 text-start border p-4 mb-3 ${
                    activeTab === service.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(service.id)}
                >
                  <h5 className="m-0">
                    <i className="fa fa-brain text-primary me-3"></i>
                    {service.title}
                  </h5>
                </button>
              ))}
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tab-content w-100">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`tab-pane fade ${
                    activeTab === service.id ? "show active" : ""
                  }`}
                >
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute rounded w-100 h-100"
                          src={service.img}
                          style={{ objectFit: "cover" }}
                          alt={service.title}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-4">
                        10+ Years of AI Development Experience
                      </h3>
                      <p className="mb-4">
                        Cutting-edge AI solutions, optimized algorithms, and
                        intelligent automation.
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>AI
                        Model Development
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>Data
                        Preprocessing
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>
                        Deployment & Scaling
                      </p>
                      <a href="/" className="btn btn-primary py-3 px-5 mt-3">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
