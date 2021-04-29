import { css } from 'styled-components'
import { getColor } from '../../themes/color/getColor'
import Color from '../../themes/color/constants'
import ButtonVariety from '../../components/Button/buttonVariety'

const colorFromType = ({ variety, disabled }) => {
  let colorToken = Color.token.text01
  let backgroundColorToken
  switch (variety) {
    case ButtonVariety.primary:
      if (disabled) {
        colorToken = Color.token.text02
        backgroundColorToken = Color.token.button01Disabled
      } else {
        backgroundColorToken = Color.token.button01
      }
      break
    case ButtonVariety.secondary:
      if (disabled) {
        colorToken = Color.token.text02
        backgroundColorToken = Color.token.button02Disabled
      } else {
        backgroundColorToken = Color.token.button02
      }
      break
    case ButtonVariety.success:
      if (disabled) {
        backgroundColorToken = Color.token.successButton02
      } else {
        backgroundColorToken = Color.token.successButton01
      }
      break
    case ButtonVariety.error:
      // todo disabled
      backgroundColorToken = Color.token.danger
      break
    default:
      throw new Error(`Invalid button variety ${variety}`)
  }

  return css`
    color: ${getColor(colorToken)} !important;
    background-color: ${getColor(backgroundColorToken)} !important;
  `
}

export default colorFromType
