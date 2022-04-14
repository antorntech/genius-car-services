import React from "react";
import "./Experts.css";

import expert1 from "../../images/experts/expert-1.jpg";
import expert2 from "../../images/experts/expert-2.jpg";
import expert3 from "../../images/experts/expert-3.jpg";
import expert4 from "../../images/experts/expert-4.jpg";
import expert5 from "../../images/experts/expert-5.jpg";
import expert6 from "../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const experts = [
  { id: 1, name: "Will Smith", img: expert1 },
  { id: 2, name: "Chris Rock", img: expert2 },
  { id: 3, name: "Dewain Rock", img: expert3 },
  { id: 4, name: "John Dewo", img: expert4 },
  { id: 5, name: "Arial Frek", img: expert5 },
  { id: 6, name: "Lana Rose", img: expert6 },
];

const Experts = () => {
  return (
    <div className="container my-5">
      <header className="my-4">
        <h1>
          Our <span style={{ color: "#00aefe" }}>Experts</span>
        </h1>
        <div
          className="mx-auto"
          style={{ borderBottom: "2px solid #00aefe", width: "150px" }}
        ></div>
      </header>
      <div className="row row-cols-1 row-cols-lg-3 gy-4">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
