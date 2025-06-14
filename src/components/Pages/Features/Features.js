import React from "react";

const FeaturesSection = () => (
  <>
    {/* Page Header */}
    <div
      className="container-fluid page-header mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <h1 className="display-3 mb-4 animated slideInDown">Features</h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/">Pages</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Features
            </li>
          </ol>
        </nav>
      </div>
    </div>

    {/* Features Start */}
    <div className="container-xxl feature py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
              Why Choose Me?
            </p>
            <h1 className="display-5 mb-4">
              What Makes My Python & Data Science Services Stand Out
            </h1>
            <p className="mb-4">
              I combine deep technical expertise with a passion for solving
              real-world problems. My solutions are tailored, scalable, and
              built using the latest Python, AI, and data science tools. Whether
              you need predictive analytics, automation, or custom dashboards, I
              deliver results that empower your business.
            </p>
            <a className="btn btn-primary py-3 px-5" href="/contact">
              Let's Work Together
            </a>
          </div>
          <div className="col-lg-6">
            <div className="row g-4 align-items-center">
              <div className="col-md-6">
                <div className="row g-4">
                  <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                    <div className="feature-box border rounded p-4">
                      <i className="fa fa-bolt fa-3x text-primary mb-3"></i>
                      <h4 className="mb-3">Fast & Reliable Delivery</h4>
                      <p className="mb-3">
                        Rapid prototyping and on-time project completion using
                        agile methods and best Python practices.
                      </p>
                      <a className="fw-semi-bold" href="/projects">
                        Read More <i className="fa fa-arrow-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                    <div className="feature-box border rounded p-4">
                      <i className="fa fa-user-cog fa-3x text-primary mb-3"></i>
                      <h4 className="mb-3">Expert Guidance & Support</h4>
                      <p className="mb-3">
                        Personalized consulting, clear communication, and
                        ongoing support for every project.
                      </p>
                      <a className="fw-semi-bold" href="/contact">
                        Read More <i className="fa fa-arrow-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 wow fadeIn" data-wow-delay="0.7s">
                <div className="feature-box border rounded p-4">
                  <i className="fa fa-shield-alt fa-3x text-primary mb-3"></i>
                  <h4 className="mb-3">Secure & Scalable Solutions</h4>
                  <p className="mb-3">
                    Robust code, data privacy, and scalable architectures for
                    production-ready Python and AI systems.
                  </p>
                  <a className="fw-semi-bold" href="/about">
                    Read More <i className="fa fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Features End */}
  </>
);

export default FeaturesSection;
