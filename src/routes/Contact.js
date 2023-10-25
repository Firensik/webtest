import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import deadlift from "../assets/deadlift.jpg";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="heroMid"
        heroImg={deadlift}
        title="Your New Life Start With Us!!!"
        btnClass="hide"
      />
      <Footer />
    </>
  );
};

export default Contact;
