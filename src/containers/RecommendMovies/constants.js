import {withNamespace} from "../../utils/constantHelpers";

const namespace = withNamespace('/app/containers/RecommendMovie')

const getUserRatings = namespace('GET_USER_RATINGS', true)
export const REQUEST_GET_USER_RATINGS = getUserRatings.REQUEST
export const GET_USER_RATINGS_SUCCESS = getUserRatings.SUCCESS
export const GET_USER_RATINGS_FAILED = getUserRatings.FAILED

const recommendMovies = namespace('RECOMMEND_MOVIES', true)
export const REQUEST_RECOMMEND_MOVIES = recommendMovies.REQUEST
export const RECOMMEND_MOVIES_SUCCESS = recommendMovies.SUCCESS
export const RECOMMEND_MOVIES_FAILED = recommendMovies.FAILED

