import {withNamespace} from "../../utils/constantHelpers";

const namespace = withNamespace('/app/containers/RateMovie')

const sendRating = namespace('SEND_RATING', true)
export const REQUEST_SEND_RATING = sendRating.REQUEST
export const SEND_RATING_SUCCESS = sendRating.SUCCESS
export const SEND_RATING_FAILED = sendRating.FAILED

const getRating = namespace('GET_RATING', true)
export const REQUEST_GET_RATING = getRating.REQUEST
export const GET_RATING_SUCCESS = getRating.SUCCESS
export const GET_RATING_FAILED = getRating.FAILED

const updateRating = namespace('UPDATE_RATING', true)
export const REQUEST_UPDATE_RATING = updateRating.REQUEST
export const UPDATE_RATING_SUCCESS = updateRating.SUCCESS
export const UPDATE_RATING_FAILED = updateRating.FAILED

const clearRating = namespace('CLEAR_RATING', true)

export const REQUEST_CLEAR_RATING = clearRating.REQUEST

const getMovie = namespace('GET_MOVIE', true)
export const REQUEST_GET_MOVIE = getMovie.REQUEST
export const GET_MOVIE_SUCCESS = getMovie.SUCCESS
export const GET_MOVIE_FAILED = getMovie.FAILED




