import { sort } from 'rambda'
import { sortByHighestPriorityAndIndex } from '../containers/SnackbarProvider/common'

export const useQueuedSnackbarMessages = (snackbarMessages, maxQueueSize) => {
  const sortedSnackbarMessages = sort(
    sortByHighestPriorityAndIndex,
    snackbarMessages,
  )

  // limit queue size
  return sortedSnackbarMessages.filter((el, i) => i < maxQueueSize)
}
