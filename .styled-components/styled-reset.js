/* eslint-disable global-require */

import { createGlobalStyle } from "styled-components";

const reset = `
${require("sanitize.css").toString()}
${require("sanitize.css/page.css").toString()}
${require("sanitize.css/typography.css").toString()}
`;

const StyledReset = createGlobalStyle`
  ${reset}
  
  body {
    font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: ${({ theme: { colors } }) => colors.darkBeige};
    -webkit-font-smoothing: antialiased;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

export default StyledReset;
