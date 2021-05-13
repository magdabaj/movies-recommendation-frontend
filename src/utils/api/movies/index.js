import http from "../../request/http";

const baseUrl = 'movies'

const movies = {
  get: ({query, limit, page}) =>
    http.get(`${baseUrl}?search=${query}&limit=${limit}&page=${page}`),
  getOne: movieId => http.get(`${baseUrl}/${movieId}`),
  recommend: () => http.post(`${baseUrl}/recommend`),
  getRated: () => http.get(`${baseUrl}/rated`),
}

export default movies
