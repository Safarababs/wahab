import React from "react";

const ApiDevelopment = () => (
  <>
    {/* Page Header Start */}
    <div
      className="container-fluid page-header mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <h1 className="display-3 mb-4 animated slideInDown">API Development</h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <span>Python Services</span>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              API Development
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/* Page Header End */}

    {/* API Development Content Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <img
              className="img-fluid rounded shadow"
              src="img/api.webp"
              alt="API Development"
            />
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3 mb-2">
              Python API Services
            </p>
            <h2 className="display-6 mb-3">Connect Your Data to the World</h2>
            <p className="mb-4" style={{ fontSize: "1.15rem" }}>
              Build secure and scalable REST APIs using Flask or FastAPI. I help
              you connect your data, models, and services to the world with
              robust Python-based APIs, enabling seamless integration with web,
              mobile, and third-party platforms.
            </p>
            <ul className="list-unstyled mb-4">
              <li className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>
                RESTful API design & implementation
              </li>
              <li className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>
                Authentication & authorization (JWT, OAuth)
              </li>
              <li className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>
                Integration with databases & ML models
              </li>
              <li className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>
                FastAPI & Flask for high performance
              </li>
              <li className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>
                Dockerized deployment & cloud readiness
              </li>
            </ul>
            <a href="/contact" className="btn btn-primary py-3 px-5">
              Request a Free Consultation
            </a>
          </div>
        </div>
        {/* Case Study or Example */}
        <div className="row mt-5">
          <div className="col-lg-10 mx-auto">
            <div className="bg-light rounded p-4 shadow-sm">
              <h4 className="mb-3">
                <i className="fa fa-lightbulb text-primary me-2"></i>
                Example: ML Model API for E-commerce
              </h4>
              <p className="mb-2">
                I recently developed a FastAPI-based REST service for an
                e-commerce client. The API exposes a machine learning model for
                real-time product recommendations, allowing seamless integration
                with their website and mobile app.
              </p>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  Secure endpoints with JWT authentication
                </li>
                <li>
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  Real-time predictions from deployed ML models
                </li>
                <li>
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  Dockerized for easy deployment on AWS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* API Development Content End */}
  </>
);

export default ApiDevelopment;
