import styled from "styled-components";

import { Section, GradientText } from "../../components/shared";

export const BlogContainer = styled(Section)`
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const BlogHeading = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 5rem;
`;

export const Header = styled(GradientText)`
  font-family: var(--font-family);
  font-weight: 800;
  font-size: 62px;
  line-height: 75px;
  letter-spacing: -0.04em;

  @media screen and (max-width: 700px) {
    font-size: 46px;
    line-height: 52px;
  }

  @media screen and (max-width: 550px) {
    font-size: 34px;
    line-height: 42px;
  }
`;

export const BlogContent = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 990px) {
    flex-direction: column-reverse;
  }
`;

export const BlogContentGroupA = styled.div`
  flex: 0.75;
  margin-right: 2rem;

  @media screen and (max-width: 990px) {
    margin: 2rem 0;

    .gpt3__blog-container_article {
      width: 48%;
    }

    .gpt3__blog-container_article-image {
      height: 250px;
    }
  }

  @media screen and (max-width: 700px) {
    .gpt3__blog-container_article {
      width: 100%;
    }
  }
`;

export const BlogContentGroupB = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
