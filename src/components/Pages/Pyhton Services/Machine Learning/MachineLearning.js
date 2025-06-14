import React from "react";

const MachineLearning = () => (
  <>
    {/* Page Header Start */}
    <div
      className="container-fluid page-header mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <h1 className="display-3 mb-4 animated slideInDown">
          Machine Learning Models
        </h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <span>Python Services</span>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Machine Learning Models
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/* Page Header End */}

    {/* Machine Learning Content Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <img
              className="img-fluid rounded shadow"
              src="/img/machine-learning.jpg"
              alt="Machine Learning Models"
            />
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3 mb-2">
              Python Machine Learning
            </p>
            <h2 className="display-6 mb-3">Build Smarter Solutions with AI</h2>
            <p className="mb-4" style={{ fontSize: "1.15rem" }}>
              From regression and classification to clustering and
              recommendation systems, I develop, train, and deploy machine
              learning models using Python, scikit-learn, and TensorFlow to
              solve real-world business problems.
            </p>
            <ul className="list-unstyled mb-4">
              <li className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>
                Predictive analytics & forecasting
              </li>
              <li className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>
                Classification & regression models
              </li>
              <li className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>
                Clustering & segmentation
              </li>
              <li className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>
                Recommendation engines
              </li>
              <li className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>
                Model deployment & monitoring
              </li>
            </ul>
            <a href="/contact" className="btn btn-primary py-3 px-5">
              Request a Consultation
            </a>
          </div>
        </div>
        {/* Case Study or Example */}
        <div className="row mt-5">
          <div className="col-lg-10 mx-auto">
            <div className="bg-light rounded p-4 shadow-sm">
              <h4 className="mb-3">
                <i className="fa fa-lightbulb text-primary me-2"></i>
                Example: Customer Churn Prediction
              </h4>
              <p className="mb-2">
                I recently built a customer churn prediction model for a telecom
                client. Using Python, scikit-learn, and pandas, I engineered
                features, trained multiple algorithms, and deployed the best
                model as a REST API for real-time predictions.
              </p>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  Data preprocessing and feature engineering
                </li>
                <li>
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  Model selection and hyperparameter tuning
                </li>
                <li>
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  API deployment for integration with CRM
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Machine Learning Content End */}
  </>
);

export default MachineLearning;
