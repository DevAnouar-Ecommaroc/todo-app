/* eslint-disable import/no-extraneous-dependencies */

import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(withKnobs);
addDecorator(withA11y);

function loadStories() {
  const req = require.context("../stories", true, /.jsx$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
