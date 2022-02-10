import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import Gpt3Logo from "../../assets/logo.svg";
import {
  NavContainer,
  NavLinks,
  NavLogo,
  Logo,
  NavLinksContainer,
  NavLink,
  SignInContainer,
  SignInText,
  SignInButton,
  MenuWrapper,
  MenuContainer,
  MenuLinks,
  MenuSignInContainer,
} from "./components";

const Menu = () => {
  return (
    <>
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#whatgpt3">What is GPT3?</NavLink>
      <NavLink href="#possibility">Open AI</NavLink>
      <NavLink href="#features">Case Studies</NavLink>
      <NavLink href="#blog">Library</NavLink>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <NavContainer>
      <NavLinks>
        <NavLogo>
          <Logo src={Gpt3Logo} alt="GPT3 Logo" />
        </NavLogo>
        <NavLinksContainer>
          <Menu />
        </NavLinksContainer>
      </NavLinks>
      <SignInContainer>
        <SignInText>Sign in</SignInText>
        <SignInButton type="button">Sign up</SignInButton>
      </SignInContainer>
      <MenuWrapper>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size="27"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size="27"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <MenuContainer>
            <MenuLinks>
              <Menu />
            </MenuLinks>
            <MenuSignInContainer>
              <SignInText>Sign in</SignInText>
              <SignInButton type="button">Sign up</SignInButton>
            </MenuSignInContainer>
          </MenuContainer>
        )}
      </MenuWrapper>
    </NavContainer>
  );
};

export default Navbar;
