const homeBaseUrl = '/home'

const home = {
  toId: id => `${homeBaseUrl}/${id}`,
}

const dashboard = {
  index: '/',
}

const error = {
  index: '/error',
}

const signIn = {
  index: '/sign-in',
}

const urls = {
  dashboard,
  error,
  signIn,
  home,
}
