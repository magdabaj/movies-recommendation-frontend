import { isEmpty, isNil } from 'rambda'
import Color from './constants'

export const createColorTokenMapping = (themeName, mappings) => {
  const missingColorTokens = Object.values(Color.token).filter(token =>
    isNil(mappings[token]),
  )

  if (!isEmpty(missingColorTokens)) {
    throw new Error(
      `Invalid or incomplete color token(s): ${missingColorTokens.join(
        ',',
      )} for theme ${themeName}`,
    )
  }

  return mappings
}
