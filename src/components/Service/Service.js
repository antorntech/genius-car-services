import React from "react";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";
import "./Service.css";

const Service = (props) => {
  const { _id, name, price, description, img } = props.service;
  const navigate = useNavigate();

  const handleServiceDetail = (_id) => {
    navigate(`/service/${_id}`);
  };

  return (
    <div className="col">
      <PageTitle title="Service"></PageTitle>
      <div className="card">
        <div className="banner">
          <img className="img-fluid" src={img} alt="" />
        </div>
        <div className="service-details p-3">
          <h3>{name}</h3>
          <p>{description}</p>
          <p>
            <strong>Price: </strong>$ {price}
          </p>
          <Button
            onClick={() => handleServiceDetail(_id)}
            className="service-book-btn"
          >
            Book: {name}{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Service;
