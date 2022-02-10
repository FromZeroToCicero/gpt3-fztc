import React from "react";

import { Feature } from "../../components";
import {
  WhatGPT3Container,
  WhatGPT3Feature,
  WhatGPT3Heading,
  Heading,
  Text,
  WhatGPT3Content,
} from "./components";

const WhatGPT3 = () => {
  return (
    <WhatGPT3Container id="whatgpt3">
      <WhatGPT3Feature>
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </WhatGPT3Feature>
      <WhatGPT3Heading>
        <Heading>The possibilities are beyond your imagination</Heading>
        <Text>Explore the library</Text>
      </WhatGPT3Heading>
      <WhatGPT3Content>
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."
        />
        <Feature
          title="Education"
          text="At jointure ladyship an inisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."
        />
      </WhatGPT3Content>
    </WhatGPT3Container>
  );
};

export default WhatGPT3;
