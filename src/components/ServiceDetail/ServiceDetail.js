import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useServiceDetail from "../useServiceDetail/useServiceDetail";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);

  const navigate = useNavigate();

  const handleProceedCheckout = () => {
    navigate(`/checkout/${serviceId}`);
  };

  return (
    <div className="container my-4">
      <h1>Service Detail of {service.name}</h1>
      <button onClick={handleProceedCheckout}>Proceed Checkout</button>
    </div>
  );
};

export default ServiceDetail;
