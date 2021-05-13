import React, {useEffect} from 'react';
import {useInjectSaga} from "../../utils/injectSaga";
import saga from './sagas/index'
import {useInjectReducer} from "../../utils/injectReducer";
import reducer from "./reducer";
import {useDispatch, useSelector} from "react-redux";
import {requestGetUserRatings, requestRecommendMovies} from "./actions";
import {createStructuredSelector} from "reselect";
import {makeSelectRecommendedMovies, makeSelectUserRatings} from "./selectors";
import {makeSelectHasSession} from "../DefaultContainer/selectors";
import MovieCard from "./components/MovieCard";

const key = 'recommendMovies'

const makeStateSelector = () =>
  createStructuredSelector({
    userRatings: makeSelectUserRatings(),
    recommendedMovies: makeSelectRecommendedMovies(),
    hasSession: makeSelectHasSession()
  })

const RecommendMovies = (props) => {
  useInjectSaga({ key, saga })
  useInjectReducer({ key, reducer })

  const { userRatings, recommendedMovies, hasSession } = useSelector(makeStateSelector())

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestGetUserRatings())
  }, [])

  useEffect(() => {
    if (userRatings.length > 20) dispatch(requestRecommendMovies())
  }, [userRatings.length])

  console.log('userRatings: ', userRatings)

  return (
    <div>
      <h1>Zobacz rekomendacje</h1>
      {userRatings.length < 20 ?
        <h3>Zeby zobaczyc rekomendacje ocen przynajmniej 20 filmow</h3> :
        recommendedMovies.map(movie =>
          <MovieCard
            hasSession={hasSession}
            movie={movie}
            key={movie.movieId}
          />
        )
      }
      <h2>Twoje oceny</h2>
      {userRatings ? userRatings.map(rating =>
        <MovieCard
          key={rating.id}
          movie={rating.movie}
          rating={rating.value}
        />
      ) : <div>Loading...</div>}
    </div>
  )
}

export default RecommendMovies
