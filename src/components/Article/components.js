import styled from "styled-components";

export const ArticleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--color-footer);
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: var(--color-footer);

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  height: 100%;

  p {
    font-family: var(--font-family);
    font-weight: bold;
    font-size: 11.649px;
    line-height: 35px;
    color: #fff;
  }

  h3 {
    font-family: var(--font-family);
    font-weight: 800;
    font-size: 25.11px;
    line-height: 30px;
    color: #fff;
    margin-bottom: 5rem;
    cursor: pointer;

    @media screen and (max-width: 550px) {
      font-size: 18px;
      line-height: 25px;
    }
  }

  p:last-child {
    cursor: pointer;
  }
`;
