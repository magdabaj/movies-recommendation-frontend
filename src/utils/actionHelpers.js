import {createAction} from "@reduxjs/toolkit";
import {SnackbarToken} from "../containers/Snakcbar/constants";
// import { asConstant } from '../containers/App/devices/constants'


export const customizeActionContents = ({
                                          payload = {},
                                          message,
                                          snackbarToken = SnackbarToken.info,
                                          clearSnackbars = false,
                                        }) => ({
  payload,
  meta: {
    snackbarMessage: message,
    snackbarToken,
    clearSnackbars,
  },
})

export const createActionWithoutPayload = (type, actionData) =>
  createAction(type, customizeActionContents)({
    ...actionData,
    payload: undefined,
  })

export const getClearSnackbarAction = type =>
  createActionWithoutPayload(type, { clearSnackbars: true })


export function actionTypeEndsInFailed({ type }) {
  return type && type.substring(type.length - 7) === '_FAILED'
}

export function actionTypeStartsWithRequest({ type }) {
  return type && type.includes('/REQUEST_')
}

export function actionTypeEndsInSuccess({ type }) {
  return type && type.substring(type.length - 8) === '_SUCCESS'
}

// const ActionTypeOtherThanSuccessOrFailWhichEndApiCall = {
//   deviceRegistrationAborted: DEVICE_REGISTRATION_ABORTED,
// }

// export const actionTypesOtherThanSuccessOrFailWhichEndApiCall = values(
//   ActionTypeOtherThanSuccessOrFailWhichEndApiCall,
// )

export const actionTypeCompletesApiCall = action =>
  actionTypeEndsInFailed(action) ||
  actionTypeEndsInSuccess(action) //||
  // actionTypesOtherThanSuccessOrFailWhichEndApiCall.find(
  //   type => type === action.type,
  // )

export const baseActionName = type => {
  // eslint-disable-next-line default-case
  // switch (type) {
  //   case ActionTypeOtherThanSuccessOrFailWhichEndApiCall.deviceRegistrationAborted:
  //     return asConstant('RECEIVE_DEVICES')
  // }

  return type
    .replace(/REQUEST_/g, '')
    .replace(/_FAILED/g, '')
    .replace(/_SUCCESS/g, '')
}


export const isActionCompleted = (actionInProgress, actionIncoming) =>
  baseActionName(actionInProgress) !== baseActionName(actionIncoming)

export const getSuccessActionWithoutPayload = (type, message) =>
  createActionWithoutPayload(type, {
    message,
    snackbarToken: SnackbarToken.success,
  })
