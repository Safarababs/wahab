import React from "react";
import CallbackForm from "../../ContactForm/ContactForm";

const Support = () => (
  <>
    {/* Page Header Start */}
    <div
      className="container-fluid page-header mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <h1 className="display-3 mb-4 animated slideInDown">Support</h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <span>Pages</span>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Support
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/* Page Header End */}

    {/* Support Content Start */}
    <div className="container-xxl py-5">
      <div className="container bg-light rounded shadow-sm p-4">
        <h2 className="mb-4">How Can I Help You?</h2>
        <p>
          If you have questions, need technical support, or want to discuss a
          project, I’m here to help! Please check the frequently asked questions
          below or use the contact form to reach out directly.
        </p>
        <h4 className="mt-4">Frequently Asked Questions</h4>
        {/* Sleek FAQ Accordion Start */}
        <div className="accordion mb-4" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq1">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
                aria-expanded="true"
                aria-controls="collapse1"
              >
                How do I request a new project?
              </button>
            </h2>
            <div
              id="collapse1"
              className="accordion-collapse collapse show"
              aria-labelledby="faq1"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Simply <a href="/contact">contact me</a> with your requirements
                and I’ll get back to you promptly.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
                aria-expanded="false"
                aria-controls="collapse2"
              >
                What is your response time?
              </button>
            </h2>
            <div
              id="collapse2"
              className="accordion-collapse collapse"
              aria-labelledby="faq2"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                I typically respond to all inquiries within 24 hours.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse3"
                aria-expanded="false"
                aria-controls="collapse3"
              >
                Do you offer ongoing support?
              </button>
            </h2>
            <div
              id="collapse3"
              className="accordion-collapse collapse"
              aria-labelledby="faq3"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes! I provide ongoing support and maintenance for all delivered
                projects.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq4">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse4"
                aria-expanded="false"
                aria-controls="collapse4"
              >
                Can you help with urgent issues?
              </button>
            </h2>
            <div
              id="collapse4"
              className="accordion-collapse collapse"
              aria-labelledby="faq4"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                For urgent support, please mention “URGENT” in your message and
                I’ll prioritize your request.
              </div>
            </div>
          </div>
        </div>
        {/* Sleek FAQ Accordion End */}
      </div>
      <CallbackForm />
    </div>
    {/* Support Content End */}
  </>
);

export default Support;
