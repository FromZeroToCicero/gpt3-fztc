import styled from "styled-components";

import { Section, GradientText } from "../../components/shared";

export const PossibilityContainer = styled(Section)`
  margin: 0;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;

export const PossibilityImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 2rem;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 950px) {
    margin: 1rem 0;
  }
`;

export const PossibilityContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h4 {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #71e5ff;
  }

  h4:last-child {
    color: #ff8a71;
  }

  @media screen and (max-width: 950px) {
    margin-top: 2rem;
  }
`;

export const Header = styled(GradientText)`
  font-family: var(--font-family);
  font-weight: 800;
  font-size: 34px;
  line-height: 45px;
  margin: 1rem 0;
`;

export const Description = styled.p`
  font-family: var(--font-family);
  font-size: 16px;
  line-height: 30px;
  color: var(--color-text);
  margin-bottom: 2rem;
`;
