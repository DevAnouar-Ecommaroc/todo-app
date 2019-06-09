/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import TodoItem from "./index";

storiesOf("TodoItem", module).add("default", () => (
  <TodoItem title={text("Title", "A sample TODO!")} />
));
