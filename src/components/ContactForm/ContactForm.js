import { useState } from "react";

const CallbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add form submission logic here (e.g., API call)
  };

  return (
    <div className="container-fluid callback my-5 pt-5">
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="bg-white border rounded p-4 p-sm-5">
              <div
                className="text-center mx-auto"
                style={{ maxWidth: "600px" }}
              >
                <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
                  Get In Touch
                </p>
                <h1 className="display-5 mb-5">Consult With an AI Expert</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="mobile"
                        name="mobile"
                        placeholder="Your Mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="mobile">Your Mobile</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="projectType"
                        name="projectType"
                        placeholder="Project Type"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="projectType">Project Type</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        placeholder="Briefly describe your AI needs"
                        style={{ height: "100px" }}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <label htmlFor="message">Project Details</label>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Request Consultation
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallbackForm;
