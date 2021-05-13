import {withNamespace} from "../../../utils/constantHelpers";

export const namespace = withNamespace('app/containers/HomePage')

export const RECEIVE_MOVIES =  namespace('RECEIVE_MOVIES', true)

export const REQUEST_RECEIVE_MOVIES = RECEIVE_MOVIES.REQUEST
export const RECEIVE_MOVIES_SUCCESS = RECEIVE_MOVIES.SUCCESS
export const RECEIVE_MOVIES_FAILED = RECEIVE_MOVIES.FAILED
