import '@babel/polyfill'

import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import history from "./utils/history";
import { MuiThemeProvider } from '@material-ui/core/styles'

import {BrowserRouter} from "react-router-dom";
import Themes from "./themes";
import configureStore from "./configureStore";
import SnackbarProvider from "./containers/Snakcbar/containers/SnackbarProvider";
import DefaultContainer from "./containers/DefaultContainer";

// Create redux store with history
const initialState = {}
const store = configureStore(initialState, history)

const wrapper = document.getElementById("container");

const render = () => wrapper && ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={Themes.light}>
        <StyledComponentsThemeProvider theme={Themes.light}>
          <BrowserRouter>
            <SnackbarProvider>
              <DefaultContainer/>
            </SnackbarProvider>
          </BrowserRouter>
        </StyledComponentsThemeProvider>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>, wrapper
)
wrapper ? ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={Themes.light}>
          <StyledComponentsThemeProvider theme={Themes.light}>
              <BrowserRouter>
                <SnackbarProvider>
                  <DefaultContainer/>
                </SnackbarProvider>
              </BrowserRouter>
          </StyledComponentsThemeProvider>
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>, wrapper) : false;

//
// if (module.hot) {
//   // Hot reloadable React components and translation json files
//   // modules.hot.accept does not accept dynamic dependencies,
//   // have to be constants at compile-time
//   module.hot.accept(['./containers/App'], () => {
//     ReactDOM.unmountComponentAtNode(wrapper)
//     render()
//   })
// }


