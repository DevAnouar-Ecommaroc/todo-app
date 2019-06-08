/* eslint-disable global-require */

import { createGlobalStyle } from "styled-components";

const fonts = `
${require("../static/css/fonts.css").toString()}
`;

const StyledFonts = createGlobalStyle`${fonts}`;

export default StyledFonts;
