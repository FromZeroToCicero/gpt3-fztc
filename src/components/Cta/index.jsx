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
        <p>Request early access to get started</p>
        <h3>Register today & start exploring the endless possibilities.</h3>
      </CtaContent>
      <CtaButtonContainer>
        <CtaButton>Get started</CtaButton>
      </CtaButtonContainer>
    </CtaContainer>
  );
};

export default Cta;
