// @flow

import { type Theme as StyledTheme } from "styled-components";

export type Theme = {
  colors: {
    +[string]: string,
  },
  borderRadius: {
    default: string,
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
  borderRadius: {
    default: "4px",
  },
};

export default theme;
