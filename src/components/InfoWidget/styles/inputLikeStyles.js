import { css } from 'styled-components'
import { getColor } from '../../../themes/color/getColor'
import Color from '../../../themes/color/constants'
import {
  themeShape,
  themeSpacing,
  themeTypographyFontSize,
} from '../../../themes/fromTheme'
import { Breakpoint, themeBreakpoint, Type } from '../../../themes/fromTheme/breakpoint'
import {
  getInputBgColor,
  getInputTextOrIconColor,
} from '../common'
// import { scrollBarBaseCss } from 'components/ScrollBar'

const inputLikeStyles = css`
  flex: 1;
  & .MuiInputAdornment-positionEnd {
    padding-right: ${themeSpacing(0.5)};
  }
  & .MuiOutlinedInput-adornedEnd {
    padding-right: 0;
  }
  &.MuiFormControl-root:last-of-type {
    margin-bottom: 0;
  }
  &.MuiFormControl-root {
    margin-bottom: ${themeSpacing(1)};
  }
  .MuiInputBase-root {
    background-color: ${props => getInputBgColor(props)};
    border-radius: ${themeShape('borderRadiusMediumSmall')};

    .MuiOutlinedInput-notchedOutline {
      border: ${({ disabled }) => (disabled ? 0 : null)};
      border-color: transparent;
    }
    &:hover {
      .MuiOutlinedInput-notchedOutline {
        border-color: ${({ error }) =>
  error
    ? getColor(Color.token.infoInputError01)
    : getColor(Color.token.dateFilterInputBorderHoverColor)};
      }
    }
  }

  input.MuiInputBase-input,
  textarea.MuiInputBase-input {
    color: ${props => getInputTextOrIconColor(props)};
  }
  .MuiInputBase-input {
    font-size: ${themeTypographyFontSize('textSmall')};
    padding-top: ${themeSpacing(1.3125)};
    padding-bottom: ${themeSpacing(1.3125)};
    width: 100%;
    ${themeBreakpoint(Type.up, Breakpoint.md)} {
      min-width: 50%;
    }
  }
  //
  // textarea {
  //   ${scrollBarBaseCss};
  // }
`

export default inputLikeStyles
