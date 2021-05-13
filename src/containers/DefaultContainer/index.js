import React, {useCallback, useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import {AuthenticatedRoute} from "../../components/AuthenticatedRoute";
import App from "../App";
// import history from "../../utils/history";
import {LoginContainer} from "../LoginContainer";
import GlobalErrorHandler from "../GlobalErrorHandler";
import HomePage from "../HomePage";
import Navigation from "../Navigation";
import {createStructuredSelector} from "reselect";
import {makeSelectHasSession} from "./session/selectors";
import {useDispatch, useSelector} from "react-redux";
import MainContainer from "./MainContainer";
import saga from './sagas'
import {useInjectReducer} from "../../utils/injectReducer";
import reducer from "../App/apiCalls/reducer";
import GlobalStyle from "../../global-styles";
import {useInjectSaga} from "../../utils/injectSaga";
import {useHistory, useLocation} from "react-router";
import {requestReceiveMovies} from "./movies/actions";
import {makeSelectMovies} from "./movies/selectors";
// import {makeSelectLocation} from "./router/selectors";

const key = 'defaultContainer'

const makeStateSelector = () =>
  createStructuredSelector({
    hasSession: makeSelectHasSession(),
    movies: makeSelectMovies(),
    // location: makeSelectLocation(),
  })

const DefaultContainer = () => {
  useInjectReducer({key, reducer})
  useInjectSaga({key, saga})
  const { hasSession, movies  } = useSelector(makeStateSelector())

  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(12)

  const dispatch = useDispatch()

  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    const params = new URLSearchParams(location.q)
    const search = params.get('q')
    const locationLimit = params.get('limit')
    const locationPage = params.get('page')

    search&&setQuery(search)

    // console.log('search: ', search)
    // console.log('limimt', locationLimit, locationPage)
    // console.log('locationSearch: ', location)

    // dispatch(requestReceiveMovies({page, limit, query}))

  }, [location.q])

  useEffect(() => {
    dispatch(requestReceiveMovies({page, limit, query}))
  }, [query])

  console.log('movies: ', movies)

  const search = useCallback(query =>
    history.replace({
      pathname: '/',
      q: `?q=${query}&page=${page}&limit=${limit}`
    }),[])

  return (
    <>
      <Navigation
        hasSession={hasSession}
        query={query}
        onSearch={search}
      />
      <Switch>
        <GlobalErrorHandler>
          <Route
            exact
            path={'/'}
            render={props => <HomePage {...props} movies={movies}/>}
          />
          <Route
            exact
            path="/:path(sign-in|sign-up|forgot-password)"
            component={LoginContainer}
          />
          <AuthenticatedRoute
            path={'/user'}
            component={App}
            redirectTo={'/sign-in'}
            hasSession={hasSession}
          />
        </GlobalErrorHandler>
      </Switch>
      <GlobalStyle/>
    </>

  )
}

export default DefaultContainer
