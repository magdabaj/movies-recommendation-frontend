import first from 'lodash/first'
import initial  from 'lodash/initial'
import isUndefined from  'lodash/isUndefined'
import keys from 'lodash/keys'
import last from 'lodash/last'
import hexToRgba from 'hex-to-rgba'
import FuzzySet from 'fuzzyset.js'
import { doIfNotProduction } from '../../utils/dev'

const themePath = args => `'theme.${args.join('.')}'`

const getSimilarPropertyName = (theme, args) => {
  const firstProp = first(args)
  const lastProp = last(args)

  if (theme[firstProp]) {
    const set = FuzzySet(keys(theme[firstProp]))

    const similar = set.get(lastProp)
    const [, key] = first(similar)
    return `Did you mean ${themePath(initial(args).concat([key]))}?`
  }
  return ''
}

export const logErrorIfAny = (theme, result, ...args) => {
  doIfNotProduction(() => {
    if (isUndefined(result)) {
      const similarityPropertyMessage = getSimilarPropertyName(theme, args)
      // eslint-disable-next-line no-console
      console.error(
        `Couldn't find path ${themePath(args)} in theme.`,
        similarityPropertyMessage,
      )
    }
  })
}

export const makeTransparent = (color, value) => hexToRgba(color, value)
