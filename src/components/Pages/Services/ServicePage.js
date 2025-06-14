import FactsSection from "../../Facts/Facts";
import ServicesSection from "../../ServicesSection/Services";
import WhyChooseUs from "../../WhyChooseUs/WhyChooseUs";
import CallbackForm from "../../ContactForm/ContactForm";
import TestimonialCarousel from "../../Testimonial/Testimonial";
const ServicesPage = () => {
  return (
    <>
      <div
        className="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <h1 className="display-3 mb-4 animated slideInDown">Services</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/">Pages</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Services
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* --- Intro Text --- */}
      <div className="container mb-5">
        <div className="text-center mx-auto" style={{ maxWidth: "700px" }}>
          <h2 className="display-6 mb-3">Python, AI & Data Science Services</h2>
          <p style={{ fontSize: "1.15rem" }}>
            I help businesses unlock the power of their data with custom Python
            solutions. From predictive analytics and machine learning to
            automation and interactive dashboards, I deliver results that drive
            growth and efficiency.
          </p>
        </div>
        {/* --- Highlights --- */}
        <div className="row text-center mt-4">
          <div className="col-md-4 mb-3">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <i className="fa fa-brain fa-2x text-primary mb-2"></i>
              <h5 className="fw-bold mb-2">Machine Learning</h5>
              <p className="mb-0" style={{ fontSize: "1rem" }}>
                Predictive analytics, classification, regression, and clustering
                using Python’s top ML libraries.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <i className="fa fa-database fa-2x text-primary mb-2"></i>
              <h5 className="fw-bold mb-2">Data Engineering</h5>
              <p className="mb-0" style={{ fontSize: "1rem" }}>
                Data cleaning, transformation, and pipeline automation for
                reliable, scalable analytics.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <i className="fa fa-chart-line fa-2x text-primary mb-2"></i>
              <h5 className="fw-bold mb-2">Dashboards & Visualization</h5>
              <p className="mb-0" style={{ fontSize: "1rem" }}>
                Interactive dashboards and clear data visualizations for
                actionable business insights.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* --- End Intro & Highlights --- */}

      <ServicesSection />
      <WhyChooseUs />
      <FactsSection />
      <TestimonialCarousel />
      <CallbackForm />
    </>
  );
};

export default ServicesPage;
