import React from "react";

import { Feature } from "../../components";
import {
  FeaturesContainer,
  FeaturesHeading,
  Heading,
  Description,
  FeaturesWrapper
} from "./components";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among other things are leave law built now. In built table in an rapid blush.",
  },
];

const Features = () => {
  return (
    <FeaturesContainer id="features">
      <FeaturesHeading>
        <Heading>
          The Future is now and You Just Need To Realize It. Step into the
          Future Today & Make it Happen.
        </Heading>
        <Description>Request early Access to Get Started</Description>
      </FeaturesHeading>
      <FeaturesWrapper>
        {featuresData.map((item, index) => (
          <Feature key={index} title={item.title} text={item.text} />
        ))}
      </FeaturesWrapper>
    </FeaturesContainer>
  );
};

export default Features;