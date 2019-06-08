/* eslint-disable global-require */

import { createGlobalStyle } from "styled-components";

const reset = `
${require("sanitize.css").toString()}
${require("sanitize.css/page.css").toString()}
${require("sanitize.css/typography.css").toString()}
`;

const StyledReset = createGlobalStyle`${reset}`;

export default StyledReset;
