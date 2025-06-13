// TestimonialCarousel.jsx
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const testimonials = [
  {
    text: "Working with Abdul was a fantastic experience. His expertise in Python and data science helped us unlock valuable insights from our data and automate key business processes.",
    name: "Sarah Williams",
    profession: "Business Analyst",
  },
  {
    text: "Abdul delivered a robust machine learning model for our project. His clear communication and technical skills made the whole process smooth and successful.",
    name: "James Lee",
    profession: "Project Manager",
  },
  {
    text: "We needed a custom data scraping solution, and Abdul exceeded our expectations. The scripts are efficient, well-documented, and easy to maintain.",
    name: "Priya Patel",
    profession: "Data Engineer",
  },
  {
    text: "Abdul’s dashboards have transformed the way we visualize and understand our business metrics. Highly recommended for any data-driven project!",
    name: "Michael Chen",
    profession: "Operations Lead",
  },
];

const TestimonialCarousel = () => (
  <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 600 }}
      >
        <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
          Testimonial
        </p>
        <h1 className="display-5 mb-5">What Our Clients Say!</h1>
      </div>
      <OwlCarousel
        className="owl-theme testimonial-carousel wow fadeInUp"
        data-wow-delay="0.3s"
        loop
        margin={30}
        nav
        dots={false}
        responsive={{
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 },
        }}
      >
        {testimonials.map((t, idx) => (
          <div className="testimonial-item" key={idx}>
            <div className="testimonial-text border rounded p-4 pt-5 mb-5">
              <div className="btn-square bg-white border rounded-circle">
                <i className="fa fa-quote-right fa-2x text-primary"></i>
              </div>
              {t.text}
            </div>

            <h4>{t.name}</h4>
            <span>{t.profession}</span>
          </div>
        ))}
      </OwlCarousel>
    </div>
  </div>
);

export default TestimonialCarousel;
