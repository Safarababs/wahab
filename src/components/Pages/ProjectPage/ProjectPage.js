import React from "react";

const projects = [
  {
    title: "Data Science Dashboard",
    image: "img/project-1.jpg",
    link: "/",
    description:
      "Interactive dashboard for data visualization and analytics using Python, Pandas, and Plotly.",
    tags: ["Python", "Pandas", "Plotly", "Dashboard"],
  },
  {
    title: "Machine Learning Model Deployment",
    image: "img/project-2.jpg",
    link: "/",
    description:
      "Deployed ML models with Flask and Docker, providing a REST API for predictions.",
    tags: ["ML", "Flask", "Docker", "API"],
  },
  {
    title: "Web Scraping Automation",
    image: "img/project-3.jpg",
    link: "/",
    description:
      "Automated data extraction from websites using BeautifulSoup and Selenium.",
    tags: ["Web Scraping", "BeautifulSoup", "Selenium"],
  },
  {
    title: "AI-Powered Recommendation System",
    image: "img/project-4.jpg",
    link: "/",
    description:
      "Built a recommendation engine using collaborative filtering and Python.",
    tags: ["AI", "Recommendation", "Python"],
  },
];

const ProjectPage = () => (
  <>
    {/* Page Header Start */}
    <div
      className="container-fluid page-header mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <h1 className="display-3 mb-4 animated slideInDown">Projects</h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <span>Pages</span>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Projects
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/* Page Header End */}

    {/* Projects Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 600 }}
        >
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
            My Projects
          </p>
          <h1 className="display-5 mb-5">Python & Data Science Portfolio</h1>
        </div>
        <div className="row g-4">
          {projects.map((project, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <div className="card h-100 shadow-sm border-0 project-card">
                <div className="position-relative overflow-hidden rounded-top">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top project-img"
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                  <a
                    href={project.link}
                    className="project-link-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-link fa-lg text-white"></i>
                  </a>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title mb-2">{project.title}</h5>
                  <p className="card-text mb-3" style={{ fontSize: "1rem" }}>
                    {project.description}
                  </p>
                  <div className="mt-auto">
                    {project.tags &&
                      project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="badge bg-primary bg-opacity-10 text-white fw-normal me-2 mb-2"
                          style={{ fontSize: "0.85em" }}
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* Projects End */}

    {/* Custom styles for project cards */}
    <style>{`
      .project-card {
        transition: transform 0.2s, box-shadow 0.2s;
      }
      .project-card:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.12);
      }
      .project-link-icon {
        position: absolute;
        top: 12px;
        right: 16px;
        background: rgba(0,0,0,0.45);
        border-radius: 50%;
        padding: 8px 10px;
        opacity: 0;
        transition: opacity 0.2s;
        z-index: 2;
      }
      .project-card:hover .project-link-icon {
        opacity: 1;
      }
      .project-img {
        transition: filter 0.2s;
      }
      .project-card:hover .project-img {
        filter: brightness(0.92) blur(1px);
      }
    `}</style>
  </>
);

export default ProjectPage;
