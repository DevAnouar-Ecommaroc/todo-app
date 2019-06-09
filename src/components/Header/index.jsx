// @flow

import * as React from "react";
import { type Theme } from "../../../.styled-components/theme";
import StyledHeader from "./index.styled";

type StyledProps = {
  theme: Theme,
};

type OwnProps = {};

type Props = OwnProps & StyledProps;

function Header(props: Props): React.Element<typeof StyledHeader> {
  return <StyledHeader {...props} role="banner" />;
}

export default Header;
