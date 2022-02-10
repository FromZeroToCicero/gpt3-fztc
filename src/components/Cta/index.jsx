import React from "react";

import {
  CtaContainer,
  CtaContent,
  CtaButtonContainer,
  CtaButton,
} from "./components";

const Cta = () => {
  return (
    <CtaContainer>
      <CtaContent>
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possibilities.</h3>
      </CtaContent>
      <CtaButtonContainer>
        <CtaButton>Get Started</CtaButton>
      </CtaButtonContainer>
    </CtaContainer>
  );
};

export default Cta;
