import { handleVariant, isErrorVariant } from 'containers/Snackbar/common'
import {
  ColorPlace,
  SnackbarToken,
  SnackbarVariant,
} from 'containers/Snackbar/constants'
import Color from 'themes/color/constants'
import muiDarkTheme from 'themes/dark'
import { getColor } from 'themes/color/getColor'

describe('isErrorVariant', () => {
  it('is error variant', () => {
    expect(isErrorVariant(SnackbarVariant[SnackbarToken.error])).toEqual(true)
  })

  it('is not error variant', () => {
    expect(isErrorVariant(SnackbarVariant[SnackbarToken.success])).toEqual(
      false,
    )
  })
})

describe('handleVariant', () => {
  const props = {
    theme: muiDarkTheme,
  }
  const variantedProps = variant => ({
    ...props,
    variant,
  })

  const match = token => getColor(token)(props)
  const testHandler = (cssProps = props) => colorPlace =>
    handleVariant(colorPlace)(cssProps)(cssProps)

  it('chooses info colors by default', () => {
    const handler = testHandler()

    expect(handler(ColorPlace.font)).toEqual(
      match(Color.token.snackbarTextLight01),
    )
    expect(handler(ColorPlace.background)).toEqual(
      match(Color.token.snackbarInfo01),
    )
  })

  it('chooses info colors by set', () => {
    const handler = testHandler(variantedProps(SnackbarVariant.info))

    expect(handler(ColorPlace.font)).toEqual(
      match(Color.token.snackbarTextLight01),
    )
    expect(handler(ColorPlace.background)).toEqual(
      match(Color.token.snackbarInfo01),
    )
  })

  it('chooses warning', () => {
    const handler = testHandler(variantedProps(SnackbarVariant.warning))

    expect(handler(ColorPlace.font)).toEqual(
      match(Color.token.snackbarTextDark01),
    )
    expect(handler(ColorPlace.background)).toEqual(
      match(Color.token.snackbarWarning01),
    )
  })

  it('chooses error', () => {
    const handler = testHandler(variantedProps(SnackbarVariant.error))

    expect(handler(ColorPlace.font)).toEqual(
      match(Color.token.snackbarTextLight01),
    )
    expect(handler(ColorPlace.background)).toEqual(
      match(Color.token.snackbarError01),
    )
  })

  it('chooses success', () => {
    const handler = testHandler(variantedProps(SnackbarVariant.success))

    expect(handler(ColorPlace.font)).toEqual(
      match(Color.token.snackbarTextLight01),
    )
    expect(handler(ColorPlace.background)).toEqual(
      match(Color.token.snackbarSuccess01),
    )
  })
})
