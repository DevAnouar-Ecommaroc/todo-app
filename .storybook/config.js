import { configure } from "@storybook/react"; // eslint-disable-line import/no-extraneous-dependencies

function loadStories() {
  const req = require.context("../stories", true, /.jsx$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
