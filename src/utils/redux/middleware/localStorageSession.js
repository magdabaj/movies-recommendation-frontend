import { session } from '../localStorage/session'
import {UPDATE_SESSION} from "../../../containers/App/session/constants";
import {REMOVE_SESSION_SUCCESS} from "../../../containers/App/signOut/constants";
import {SET_SESSION_SUCCESS} from "../../../containers/LoginContainer/containers/SignInPage/constants";

export const localStorageSessionMiddleWare = () => next => action => {
  const result = next(action)
  // eslint-disable-next-line default-case
  switch (action.type) {
    case REMOVE_SESSION_SUCCESS:
      session.remove()
      break
    case UPDATE_SESSION:
      // eslint-disable-next-line no-case-declarations
      const { session: currentSession } = session.get()
      session.set({
        session: {
          refreshToken: currentSession.refreshToken,
          token: currentSession.token,
          user: action.payload.session.user,
        },
      })
      break
    case SET_SESSION_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const { token, user, refreshToken } = action
      session.set({ session: { token, user, refreshToken } })
      break
  }

  return result
}

export const setSession = ({ token, user, id }) => {
    const now = new Date()

    const item = {
        expiration: now.getTime() + 86400000, // time in milliseconds
        token,
        user,
        id,
    }

    session.set(item)
}

export const getSession = () => {
    const sessionExtract = session.get()

    if (!sessionExtract) return null

    const now = new Date()
    if (now.getTime() > sessionExtract.expiration) {
        session.remove()
        return null
    }

    return sessionExtract.session
}
