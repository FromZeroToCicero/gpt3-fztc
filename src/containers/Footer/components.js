import styled from "styled-components";

import { Section, GradientText } from "../../components/shared";

export const FooterContainer = styled(Section)`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-footer);
`;

export const FooterHeading = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 3rem;
`;

export const Header = styled(GradientText)`
  font-family: var(--font-family);
  font-weight: 800;
  font-size: 62px;
  line-height: 75px;
  text-align: center;
  letter-spacing: -0.04em;

  @media screen and (max-width: 850px) {
    font-size: 44px;
    line-height: 50px;
  }

  @media screen and (max-width: 550px) {
    font-size: 34px;
    line-height: 42px;
  }

  @media screen and (max-width: 400px) {
    font-size: 27px;
    line-height: 38px;
  }
`;

export const FooterButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 1px solid #fff;
  text-align: center;
  margin-bottom: 10rem;
  cursor: pointer;

  p {
    box-sizing: border-box;
    font-family: var(--font-family);
    font-size: 18px;
    line-height: 21px;
    color: #fff;
    word-spacing: 2px;

    @media screen and (max-width: 550px) {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  text-align: left;
`;

export const FooterLogoContainer = styled.div`
  width: 250px;
  margin: 1rem;
  display: flex;
  flex-direction: column;

  p {
    font-family: var(--font-family);
    font-size: 12px;
    line-height: 14px;
    color: #fff;
  }

  @media screen and (max-width: 550px) {
    margin: 1rem 0;
  }
`;

export const FooterLogo = styled.img`
  width: 118px;
  height: 30px;
  margin-bottom: 1rem;
`;

export const FooterLinksContainer = styled.div`
  width: 250px;
  margin: 1rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  h4 {
    font-family: var(--font-family);
    font-size: 14px;
    line-height: 16px;
    color: #fff;
    margin-bottom: 1rem;
  }

  p {
    font-family: var(--font-family);
    font-size: 12px;
    line-height: 14px;
    color: #fff;
    cursor: pointer;
    margin: 0.5rem 0;
  }

  @media screen and (max-width: 550px) {
    margin: 1rem 0;
  }
`;

export const FooterCopyright = styled.div`
  margin-top: 2rem;
  text-align: center;
  width: 100%;

  p {
    font-family: var(--font-family);
    font-size: 12px;
    line-height: 14px;
    color: #fff;
  }
`;
