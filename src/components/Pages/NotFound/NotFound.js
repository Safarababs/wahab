import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <>
    {/* Page Header Start */}
    <div
      className="container-fluid page-header mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <h1 className="display-3 mb-4 animated slideInDown">404 Error</h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <span>Pages</span>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              404 Error
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/* Page Header End */}

    {/* 404 Start */}
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
            <h1 className="display-1">404</h1>
            <h1 className="mb-4">Page Not Found</h1>
            <p className="mb-4">
              We’re sorry, the page you have looked for does not exist on our
              website!
              <br />
              Maybe go to our home page or try to use a search?
            </p>
            <Link className="btn btn-primary py-3 px-5" to="/">
              Go Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* 404 End */}
  </>
);

export default NotFound;
