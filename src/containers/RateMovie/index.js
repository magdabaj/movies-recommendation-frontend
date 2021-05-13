import React, {useEffect, useState} from 'react';
import {createStructuredSelector} from "reselect";
import {makeSelectMovies} from "../DefaultContainer/movies/selectors";
import {useDispatch, useSelector} from "react-redux";
import RateMovieCard from "./components/RateMovieCard";
import {useParams} from "react-router";
import {useInjectReducer} from "../../utils/injectReducer";
import reducer from "./reducer";
import {useInjectSaga} from "../../utils/injectSaga";
import saga from './sagas'
import {requestGetMovie} from "./actions";
import {makeSelectMovie} from "./selectors";

const key = 'rateMovie'

const makeStateSelector = () =>
  createStructuredSelector({
    movie: makeSelectMovie(),
  })

const RateMovie = () => {
  useInjectReducer({ key, reducer })
  useInjectSaga({ key, saga })
  const dispatch = useDispatch()
  const { movieId } = useParams()
  const { movie } = useSelector(makeStateSelector())

  useEffect(() => {
    dispatch(requestGetMovie(movieId))
 }, [movieId])


  return (
    movie ?
      <RateMovieCard
        movie={movie}
        movieId={movieId}
      /> : <div>Loading...</div>
  )
}

export default RateMovie
