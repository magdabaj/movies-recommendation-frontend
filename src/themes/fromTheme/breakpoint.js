import { path } from 'rambda'
import includes  from 'lodash/includes'
import values from 'lodash/values'

export const Type = {
  up: 'up',
  down: 'down',
  only: 'only',
}

export const Breakpoint = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
}

const hasType = type => includes(values(Type), type)
const hasBreakpoint = breakpoint => includes(values(Breakpoint), breakpoint)

export const themeBreakpoint = (type, breakpoint) => ({ theme }) => {
  if (!hasType(type))
    throw Error(`Unknown method '${type}'. Use one of ${values(Type)}`)

  if (!hasBreakpoint(breakpoint))
    throw Error(
      `Unknown breakpoint '${breakpoint}'.  Use one of ${values(Breakpoint)}`,
    )

  const withDirection = path(['breakpoints', type], theme)
  return withDirection(breakpoint)
}
//
// export const themeBreakpointBetween = (start, end) => ({ theme }) => {
//   if (!hasBreakpoint(start))
//     throw Error(
//       `Unknown breakpoint start'${start}'.  Use one of ${values(Breakpoint)}`,
//     )
//
//   if (!hasBreakpoint(end))
//     throw Error(
//       `Unknown breakpoint end '${end}'.  Use one of ${values(Breakpoint)}`,
//     )
//
//   const withDirection = theme.breakpoints.between(start, end)
//   return withDirection(start)
// }
