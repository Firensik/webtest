import "./PlanStyle.css";
import PlanData from "./PlanData";
import calc from "../assets/calc.avif";
import gym from "../assets/gym.avif";

import React from "react";

const Plan = () => {
  return (
    <div className="plan">
      <h1>Plans</h1>
      <p>Chose your plans</p>
      <div className="planCard">
        <PlanData
          image={calc}
          heading="weight Calculator"
          text="asdasdasdasda"
        />
        <PlanData
          image={gym}
          heading="Creating yours gym plan"
          text="asdasdasdasda"
        />
      </div>
    </div>
  );
};

export default Plan;
