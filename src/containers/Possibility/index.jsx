import React from "react";

import PossibilityImg from "../../assets/possibility.png";
import {
  PossibilityContainer,
  PossibilityImage,
  PossibilityContent,
  Header,
  Description,
} from "./components";

const Possibility = () => {
  return (
    <PossibilityContainer id="possibility">
      <PossibilityImage>
        <img src={PossibilityImg} alt="Possibility logo" />
      </PossibilityImage>
      <PossibilityContent>
        <h4>Request early access to get started</h4>
        <Header>The possibilities are beyond your imagination</Header>
        <Description>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </Description>
        <h4>Request early access to get started</h4>
      </PossibilityContent>
    </PossibilityContainer>
  );
};

export default Possibility;
