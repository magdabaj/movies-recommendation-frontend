import {withNamespace} from "../../../utils/constantHelpers";

const asConstant = withNamespace('app/SignOut')

const receiveDevices = asConstant('REMOVE_SESSION', true)
export const REQUEST_REMOVE_SESSION = receiveDevices.REQUEST
export const REMOVE_SESSION_SUCCESS = receiveDevices.SUCCESS
export const REMOVE_SESSION_FAILED = receiveDevices.FAILED
