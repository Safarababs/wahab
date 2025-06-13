import React from "react";

const Header = () => {
  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div
      className="container-fluid fixed-top px-0 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
        <div className="col-lg-6 px-5 text-start">
          <small>
            <i className="fa fa-map-marker-alt text-primary me-2"></i>123
            Street, New York, USA
          </small>
          <small className="ms-4">
            <i className="fa fa-clock text-primary me-2"></i>9.00 am - 9.00 pm
          </small>
        </div>
        <div className="col-lg-6 px-5 text-end">
          <small>
            <i className="fa fa-envelope text-primary me-2"></i>info@example.com
          </small>
          <small className="ms-4">
            <i className="fa fa-phone-alt text-primary me-2"></i>+012 345 6789
          </small>
        </div>
      </div>

      <nav
        className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ position: "relative" }}
      >
        <a href="/" className="navbar-brand ms-4 ms-lg-0">
          <h1 className="display-5 text-primary m-0">Wahab</h1>
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="/" className="nav-item nav-link active">
              Home
            </a>
            <a href="/" className="nav-item nav-link">
              About
            </a>
            <a href="/" className="nav-item nav-link">
              Services
            </a>
            <div className="nav-item dropdown">
              <a
                href="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu border-light m-0">
                <a href="/" className="dropdown-item">
                  Projects
                </a>
                <a href="/" className="dropdown-item">
                  Features
                </a>
                <a href="/" className="dropdown-item">
                  Team Member
                </a>
                <a href="/" className="dropdown-item">
                  Testimonial
                </a>
                <a href="/" className="dropdown-item">
                  404 Page
                </a>
              </div>
            </div>
            <a href="/" className="nav-item nav-link">
              Contact
            </a>
          </div>
          <div className="d-none d-lg-flex ms-2">
            <a
              className="btn btn-light btn-sm-square rounded-circle ms-3"
              href="/"
            >
              <small className="fab fa-facebook-f text-primary"></small>
            </a>
            <a
              className="btn btn-light btn-sm-square rounded-circle ms-3"
              href="/"
            >
              <small className="fab fa-twitter text-primary"></small>
            </a>
            <a
              className="btn btn-light btn-sm-square rounded-circle ms-3"
              href="/"
            >
              <small className="fab fa-linkedin-in text-primary"></small>
            </a>
          </div>
          {/* Theme Toggle Button */}
          <button
            className="btn btn-primary ms-3"
            onClick={toggleTheme}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 9999,
            }}
          >
            Toggle Theme
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
