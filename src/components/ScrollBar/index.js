import styled, { css } from 'styled-components'
import {themeShape, themeSpacing} from "../../themes/fromTheme";
import {getColor} from "../../themes/color/getColor";
import Color from "../../themes/color/constants";

export const scrollBarBaseCss = css`
  ::-webkit-scrollbar {
    width: ${themeSpacing(1)};
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: ${themeShape('borderRadiusMedium')};
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: ${getColor(Color.token.scrollBarScroll01)};
  }

  scrollbar-color: ${getColor(Color.token.scrollBarScroll01)} transparent; /* thumb and track color */
  scrollbar-width: ${themeSpacing(1.5)};
`

export const scrollBarCss = css`
  &&& {
    overflow-y: auto;
  }
  height: 100%;
  ${scrollBarBaseCss}
`

const ScrollBar = styled.div`
  ${scrollBarCss}
`

export default ScrollBar
