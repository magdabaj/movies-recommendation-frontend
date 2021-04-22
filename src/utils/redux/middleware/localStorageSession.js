import { session } from '../localStorage/session'

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

    return sessionExtract
}
