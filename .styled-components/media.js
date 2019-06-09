import { css } from "styled-components";

const screens = {
  tablet: "640px",
  laptop: "1024px",
};

const media = Object.keys(screens).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${screens[label]}) {
      ${css(...args)}
    }
  `;

  return accumulator;
}, {});

export default media;
