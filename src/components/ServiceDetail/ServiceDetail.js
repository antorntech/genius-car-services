import React from "react";
import { useParams } from "react-router-dom";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h1>Service Detail of {serviceId}</h1>
    </div>
  );
};

export default ServiceDetail;
