import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => setService(json));
  }, []);

  const handleProceedCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="container my-4">
      <h1>Service Detail of {service.name}</h1>
      <button onClick={handleProceedCheckout}>Proceed Checkout</button>
    </div>
  );
};

export default ServiceDetail;
