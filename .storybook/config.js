/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { ThemeProvider } from "styled-components";
import { theme } from "../.styled-components";

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));

function loadStories() {
  const req = require.context("../src/components", true, /\.stories\.jsx$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
