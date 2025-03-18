import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let resizeTimeout; // Declare the variable here

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setIsMobile(window.innerWidth <= 768); // Adjust for mobile screens
      }, 200); // Debounce delay
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup event listener
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="w-100"
              src={isMobile ? "img/land.webp" : "img/carousel-1.jpg"}
              alt={isMobile ? "Landscape for mobile" : "Carousel for desktop"}
            />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-lg-8">
                    <p className="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3 animated slideInDown">
                      Welcome to Abdul
                    </p>
                    <h1 className="display-1 mb-4 animated slideInDown">
                      Hi, I am python Developer
                    </h1>
                    <a
                      href="/"
                      className="btn btn-primary py-3 px-5 animated slideInDown"
                    >
                      Explore Me!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="w-100"
              src={isMobile ? "img/land.webp" : "img/carousel-1.jpg"}
              alt={isMobile ? "Landscape for mobile" : "Carousel for desktop"}
            />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-lg-7">
                    <p className="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3 animated slideInDown">
                      Welcome to Abdul
                    </p>
                    <h1 className="display-1 mb-4 animated slideInDown">
                      True AI Support For Your business
                    </h1>
                    <a
                      href="/"
                      className="btn btn-primary py-3 px-5 animated slideInDown"
                    >
                      Explore Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-container">
          <div id="header-carousel" className="carousel">
            <div className="carousel-inner">
              {/* Your carousel items go here */}
            </div>
          </div>
          <div className="custom-carousel-controls">
            <button
              className="custom-carousel-control-prev"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="next"
            >
              &#x276E;
            </button>
            <button
              className="custom-carousel-control-next"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="prev"
            >
              &#x276F;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
