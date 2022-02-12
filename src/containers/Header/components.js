import styled from "styled-components";

import { Section, GradientText } from "../../components/shared";

export const HeaderContainer = styled(Section)`
  margin: 0;
  display: flex;

  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;

export const HeaderContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 5rem;

  @media screen and (max-width: 1050px) {
    margin: 0 0 3rem;
  }
`;

export const HeaderText = styled(GradientText)`
  font-family: var(--font-family);
  font-weight: 800;
  font-size: 62px;
  line-height: 75px;
  letter-spacing: -0.04em;

  @media screen and (max-width: 650px) {
    font-size: 48px;
    line-height: 60px;
  }

  @media screen and (max-width: 490px) {
    font-size: 36px;
    line-height: 48px;
  }
`;

export const HeaderDescription = styled.p`
  font-family: var(--font-family);
  font-size: 20px;
  line-height: 27px;
  color: var(--color-text);
  margin-top: 1.5rem;

  @media screen and (max-width: 650px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (max-width: 490px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

export const HeaderInput = styled.div`
  width: 100%;
  margin: 2rem 0 1rem;
  display: flex;
`;

export const EmailInput = styled.input`
  flex: 2;
  width: 100%;
  min-height: 65px;
  background: var(--color-footer);
  color: #fff;
  border: 2px solid var(--color-footer);
  padding: 0 1rem;
  outline: none;
  font-family: var(--font-family);
  font-size: 20px;
  line-height: 27px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  @media screen and (max-width: 650px) {
    font-size: 16px;
    line-height: 24px;
    min-height: 50px;
  }

  @media screen and (max-width: 490px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const EmailButton = styled.button`
  flex: 0.6;
  width: 100%;
  min-height: 65px;
  background: #ff4820;
  font-family: var(--font-family);
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  color: #fff;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 0 1rem;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  @media screen and (max-width: 650px) {
    font-size: 16px;
    line-height: 24px;
    min-height: 50px;
  }

  @media screen and (max-width: 490px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const PeopleContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;

  img {
    width: 181.79px;
    height: 38px;
  }

  p {
    margin: 0 0 0 1rem;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 12px;
    line-height: 38px;
    color: #fff;
    text-align: center;

    @media screen and (max-width: 650px) {
      margin: 0;
    }
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

export const AiImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`;
