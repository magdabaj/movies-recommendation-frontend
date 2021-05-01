import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
import HomePage from "../HomePage";
// import {ToastContainer} from "react-toastify";
import GlobalStyle from "../../global-styles";
import {useInjectSaga} from "../../utils/injectSaga";
import saga from "./saga";
import {useInjectReducer} from "../../utils/injectReducer";
import reducer from "./reducer";
import {makeSelectHasSession} from "./selectors";
import {createStructuredSelector} from "reselect";
import {useSelector} from "react-redux";
import {AuthenticatedRoute} from "../../components/AuthenticatedRoute";
// import MainContainer from "./MainContainer";

const key = 'app'

const makeStateSelector = () =>
  createStructuredSelector({
    hasSession: makeSelectHasSession(),
    // isAdmin: makeSelectIsAdmin(),
  })


const App = () => {
  useInjectSaga({ key, saga })
  useInjectReducer({ key, reducer })

  const { hasSession } = useSelector(makeStateSelector())

  console.log('app has session', hasSession)

  return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
            <GlobalStyle/>
        </div>
    );
}

App.propTypes = {
};

export default App;
