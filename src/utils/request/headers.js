import {session} from "../redux/localStorage/session";

export const makeLocalHeaders = () => {
  const token = session.getToken()
  return {
    Authorization: token,
  }
}

export const makeLocalRefreshTokenHeaders = makeLocalHeaders
