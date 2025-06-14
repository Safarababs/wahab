import React from "react";
import TestimonialCarousel from "../../Testimonial/Testimonial";
import CallbackForm from "../../ContactForm/ContactForm";

const TestimonialPage = () => {
  return (
    <>
      <div
        className="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <h1 className="display-3 mb-4 animated slideInDown">Testimonial</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <span>Pages</span>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Testimonial
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <TestimonialCarousel />
      <CallbackForm />
    </>
  );
};

export default TestimonialPage;
