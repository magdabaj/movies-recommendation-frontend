import { path } from 'rambda'
import {
  SnackbarPriority,
  SnackbarToken,
  SnackbarVariant,
} from '../../constants'
import snackbarMessages from '../../messages'

export const createSnackMsg = (
  id,
  variantToken,
  message = snackbarMessages.unableToPerformAction,
) => {
  const token = path([variantToken], SnackbarToken)
  if (!token) {
    throw new Error(`Hey, you've passed wrong SnackbarToken: ${token}`)
  }

  return {
    id,
    message,
    variant: SnackbarVariant[token],
    priority: SnackbarPriority[token],
  }
}

export const removeByIdFilter = (idToDelete, stateMessages) =>
  stateMessages.filter(({ id }) => id !== idToDelete)

export const sortByHighestPriority = (a, b) => b.priority - a.priority
export const sortByHighestId = (a, b) => b.id - a.id

export const sortByHighestPriorityAndIndex = (a, b) => {
  const priority = sortByHighestPriority(a, b)

  return priority === 0 ? sortByHighestId(a, b) : priority
}

export const createAddSnackbarWithVariants = addSnackbar => ({
  addSnackbar,
  addSuccessSnackbar: addSnackbar(SnackbarToken.success),
  addErrorSnackbar: addSnackbar(SnackbarToken.error),
  addWarningSnackbar: addSnackbar(SnackbarToken.warning),
  addInfoSnackbar: addSnackbar(SnackbarToken.info),
})
