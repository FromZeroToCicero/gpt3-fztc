import React from "react";

import gpt3Logo from "../../assets/logo.svg";
import {
  FooterContainer,
  FooterHeading,
  Header,
  FooterButtonContainer,
  FooterContent,
  FooterLogoContainer,
  FooterLogo,
  FooterLinksContainer,
  FooterCopyright,
} from "./components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeading>
        <Header>Do you want to step into the <br /> future before others?</Header>
      </FooterHeading>
      <FooterButtonContainer>
        <p>Request Early Access</p>
      </FooterButtonContainer>
      <FooterContent>
        <FooterLogoContainer>
          <FooterLogo src={gpt3Logo} alt="GPT3 logo" />
          <p>Crechterwood K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
        </FooterLogoContainer>
        <FooterLinksContainer>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </FooterLinksContainer>
        <FooterLinksContainer>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </FooterLinksContainer>
        <FooterLinksContainer>
          <h4>Get in touch</h4>
          <p>Crechterwood K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>contact@gpt3.com</p>
        </FooterLinksContainer>
      </FooterContent>
      <FooterCopyright>
        <p>&copy; 2022 GPT-3. All rights reserved.</p>
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
