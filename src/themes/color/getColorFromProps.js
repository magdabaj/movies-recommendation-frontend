import { compose, curry, prop } from 'ramda'
import { getColor } from './getColor'

export const getColorFromProps = curry(
  compose(
    getColor,
    prop,
  ),
)
