import {
  CLEAR_API_ERRORS,
  REMOVE_API_ERROR,
  REMOVE_API_ERRORS_OF_TYPE,
} from './constants'

export const clearErrors = () => ({
  type: CLEAR_API_ERRORS,
})

export const removeError = errorType => ({
  type: REMOVE_API_ERROR,
  errorType,
})

export const removeApiErrorsOfType = errorType => ({
  type: REMOVE_API_ERRORS_OF_TYPE,
  errorType,
})
