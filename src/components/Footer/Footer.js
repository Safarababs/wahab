import React from "react";

const Footer = () => (
  <footer>
    <div
      className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Contact</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>Lahore, Pakistan
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3"></i>+92 300 1234567
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>abdul@gmail.com
            </p>
            <div className="d-flex pt-2">
              <a
                className="btn btn-square btn-outline-light rounded-circle me-2"
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-square btn-outline-light rounded-circle me-2"
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-square btn-outline-light rounded-circle me-2"
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                className="btn btn-square btn-outline-light rounded-circle me-2"
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Python Services</h4>
            <a className="btn btn-link" href="/">
              Data Science Solutions
            </a>
            <a className="btn btn-link" href="/">
              Machine Learning Models
            </a>
            <a className="btn btn-link" href="/">
              Web Scraping Automation
            </a>
            <a className="btn btn-link" href="/">
              API Development
            </a>
            <a className="btn btn-link" href="/">
              Dashboard & Visualization
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Quick Links</h4>
            <a className="btn btn-link" href="/">
              About Me
            </a>
            <a className="btn btn-link" href="/">
              Contact
            </a>
            <a className="btn btn-link" href="/">
              Projects
            </a>
            <a className="btn btn-link" href="/">
              Terms & Conditions
            </a>
            <a className="btn btn-link" href="/">
              Support
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Newsletter</h4>
            <p>
              Get updates on new Python and Data Science projects. No spam,
              ever!
            </p>
            <div className="position-relative w-100">
              <input
                className="form-control bg-white border-0 w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid copyright py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy;{" "}
            <a className="border-bottom" href="/">
              Abdul Python Developer
            </a>
            , All Rights Reserved.
          </div>
          <div className="col-md-6 text-center text-md-end">
            Designed & Built by{" "}
            <a className="border-bottom" href="/">
              Abdul Wahab
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
