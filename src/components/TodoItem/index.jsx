// @flow

import * as React from "react";
import { type Theme } from "../../../.styled-components/theme";
import StyledWrapper from "./index.styled";

type StyledProps = {
  theme: Theme,
};

type OwnProps = {
  title: string,
};

type Props = OwnProps & StyledProps;

function TodoItem(props: Props): React.Element<typeof StyledWrapper> {
  const { title } = props;

  return (
    <StyledWrapper {...props}>
      <div>{title}</div>
    </StyledWrapper>
  );
}

export default TodoItem;
