import React from "react";

import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import { Article } from "../../components";
import {
  BlogContainer,
  BlogHeading,
  Header,
  BlogContent,
  BlogContentGroupA,
  BlogContentGroupB,
} from "./components";

const Blog = () => {
  return (
    <BlogContainer id="blog">
      <BlogHeading>
        <Header>A lot is happening, We are blogging about it.</Header>
      </BlogHeading>
      <BlogContent>
        <BlogContentGroupA>
          <Article
            imgUrl={blog01}
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
            date="Sep 25, 2021"
          />
        </BlogContentGroupA>
        <BlogContentGroupB>
          <Article
            imgUrl={blog02}
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
            date="Sep 25, 2021"
          />
          <Article
            imgUrl={blog03}
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
            date="Sep 25, 2021"
          />
          <Article
            imgUrl={blog04}
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
            date="Sep 25, 2021"
          />
          <Article
            imgUrl={blog05}
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
            date="Sep 25, 2021"
          />
        </BlogContentGroupB>
      </BlogContent>
    </BlogContainer>
  );
};

export default Blog;
