import React from "react";

const factsData = [
  { icon: "fa-users", count: 1234, label: "Happy Clients", delay: "0.1s" },
  { icon: "fa-check", count: 1234, label: "Projects Completed", delay: "0.3s" },
  {
    icon: "fa-users-cog",
    count: 1234,
    label: "Dedicated Staff",
    delay: "0.5s",
  },
  { icon: "fa-award", count: 1234, label: "Awards Achieved", delay: "0.7s" },
];

const FactCard = ({ icon, count, label, delay }) => (
  <div
    className="col-sm-6 col-lg-3 text-center wow fadeIn"
    data-wow-delay={delay}
  >
    <i className={`fa ${icon} fa-3x text-white mb-3`}></i>
    <h1 className="display-4 text-white" data-toggle="counter-up">
      {count}
    </h1>
    <span className="fs-5 text-white">{label}</span>
    <hr className="bg-white w-25 mx-auto mb-0" />
  </div>
);

const FactsSection = () => {
  return (
    <div className="container-fluid facts my-5 py-5">
      <div className="container py-5">
        <div className="row g-5">
          {factsData.map((fact, index) => (
            <FactCard key={index} {...fact} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FactsSection;
