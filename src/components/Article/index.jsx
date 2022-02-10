import React from "react";

import { ArticleContainer, ImageContainer, ArticleContent } from "./components";

const Article = ({ imgUrl, date, title }) => {
  return (
    <ArticleContainer className="gpt3__blog-container_article">
      <ImageContainer className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="Blog img url" />
      </ImageContainer>
      <ArticleContent>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </ArticleContent>
    </ArticleContainer>
  );
};

export default Article;
