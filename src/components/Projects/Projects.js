import React, { useEffect } from "react";

const Projects = () => {
  const projects = [
    {
      title: "Financial Planning",
      image: "img/project-1.png",
      link: "#",
    },
    {
      title: "Cash Investment",
      image: "img/project-2.png",
      link: "#",
    },
    {
      title: "Financial Consultancy",
      image: "img/project-3.jpeg",
      link: "#",
    },
    {
      title: "Business Loans",
      image: "img/project-4.jpeg",
      link: "#",
    },
  ];

  useEffect(() => {
    // Initialize Owl Carousel after component has mounted
    if (window.$) {
      window.$(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        items: 1, // You can adjust the number of items visible at once
        autoplay: true, // Optional: Enable autoplay if needed
        autoplayTimeout: 5000, // Optional: Set autoplay timeout
        autoplayHoverPause: true, // Optional: Pause autoplay on hover
      });
    }
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: "600px" }}>
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
            Our Projects
          </p>
          <h1 className="display-5 mb-5">We Have Completed Latest Projects</h1>
        </div>

        <div className="owl-carousel project-carousel">
          {projects.map((project, index) => (
            <div className="project-item pe-5 pb-5" key={index}>
              <div className="project-img mb-3">
                <img
                  className="img-fluid rounded"
                  src={project.image}
                  alt={project.title}
                />
                <a href={project.link}>
                  <i className="fa fa-link fa-3x text-primary"></i>
                </a>
              </div>
              <div className="project-title">
                <h4 className="mb-0">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
