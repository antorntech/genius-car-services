import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  const year = new Date();
  const justYear = year.getFullYear();
  return (
    <footer>
      <p>Copyright © {justYear} by AM Antor</p>
    </footer>
  );
};

export default Footer;
