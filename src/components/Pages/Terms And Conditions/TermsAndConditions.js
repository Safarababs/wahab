import React from "react";
import CallbackForm from "../../ContactForm/ContactForm";

const TermsAndConditions = () => (
  <>
    {/* Page Header Start */}
    <div
      className="container-fluid page-header mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <h1 className="display-3 mb-4 animated slideInDown">
          Terms & Conditions
        </h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <span>Pages</span>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Terms & Conditions
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/* Page Header End */}

    {/* Terms Content Start */}
    <div className="container-xxl py-5">
      <div className="container bg-light rounded shadow-sm p-4">
        <h2 className="mb-4">Welcome to Abdul Python Developer</h2>
        <p>
          These terms and conditions outline the rules and regulations for the
          use of Abdul Wahab's website and services. By accessing this website,
          you accept these terms in full. Do not continue to use the site if you
          do not accept all of the terms and conditions stated on this page.
        </p>
        <h4 className="mt-4">1. Intellectual Property Rights</h4>
        <p>
          Unless otherwise stated, Abdul Wahab owns the intellectual property
          rights for all material on this website. All intellectual property
          rights are reserved. You may access this from the website for your own
          personal use, subject to restrictions set in these terms and
          conditions.
        </p>
        <h4 className="mt-4">2. Restrictions</h4>
        <ul>
          <li>
            You are specifically restricted from publishing any website material
            in any other media.
          </li>
          <li>
            You may not sell, sublicense, or commercialize any website material.
          </li>
          <li>
            You may not use this website in any way that is damaging to the
            website or to any person or business entity.
          </li>
        </ul>
        <h4 className="mt-4">3. Your Content</h4>
        <p>
          By submitting content (such as testimonials or project details), you
          grant Abdul Wahab a non-exclusive license to use, reproduce, and edit
          any of your content in connection with the website.
        </p>
        <h4 className="mt-4">4. No warranties</h4>
        <p>
          This website is provided “as is,” with all faults, and Abdul Wahab
          expresses no representations or warranties of any kind related to this
          website or the materials contained on this website.
        </p>
        <h4 className="mt-4">5. Limitation of liability</h4>
        <p>
          In no event shall Abdul Wahab, nor any of his officers, directors, or
          employees, be held liable for anything arising out of or in any way
          connected with your use of this website.
        </p>
        <h4 className="mt-4">6. Changes to Terms</h4>
        <p>
          Abdul Wahab reserves the right to revise these terms at any time as he
          sees fit. By using this website, you are expected to review these
          terms on a regular basis.
        </p>
        <p className="mt-4">
          If you have any questions about these Terms & Conditions, please{" "}
          <a href="/contact">contact me</a>.
        </p>
      </div>
      <CallbackForm />
    </div>
    {/* Terms Content End */}
  </>
);

export default TermsAndConditions;
