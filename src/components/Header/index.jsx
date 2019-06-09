// @flow

import * as React from "react";
import { type StyledElementType } from "styled-components";
import { type Theme } from "../../../.styled-components/theme";
import StyledHeader from "./index.styled";

type StyledProps = {
  theme: Theme,
};

type OwnProps = {};

type Props = OwnProps & StyledProps;

function Header(props: Props): React.Element<StyledElementType<"header">> {
  return <StyledHeader {...props} />;
}

export default Header;
