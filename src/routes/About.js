import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import bench from "../assets/bench.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="heroMid"
        heroImg={bench}
        title="Your New Life Start With Us!!!"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
};

export default About;
