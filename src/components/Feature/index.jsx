import React from "react";

import { FeatureContainer, FeatureTitle, FeatureText } from "./components";

const Feature = ({ title, text }) => {
  return (
    <FeatureContainer className="gpt3__features-container__feature">
      <FeatureTitle>
        <div />
        <h1>{title}</h1>
      </FeatureTitle>
      <FeatureText className="gpt3__features-container__feature-text">
        <p>{text}</p>
      </FeatureText>
    </FeatureContainer>
  );
};

export default Feature;
