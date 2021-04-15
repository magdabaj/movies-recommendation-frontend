import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";
import homePageReducer from "../containers/HomePage/reducer";
import appReducer from '../containers/App/reducer';
import history from "./history";

const rootReducer = combineReducers({
    homePageReducer,
    appReducer,
    router: connectRouter(history),
})

export default rootReducer;