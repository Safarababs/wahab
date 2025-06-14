import React from "react";

const WebScraping = () => (
  <>
    {/* Page Header Start */}
    <div
      className="container-fluid page-header mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <h1 className="display-3 mb-4 animated slideInDown">
          Web Scraping Automation
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
              Web Scraping Automation
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/* Page Header End */}

    {/* Web Scraping Content Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <img
              className="img-fluid rounded shadow"
              src="/img/web-scraping.jpg"
              alt="Web Scraping Automation"
            />
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3 mb-2">
              Python Web Scraping
            </p>
            <h2 className="display-6 mb-3">
              Automate Data Collection Effortlessly
            </h2>
            <p className="mb-4" style={{ fontSize: "1.15rem" }}>
              Automate data collection from websites using Python,
              BeautifulSoup, and Selenium. I deliver robust, maintainable
              scripts for extracting and structuring web data for your business
              intelligence needs.
            </p>
            <ul className="list-unstyled mb-4">
              <li className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>
                Custom web scraping scripts for any website
              </li>
              <li className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>
                Data extraction, cleaning, and transformation
              </li>
              <li className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>
                Automation with scheduling and notifications
              </li>
              <li className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>
                Anti-bot bypass and captcha handling
              </li>
              <li className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>
                Export to CSV, Excel, or databases
              </li>
            </ul>
            <a href="/contact" className="btn btn-primary py-3 px-5">
              Request a Free Quote
            </a>
          </div>
        </div>
        {/* Case Study or Example */}
        <div className="row mt-5">
          <div className="col-lg-10 mx-auto">
            <div className="bg-light rounded p-4 shadow-sm">
              <h4 className="mb-3">
                <i className="fa fa-lightbulb text-primary me-2"></i>
                Example: E-commerce Price Tracker
              </h4>
              <p className="mb-2">
                I recently built a price tracking tool for an e-commerce client.
                Using Python and Selenium, the script automatically collects
                product prices daily, cleans the data, and sends alerts when
                prices drop below a set threshold.
              </p>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  Automated daily scraping and email notifications
                </li>
                <li>
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  Handles login, pagination, and dynamic content
                </li>
                <li>
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  Data export to Google Sheets for analysis
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Web Scraping Content End */}
  </>
);

export default WebScraping;
