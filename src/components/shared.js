import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  background: -moz-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* opera 11.10+ */
  background: -o-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* ie 10+ */
  background: -ms-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );
`;

export const GradientText = styled.p`
  background: var(--gradient-text);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Section = styled.section`
  padding: 4rem 6rem;
  margin: 4rem 6rem;

  @media screen and (max-width: 700px) {
    padding: 4rem;
    margin: 4rem;
  }

  @media screen and (max-width: 550px) {
    padding: 4rem 2rem;
    margin: 4rem 2rem;
  }
`;

export const scaleUpCenter = keyframes`
  0% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

export const ScaleUpCenter = styled.div`
  -webkit-animation: ${scaleUpCenter} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: ${scaleUpCenter} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;
