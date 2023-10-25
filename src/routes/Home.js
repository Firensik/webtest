import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import banner from "../assets/banner.png";
import Plan from "../components/Plan";
import Destination from "../components/Destination";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={banner}
        title="Go to the f*** gym!"
        text="Start With Us"
        buttonText="Plans"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Plan />
      <Footer />
    </>
  );
};

export default Home;
