import Color from '../../themes/color/constants'
import { values } from 'rambda'

export const sagaKey = 'snackbar'

export const ColorPlace = {
  background: 'background',
  font: 'font',
}

export const colorPlaces = values(ColorPlace)

export const SnackbarToken = {
  error: 'error',
  success: 'success',
  info: 'info',
  warning: 'warning',
}

export const SnackbarPriority = {
  [SnackbarToken.error]: 4,
  [SnackbarToken.success]: 3,
  [SnackbarToken.info]: 2,
  [SnackbarToken.warning]: 1,
}

export const SnackbarVariant = {
  [SnackbarToken.success]: {
    [ColorPlace.background]: Color.token.snackbarSuccess01,
    [ColorPlace.font]: Color.token.snackbarTextLight01,
  },
  [SnackbarToken.warning]: {
    [ColorPlace.background]: Color.token.snackbarWarning01,
    [ColorPlace.font]: Color.token.snackbarTextDark01,
  },
  [SnackbarToken.error]: {
    [ColorPlace.background]: Color.token.snackbarError01,
    [ColorPlace.font]: Color.token.snackbarTextLight01,
  },
  [SnackbarToken.info]: {
    [ColorPlace.background]: Color.token.snackbarInfo01,
    [ColorPlace.font]: Color.token.snackbarTextLight01,
  },
}
