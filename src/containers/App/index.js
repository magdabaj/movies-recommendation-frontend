import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
import HomePage from "../HomePage";
// import {ToastContainer} from "react-toastify";
import GlobalStyle from "../../global-styles";
import {useInjectSaga} from "../../utils/injectSaga";
import {useInjectReducer} from "../../utils/injectReducer";
import reducer from "./reducer";
import saga from '../DefaultContainer/sagas'
import {makeSelectHasSession} from "../DefaultContainer/selectors";
import {createStructuredSelector} from "reselect";
import {useSelector} from "react-redux";
import {AuthenticatedRoute} from "../../components/AuthenticatedRoute";
import RateMovie from "../RateMovie";
import RecommendMovies from "../RecommendMovies";
// import MainContainer from "./MainContainer";

const key = 'app'

const makeStateSelector = () =>
  createStructuredSelector({
    hasSession: makeSelectHasSession(),
  })


const App = () => {
  useInjectSaga({ key, saga })
  useInjectReducer({ key, reducer })

  const { hasSession } = useSelector(makeStateSelector())

  console.log('app has session', hasSession)

  return (
        <>
            <Switch>
                <Route exact path="/user" component={RecommendMovies} />
                <Route exact path="/user/movie/:movieId/rate" component={RateMovie} />
            </Switch>
            <GlobalStyle/>
        </>
    );
}

App.propTypes = {
};

export default App;
