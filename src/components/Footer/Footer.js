import React from "react";

const Footer = () => {
  const year = new Date();
  const justYear = year.getFullYear();
  return (
    <div>
      <p>© Copyright - {justYear}</p>
    </div>
  );
};

export default Footer;
