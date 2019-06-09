// @flow

import styled, { css, type StyledElementType } from "styled-components";
import { type Theme } from "../../../.styled-components/theme";

type StyledProps = {
  theme: Theme,
};

type OwnProps = {};

type Props = OwnProps & StyledProps;

const StyledWrapper: StyledElementType<"div"> = styled<string>("div")`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.05) 0px 5px 15px 0px;
  padding: 20px;

  ${({ theme: { borderRadius } }: Props) => css`
    border-radius: ${borderRadius.default};
  `}
`;

export default StyledWrapper;
