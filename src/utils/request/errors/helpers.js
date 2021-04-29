import { call } from 'redux-saga/effects'
import messages from './messages'
import errors from './index'
import FetchError from './FetchError'
import RequestError from './RequestError'

const errorCodeMessages = {
  [errors.unexpectedError]: messages.unexpectedError,
  [errors.fetchError]: messages.fetchError,
  [errors.incorrectUsernameOrPassword]: messages.incorrectUsernameOrPassword,
  [errors.incorrectUsernameOrEmail]: messages.incorrectUsernameOrEmail,
  [errors.unauthorized]: messages.unauthorized,
  [errors.incorrectUserId]: messages.incorrectUserId,
  [errors.incorrectCurrentPassword]: messages.incorrectCurrentPassword,
  [errors.incorrectRecoveryPassword]: messages.incorrectRecoveryPassword,
  [errors.usernameAlreadyExists]: messages.usernameAlreadyExists,
  [errors.invalidUsername]: messages.invalidUsername,
  [errors.invalidEmailAddress]: messages.invalidEmailAddress,
  [errors.invalidPassword]: messages.invalidPassword,
  [errors.emailAddressAlreadyExists]: messages.emailAddressAlreadyExists,
  [errors.userAlreadyExists]: messages.usernameAlreadyExists,
  [errors.parameterShouldNotContainSpecialCharacters]:
  messages.parameterShouldNotContainSpecialCharacters,
}

const getMessageFromErrorCode = errorCode =>
  errorCodeMessages[errorCode] || errorCodeMessages[errors.unexpectedError]


function* getErrorFromResponseOrDefault(caughtError) {
  if (caughtError instanceof RequestError) {
    const { error } = yield call(caughtError.json)
    return error
  }
  if (caughtError instanceof FetchError) {
    return errors.fetchError
  }
  throw caughtError
}

export { getMessageFromErrorCode, getErrorFromResponseOrDefault }
