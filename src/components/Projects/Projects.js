import React from "react";

const projects = [
  {
    title: "Data Science Dashboard",
    icon: "fa-chart-line",
    image: "img/project-1.jpg",
    description:
      "Interactive dashboard for data visualization and analytics using Python, Pandas, and Plotly.",
    tags: ["Python", "Pandas", "Plotly"],
    link: "#",
  },
  {
    title: "Machine Learning Model Deployment",
    icon: "fa-robot",
    image: "img/project-2.jpg",
    description:
      "Deployed ML models with Flask and Docker, providing a REST API for predictions.",
    tags: ["Python", "Flask", "Machine Learning"],
    link: "#",
  },
  {
    title: "Web Scraping Automation",
    icon: "fa-spider",
    image: "img/project-3.jpg",
    description:
      "Automated data extraction from websites using BeautifulSoup and Selenium.",
    tags: ["Python", "BeautifulSoup", "Selenium"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="container-xxl feature py-5">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: "600px" }}>
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
            Projects
          </p>
          <h1 className="display-5 mb-5">Python & Data Science Work</h1>
        </div>
        <div className="row g-4 align-items-stretch">
          {projects.map((project, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="feature-box border rounded p-4 h-100 d-flex flex-column">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid rounded mb-3"
                  style={{ minHeight: "180px", objectFit: "cover" }}
                />
                <i className={`fa ${project.icon} fa-3x text-primary mb-3`}></i>
                <h4 className="mb-3">{project.title}</h4>
                <p className="mb-3">{project.description}</p>
                <div className="mb-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="badge bg-primary me-1"
                      style={{
                        background: "var(--primary)",
                        color: "var(--light)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a className="fw-semi-bold mt-auto" href={project.link}>
                  View Project <i className="fa fa-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
