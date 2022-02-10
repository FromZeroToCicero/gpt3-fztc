import styled from "styled-components";

import { Section, GradientText } from "../../components/shared";

export const WhatGPT3Container = styled(Section)`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background: var(--color-footer);

  /* ff 3.6+ */
  background: -moz-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  /* opera 11.10+ */
  background: -o-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  /* ie 10+ */
  background: -ms-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const WhatGPT3Feature = styled.div`
  display: flex;

  .gpt3__features-container__feature {
    margin: 0;
  }

  .gpt3__features-container_feature-text {
    max-width: 700px;
  }

  @media screen and (max-width: 650px) {
    .gpt3__features-container__feature {
      flex-direction: column;
    }

    .gpt3__features-container_feature-text {
      margin-top: 0.5rem;
    }
  }

  @media screen and (max-width: 350px) {
    .gpt3__features-container__feature {
      margin: 1rem 0;
      min-width: 100%;
    }
  }
`;

export const WhatGPT3Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 4rem 0 2rem;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 0rem;
  }
`;

export const Heading = styled(GradientText)`
  font-family: var(--font-family);
  font-size: 34px;
  line-height: 45px;
  font-weight: 800;
  max-width: 510px;

  @media screen and (max-width: 650px) {
    font-size: 28px;
    line-height: 40px;
  }
`;

export const Text = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: var(--color-subtext);
  cursor: pointer;

  @media screen and (max-width: 850px) {
    margin-top: 1rem;
  }
`;

export const WhatGPT3Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 2rem;

  .gpt3__features-container__feature {
    flex: 1;
    margin: 1rem;
    min-width: 210px;
    display: unset;
    flex-direction: column;
  }

  .gpt3__features-container__feature-text {
    margin-top: 0.5rem;
  }
`;
