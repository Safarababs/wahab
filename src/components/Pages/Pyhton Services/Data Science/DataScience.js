import React from "react";

const DataScience = () => (
  <>
    {/* Page Header Start */}
    <div
      className="container-fluid page-header mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <h1 className="display-3 mb-4 animated slideInDown">
          Data Science Solutions
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
              Data Science Solutions
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/* Page Header End */}

    {/* Data Science Content Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <img
              className="img-fluid rounded shadow"
              src="img/service-1.webp"
              alt="Data Science Solutions"
            />
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3 mb-2">
              Python Data Science
            </p>
            <h2 className="display-6 mb-3">Unlock Insights, Drive Decisions</h2>
            <p className="mb-4" style={{ fontSize: "1.15rem" }}>
              Transform your raw data into actionable business intelligence. I
              provide end-to-end data science solutions, from data cleaning and
              exploration to advanced analytics and visualization. My expertise
              helps you make data-driven decisions with confidence.
            </p>
            <ul className="list-unstyled mb-4">
              <li className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>
                Data cleaning, wrangling, and preprocessing
              </li>
              <li className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>
                Exploratory data analysis & feature engineering
              </li>
              <li className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>
                Statistical modeling & hypothesis testing
              </li>
              <li className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>
                Interactive dashboards & custom reports
              </li>
              <li className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>
                Visualization with Matplotlib, Seaborn, Plotly, and more
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
                Example: Sales Analytics Dashboard
              </h4>
              <p className="mb-2">
                Recently, I developed a sales analytics dashboard for a retail
                client. Using Python, Pandas, and Plotly Dash, I automated data
                collection, performed in-depth analysis, and delivered an
                interactive dashboard that allowed the client to monitor KPIs
                and spot trends in real time.
              </p>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  Automated daily data updates from multiple sources
                </li>
                <li>
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  Visualized sales by region, product, and time period
                </li>
                <li>
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  Enabled drill-down and export features for management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Data Science Content End */}
  </>
);

export default DataScience;
