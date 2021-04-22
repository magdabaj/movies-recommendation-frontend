import {UPDATE_SESSION} from "./constants";

export const updateSession = session => ({
    type: UPDATE_SESSION,
    payload: {
        session,
    },
})