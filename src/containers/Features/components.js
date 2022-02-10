import styled from "styled-components";

import { GradientText, Section } from "../../components/shared";

export const FeaturesContainer = styled(Section)`
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media screen and (max-width: 990px) {
    flex-direction: column;
  }
`;

export const FeaturesHeading = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
  margin-right: 5rem;

  @media screen and (max-width: 990px) {
    margin: 0 0 2rem 0;
  }
`;

export const Heading = styled(GradientText)`
  font-family: var(--font-family);
  font-weight: 800;
  font-size: 34px;
  line-height: 45px;

  @media screen and (max-width: 990px) {
    font-size: 28px;
    line-height: 38px;
  }
`;

export const Description = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #ff8a71;
  margin-top: 2rem;
`;

export const FeaturesWrapper = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
