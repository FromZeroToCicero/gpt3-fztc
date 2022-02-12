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
        <HeaderText>Let's build something amazing with GPT-3 OpenAI</HeaderText>
        <HeaderDescription>
          Third-generation language prediction model in the GPT-n series (and
          the successor to GPT-2) created by OpenAI, a San Francisco-based
          artificial intelligence research laboratory. GPT-3's full version has
          a capacity of 175 billion machine learning parameters.
        </HeaderDescription>
        <HeaderInput>
          <EmailInput type="email" placeholder="Your email address" />
          <EmailButton type="button">Get started</EmailButton>
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
