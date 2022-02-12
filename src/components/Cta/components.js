import styled from "styled-components";

export const CtaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 2rem;
  margin: 4rem;
  border-radius: 1rem;
  background: var(--gradient-text);

  @media screen and (max-width: 1055px) {
    flex-direction: column;
  }

  @media screen and (max-width: 550px) {
    margin: 4rem 2rem;
  }
`;

export const CtaContent = styled.div`
  p {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 12px;
    line-height: 30px;
    color: #0e0e0e;
  }

  h3 {
    font-family: var(--font-family);
    font-weight: 800;
    font-size: 24px;
    line-height: 45px;
    color: #000000;

    @media screen and (max-width: 550px) {
      font-size: 18px;
      line-height: 32px;
    }
  }
`;

export const CtaButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;

  @media screen and (max-width: 1055px) {
    margin: 0;
  }
`;

export const CtaButton = styled.button`
  background: #000000;
  color: #ffffff;
  border-radius: 40px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;
  padding: 0.6rem 2.2rem;
  outline: none;
  border: none;
  cursor: pointer;
  min-width: 150px;

  @media screen and (max-width: 1055px) {
    margin: 2rem 0 0;
  }

  @media screen and (max-width: 550px) {
    font-size: 14px;
    line-height: 28px;
  }
`;
