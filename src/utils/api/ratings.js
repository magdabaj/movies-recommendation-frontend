import http from "../request/http";

const baseUrl = 'ratings'

const ratings = {
  getMovieRatings: movieId => http.get(`${baseUrl}/${movieId}`),
  rate: (movieId, rating) => http.post(`${baseUrl}/${movieId}`, {rating}),
  changeRating: (movieId, rating) => http.put(`${baseUrl}/${movieId}`, {rating}),
  getUserRatings: () => http.get(`${baseUrl}`),
  getMovieRatingForUser: movieId => http.get(`${baseUrl}/user/${movieId}`)
}

export default ratings
