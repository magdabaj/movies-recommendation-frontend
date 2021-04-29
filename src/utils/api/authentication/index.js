import http from '../../request/http'

const signIn = (username, password) =>
  http.post('user/signin', { username, password })
const signOut = () => http.post('logout')
const resetPassword = (username, newPassword, recoveryPassword) =>
  http.post('reset-password', {
    username,
    newPassword,
    recoveryPassword,
  })

const authentication = {
  signIn,
  signOut,
  resetPassword,
}

export default authentication
