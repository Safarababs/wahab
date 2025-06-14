import React from "react";

const DashboardVisualization = () => (
  <>
    {/* Page Header Start */}
    <div
      className="container-fluid page-header mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <h1 className="display-3 mb-4 animated slideInDown">
          Dashboard & Visualization
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
              Dashboard & Visualization
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/* Page Header End */}

    {/* Dashboard & Visualization Content Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <img
              className="img-fluid rounded shadow"
              src="img/dashboard.webp"
              alt="Dashboard & Visualization"
            />
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3 mb-2">
              Python Dashboards
            </p>
            <h2 className="display-6 mb-3">
              See Your Data, Make Better Decisions
            </h2>
            <p className="mb-4" style={{ fontSize: "1.15rem" }}>
              Transform your data into actionable insights with interactive
              dashboards and visualizations. I design and build custom
              dashboards for real-time monitoring and reporting using Plotly,
              Dash, Power BI, and more.
            </p>
            <ul className="list-unstyled mb-4">
              <li className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>
                Interactive dashboards for business intelligence
              </li>
              <li className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>
                Real-time data monitoring and alerts
              </li>
              <li className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>
                Custom visualizations with Plotly, Dash, and Power BI
              </li>
              <li className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>
                Automated reporting and scheduled exports
              </li>
              <li className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>
                User-friendly interfaces for non-technical teams
              </li>
            </ul>
            <a href="/contact" className="btn btn-primary py-3 px-5">
              Request a Demo
            </a>
          </div>
        </div>
        {/* Case Study or Example */}
        <div className="row mt-5">
          <div className="col-lg-10 mx-auto">
            <div className="bg-light rounded p-4 shadow-sm">
              <h4 className="mb-3">
                <i className="fa fa-lightbulb text-primary me-2"></i>
                Example: Executive KPI Dashboard
              </h4>
              <p className="mb-2">
                I recently delivered an executive KPI dashboard for a logistics
                company. Using Python, Plotly Dash, and live data feeds, I
                created a real-time dashboard that allowed management to track
                shipments, costs, and performance metrics at a glance.
              </p>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  Live data integration from multiple sources
                </li>
                <li>
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  Custom charts and drill-down analytics
                </li>
                <li>
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  Exportable reports for board meetings
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Dashboard & Visualization Content End */}
  </>
);

export default DashboardVisualization;
