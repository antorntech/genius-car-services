import React from "react";
import useServices from "../../hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useServices();
  return (
    <div className="container my-5">
      <header className="my-4">
        <h1>
          Our <span style={{ color: "#00aefe" }}>Services</span>
        </h1>
        <div
          className="mx-auto"
          style={{ borderBottom: "2px solid #00aefe", width: "150px" }}
        ></div>
      </header>
      <div className="row row-cols-1 row-cols-lg-3 gy-4">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
