import styled from "styled-components";

import { scaleUpCenter } from "../shared";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;

  @media screen and (max-width: 700px) {
    padding: 2rem 4rem;
  }

  @media screen and (max-width: 550px) {
    padding: 2rem;
  }
`;

export const NavLinks = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavLogo = styled.div`
  margin-right: 2rem;
`;

export const Logo = styled.img`
  width: 62.56px;
  height: 16.02px;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export const SignInContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 550px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: #fff;
  font-family: var(--font-family);
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  margin: 0 1.5rem;
  cursor: pointer;

  @media screen and (max-width: 1100px) {
    margin: 0 0.8rem;
  }
`;

export const SignInText = styled.p`
  color: #fff;
  font-family: var(--font-family);
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  margin: 0 1rem;
  cursor: pointer;
`;

export const SignInButton = styled.button`
  padding: 0.8rem 2.2rem;
  color: #fff;
  background: #ff4820;
  font-family: var(--font-family);
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const MenuWrapper = styled.div`
  margin-left: 1rem;
  display: none;
  position: relative;

  svg {
    cursor: pointer;
  }

  @media screen and (max-width: 1050px) {
    display: flex;
  }
`;

export const MenuLinks = styled(NavLinksContainer)`
  display: none;

  a {
    font-size: 16px;
  }

  .nav-links {
    margin: 0.3em 0.5em;
  }

  @media screen and (max-width: 1050px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  text-align: end;
  background: var(--color-footer);
  padding: 2rem;
  position: absolute;
  top: 40px;
  right: 0px;
  margin-top: 1rem;
  min-width: 210px;
  border-radius: 5px;
  box-shadow: 0 0 5 rgba(0, 0, 0, 0.2);
  -webkit-animation: ${scaleUpCenter} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: ${scaleUpCenter} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  p {
    margin: 1rem 0.5rem;
  }

  @media screen and (max-width: 550px) {
    top: 20px;
  }
`;

export const MenuSignInContainer = styled.div`
  display: none;

  @media screen and (max-width: 550px) {
    display: block;
  }
`;
