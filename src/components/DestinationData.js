import React from "react";
import "./Destination.css";
import image1 from "../assets/zdj1.jpeg";
import image2 from "../assets/zdj2.webp";
import image3 from "../assets/zdj3.webp";
import image4 from "../assets/zdj4.jpg";

const DestinationData = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="desText">
          <h2>{props.heading}</h2>
          <p>{props.text}</p>
        </div>
        <div className="image">
          <img alt="img" src={props.img1} />
          <img alt="img" src={props.img2} />
        </div>
      </div>
    </>
  );
};

export default DestinationData;
