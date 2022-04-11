import React from "react";
import { Button } from "react-bootstrap";
import "./Service.css";

const Service = (props) => {
  const { id, name, price, description, img } = props.service;
  return (
    <div className="col">
      <div className="card">
        <div className="banner">
          <img className="img-fluid" src={img} alt="" />
        </div>
        <div className="service-details p-3">
          <h3>{name}</h3>
          <p>{description}</p>
          <p>
            <strong>Price: </strong>${price}
          </p>
          <Button className="service-book-btn">Book: {name} </Button>
        </div>
      </div>
    </div>
  );
};

export default Service;
