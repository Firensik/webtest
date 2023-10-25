import React from "react";
import image1 from "../assets/zdj1.jpeg";
import image2 from "../assets/zdj2.webp";
import image3 from "../assets/zdj3.webp";
import image4 from "../assets/zdj4.jpg";
import "./Destination.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum dolorem,
        tenetur, quo veniam non quia id, tempora ad praesentium cum rem
        doloremque fuga sit sunt quis consequatur culpa nostrum nam!
      </p>
      <DestinationData
        className="firstDes"
        heading="banana2"
        text="aaaaaaaaaaaaaaaaaaaaaaaa"
        img1={image1}
        img2={image2}
      />
      <DestinationData
        className="firstDesReverse"
        heading="banana3"
        text="bbbbbbbbbbbbbbbbbbb"
        img1={image3}
        img2={image4}
      />
    </div>
  );
};

export default Destination;
