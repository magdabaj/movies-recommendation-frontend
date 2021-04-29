import { getColor } from '../../themes/color/getColor'
import Color from '../../themes/color/constants'
import { values } from 'rambda'
import { storageToken } from '../../utils/localStorage/generalSettingsItemsExpandState'

export const getInputBgColor = ({ disabled }) =>
  disabled
    ? getColor(Color.token.infoInput01Disabled)
    : getColor(Color.token.infoInput01)

/**
 * @param disabled: bool
 * @param error: bool
 * @returns color
 * @description gets color for input text or icon because it uses css prop `color`
 */

export const getInputTextOrIconColor = ({ disabled, error }) => {
  if (error) return getColor(Color.token.infoInputError01)

  return disabled
    ? getColor(Color.token.infoInputText01Disabled)
    : getColor(Color.token.infoInputText01)
}

export const logErrorIfWrongKey = storageKey => {
  if (!values(storageToken).includes(storageKey)) {
    // eslint-disable-next-line no-console
    console.error(
      `Wrong storageKey, please add your key: ${storageKey} to /utils/localStorage/generalSettingsItemsExpandState -> storageToken`,
    )
  }
}
