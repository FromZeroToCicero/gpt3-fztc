import styled from "styled-components";

export const FeatureContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  margin: 1rem;

  @media screen and (max-width: 550px) {
    margin: 1rem 0;
  }
`;

export const FeatureTitle = styled.div`
  flex: 1;
  max-width: 180px;
  margin-right: 2rem;

  h1 {
    font-family: var(--font-family);
    font-weight: 800;
    font-size: 21px;
    line-height: 24px;
    letter-spacing: -0.04em;
    color: #fff;

    @media screen and (max-width: 550px) {
      font-size: 14px;
      line-height: 22px;
    }
  }

  div {
    width: 38px;
    height: 3px;
    background: var(--gradient-bar);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 0.75rem;
  }
`;

export const FeatureText = styled.div`
  flex: 2;
  max-width: 390px;
  display: flex;

  p {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-text);
    margin-right: 0.5rem;

    @media screen and (max-width: 550px) {
      font-size: 12px;
      line-height: 20px;
    }
  }
`;
