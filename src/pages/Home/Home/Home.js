import React from "react";
import Services from "../../Services/Services";
import Footer from "../../Sheard/Footer";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Info from "../info/Info";
import MakeApionment from "../MakeApionment/MakeApionment";
import Testimonim from "../Testimoniam/Testimonim";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <MakeApionment></MakeApionment>
      <Testimonim></Testimonim>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
