import React, {useEffect, useState} from 'react';
import {createStructuredSelector} from "reselect";
import {useInjectSaga} from "../../utils/injectSaga";
import saga from './saga'
import {useInjectReducer} from "../../utils/injectReducer";
import reducer from "./reducer";
import MovieCard from "./components/MovieCard";
import {moviesArrayPropType} from "../../utils/propTypes/moviePropType";
import {makeSelectHasSession} from "../DefaultContainer/selectors";
import {useSelector} from "react-redux";

const makeStateSelector = () =>
  createStructuredSelector({
    hasSession: makeSelectHasSession()
    // movies: makeSelectMovies(),
    // query: makeSelectQuery(),
    // limit: makeSelectLimit(),
    // page: makeSelectPage(),
  })

const key = 'homePage'


export function HomePage({ movies }) {
  useInjectSaga({ key, saga })
  useInjectReducer({ key, reducer })

  const { hasSession } = useSelector(makeStateSelector())

  return <div>
    {movies && movies.map(movie => (
      <MovieCard
        movie={movie}
        key={movie.movieId}
        hasSession={hasSession}
      />
    ))}
  </div>
}

HomePage.propTypes = {
  movies: moviesArrayPropType,
};

export default HomePage;
