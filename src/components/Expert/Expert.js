import React from "react";
import { Link } from "react-router-dom";
import "./Expert.css";

const Expert = (props) => {
  const { id, name, img } = props.expert;
  return (
    <div className="col">
      <div className="card">
        <div className="expert-banner">
          <img src={img} alt="" />
        </div>
        <div className="card-body expert-details">
          <h3 className="card-title">{name}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            delectus, laborum ullam reiciendis tenetur praesentium dolores
            suscipit aliquid error blanditiis sed.
          </p>
          <Link className="expert-details-btn" to="#">
            Expert Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Expert;
