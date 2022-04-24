import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import PageTitle from "../PageTitle/PageTitle";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <PageTitle title="Home"></PageTitle>
      <Banner></Banner>
      <Services></Services>
      <Experts></Experts>
    </div>
  );
};

export default Home;
