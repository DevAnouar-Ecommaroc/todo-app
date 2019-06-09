// @flow

import { type Theme as StyledTheme } from "styled-components";

export type Theme = {
  colors: {
    +[string]: string,
  },
} & StyledTheme;

const theme: Theme = {
  colors: {
    transparent: "transparent",
    aquarell: "#536EF6",
    ultraMarineBlue: "#1029FD",
    arcticWhite: "#FBFBFC",
    darkBeige: "#515151",
  },
};

export default theme;
