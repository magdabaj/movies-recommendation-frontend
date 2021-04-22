import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from "./utils/history";
import store from "./utils/store";
import { MuiThemeProvider } from '@material-ui/core/styles'

import App from './containers/App';
import {BrowserRouter} from "react-router-dom";
import Themes from "./themes";

const wrapper = document.getElementById("container");

wrapper ? ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={Themes.light}>
            <ConnectedRouter history={history}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </ConnectedRouter>
        </MuiThemeProvider>
    </Provider>, wrapper) : false;
