import { useDispatch } from 'react-redux'
import { compose } from 'rambda'
import { push } from 'connected-react-router'

export const usePushTo = to => {
  const dispatch = useDispatch()

  return compose(
    dispatch,
    () => push(to),
  )
}
