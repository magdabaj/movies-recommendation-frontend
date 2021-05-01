import {
  REQUEST_CREATE_NEW_USER,
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_FAILED,
} from './constants'
import { getSuccessActionWithoutPayload } from '../../../../utils/actionHelpers'
import snackbarMessages from '../../../Snakcbar/messages'

export const requestCreateNewUser = ({
                                       username,
                                       password,
                                     }) => ({
  type: REQUEST_CREATE_NEW_USER,
  username,
  password,
})

export const createNewUserSuccess = () =>
  getSuccessActionWithoutPayload(
    CREATE_NEW_USER_SUCCESS,
    snackbarMessages.userCreated,
  )

export const createNewUserFailed = error => ({
  type: CREATE_NEW_USER_FAILED,
  error,
})
