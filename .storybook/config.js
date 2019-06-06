import { configure } from "@storybook/react"; // eslint-disable-line import/no-extraneous-dependencies

function loadStories() {
  const req = require.context("../stories", true, /\.stories\.js$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
