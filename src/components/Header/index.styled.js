// @flow

import styled, { css, type StyledElementType } from "styled-components";
import { type Theme } from "../../../.styled-components/theme";
import { media } from "../../../.styled-components";

type StyledProps = {
  theme: Theme,
};

type OwnProps = {};

type Props = OwnProps & StyledProps;

const StyledHeader: StyledElementType<"header"> = styled<string>("header")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 208px;
  border-bottom-left-radius: 64% 20.4%;
  border-bottom-right-radius: 112% 112%;

  ${({ theme: { colors } }: Props) => css`
    background-image: linear-gradient(
      145deg,
      ${colors.aquarell},
      ${colors.ultraMarineBlue}
    );
    color: ${colors.arcticWhite};
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  `}

  ${media.tablet`
    height: 64px;
    border-bottom-left-radius: 0%;
    border-bottom-right-radius: 0%;

    ${({ theme: { colors } }: Props) => css`
      background-image: linear-gradient(
        180deg,
        ${colors.aquarell},
        ${colors.ultraMarineBlue}
      );
    `}
  `}
`;

export default StyledHeader;
