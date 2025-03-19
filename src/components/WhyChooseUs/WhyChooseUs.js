import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="container-xxl feature py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
              Why Choose Us?
            </p>
            <h1 className="display-5 mb-4">
              Why AI Developers Trust Our Solutions?
            </h1>
            <p className="mb-4">
              Our AI-driven solutions offer seamless automation, optimized
              performance, and unparalleled data security. We empower developers
              with cutting-edge tools for scalable and efficient AI
              applications.
            </p>
            <a className="btn btn-primary py-3 px-5" href="/">
              Learn More
            </a>
          </div>
          <div className="col-lg-6">
            <div className="row g-4 align-items-center">
              <div className="col-md-6">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="feature-box border rounded p-4">
                      <i className="fa fa-rocket fa-3x text-primary mb-3"></i>
                      <h4 className="mb-3">High-Performance AI</h4>
                      <p className="mb-3">
                        Our AI solutions deliver fast, optimized, and scalable
                        computations for data-intensive applications.
                      </p>
                      <a className="fw-semi-bold" href="/">
                        Read More <i className="fa fa-arrow-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="feature-box border rounded p-4">
                      <i className="fa fa-cogs fa-3x text-primary mb-3"></i>
                      <h4 className="mb-3">AI Development Support</h4>
                      <p className="mb-3">
                        Get expert guidance, documentation, and 24/7 support to
                        build robust AI-driven applications.
                      </p>
                      <a className="fw-semi-bold" href="/">
                        Read More <i className="fa fa-arrow-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-box border rounded p-4">
                  <i className="fa fa-shield-alt fa-3x text-primary mb-3"></i>
                  <h4 className="mb-3">Secure & Reliable</h4>
                  <p className="mb-3">
                    We ensure top-notch security protocols to protect AI models
                    and sensitive data from cyber threats.
                  </p>
                  <a className="fw-semi-bold" href="/">
                    Read More <i className="fa fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
