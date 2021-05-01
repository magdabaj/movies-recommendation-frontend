/* eslint-disable default-case, no-param-reassign, indent */
import {UPDATE_SESSION} from "./constants";
import {getSession} from "../../../utils/redux/middleware/localStorageSession";
import {SET_SESSION_SUCCESS} from "../../LoginContainer/containers/SignInPage/constants";
import {REMOVE_SESSION_SUCCESS} from "../signOut/constants";
import {produce} from "immer";

export const initialState = {
    token: null,
    user: null,
    // expiration: null,
    ...getSession(),
}

const sessionReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            // case UPDATE_USERNAME_SUCCESS:
            //     draft.user = {
            //         ...draft.user,
            //         username: action.payload.email,
            //     }
            //     break
            case UPDATE_SESSION:
                draft.user = action.payload.session.user
                break
            case SET_SESSION_SUCCESS:
                draft.token = action.token
                draft.user = action.user
                draft.refreshToken = action.refreshToken
                break
            case REMOVE_SESSION_SUCCESS:
                draft.token = undefined
                draft.user = undefined
                draft.refreshToken = undefined
                break
        }
    })

export default sessionReducer
