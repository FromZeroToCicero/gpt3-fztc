import React from "react";

import PeopleImage from "../../assets/people.png";
import AiImage from "../../assets/ai.png";
import {
  HeaderContainer,
  HeaderContent,
  HeaderText,
  HeaderDescription,
  HeaderInput,
  EmailInput,
  EmailButton,
  PeopleContent,
  AiImageContainer,
} from "./components";

const Header = () => {
  return (
    <HeaderContainer id="home">
      <HeaderContent>
        <HeaderText>Let's Build Something amazing with GPT-3 OpenAI</HeaderText>
        <HeaderDescription>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </HeaderDescription>
        <HeaderInput>
          <EmailInput type="email" placeholder="Your Email Address" />
          <EmailButton type="button">Get Started</EmailButton>
        </HeaderInput>
        <PeopleContent>
          <img src={PeopleImage} alt="People registered" />
          <p>1.600 people requested access to visit in the last 24 hours</p>
        </PeopleContent>
      </HeaderContent>
      <AiImageContainer>
        <img src={AiImage} alt="Ai logo" />
      </AiImageContainer>
    </HeaderContainer>
  );
};

export default Header;
