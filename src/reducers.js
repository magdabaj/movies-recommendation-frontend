/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import history from './utils/history'
import globalReducer from './containers/DefaultContainer/reducer'
import navigationReducer from './containers/Navigation/reducer'
import { isTest } from './utils/dev'

/**
 * @description  add your own reducer if you get `Unexpected key "reducerName" found in preloadedState
 * argument passed to createStore.`
 * @example dashboardPage: dashboardPageReducer,
 */
const testDefaultInjectedReducers = {}
const productionDefaultInjectedReducers = {}

const defaultInjectedReducers = isTest()
  ? testDefaultInjectedReducers
  : productionDefaultInjectedReducers

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
const createReducer = (injectedReducers = defaultInjectedReducers) =>
  combineReducers({
    global: globalReducer,
    router: connectRouter(history),
    navigation: navigationReducer,
    ...injectedReducers,
  })

export default createReducer
