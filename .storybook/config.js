/* eslint-disable import/no-extraneous-dependencies */

import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

addDecorator(withKnobs);

function loadStories() {
  const req = require.context("../stories", true, /.jsx$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
