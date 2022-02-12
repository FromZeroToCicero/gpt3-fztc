import React, { useState, useRef, useEffect } from "react";
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

const Menu = ({ onClick }) => {
  return (
    <>
      <NavLink className="nav-links" href="#home" onClick={onClick}>
        Home
      </NavLink>
      <NavLink className="nav-links" href="#whatgpt3" onClick={onClick}>
        What is GPT3?
      </NavLink>
      <NavLink className="nav-links" href="#possibility" onClick={onClick}>
        Open AI
      </NavLink>
      <NavLink className="nav-links" href="#features" onClick={onClick}>
        Case Studies
      </NavLink>
      <NavLink className="nav-links" href="#blog" onClick={onClick}>
        Library
      </NavLink>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navbar = useRef(null);

  useEffect(() => {
    const handleClickOutsideNavbar = (event) => {
      if (
        navbar &&
        toggleMenu &&
        !navbar.current.contains(event.target)
      ) {
        setToggleMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideNavbar);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideNavbar);
    };
  }, [setToggleMenu, toggleMenu]);

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
          <MenuContainer ref={navbar}>
            <MenuLinks>
              <Menu onClick={() => setToggleMenu(false)} />
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
