import "./PlanStyle.css";

import React from "react";

const PlanData = (props) => {
  return (
    <div className="pCard">
      <div className="pImage">
        <img alt="image" src={props.image} />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default PlanData;
