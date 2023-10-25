import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import squat from "../assets/squat.webp";
import Footer from "../components/Footer";
import Plan from "../components/Plan";

const Service = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="heroMid"
        heroImg={squat}
        title="Your New Life Start With Us!!!"
        btnClass="hide"
      />
      <Plan />
      <Footer />
    </>
  );
};

export default Service;
