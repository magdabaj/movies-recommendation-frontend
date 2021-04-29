import { compose, nthArg, path, pipe } from 'ramda'

export const passNthArg = (func, n = 1) =>
  compose(
    func,
    nthArg(n),
  )

export const materialEvent = setValue => (event, newValue) => {
  setValue(newValue)
}

export const passEventValue = (onChange, ...rest) =>
  pipe(
    path(['target', 'value']),
    value => onChange(value, ...rest),
  )
