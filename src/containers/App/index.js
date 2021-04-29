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
// import MainContainer from "./MainContainer";

const key = 'app'

const App = () => {
  useInjectSaga({ key, saga })
  useInjectReducer({ key, reducer })


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
