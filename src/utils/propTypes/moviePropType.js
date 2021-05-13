import PropTypes from "prop-types";

export const moviePropType =  PropTypes.shape({
  movieId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
})

export const moviesArrayPropType = PropTypes.arrayOf(moviePropType)
