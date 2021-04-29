const isSsl = window.location.protocol === 'https:'
const featureToggle = {
  showElementsWithoutBackendFunctionalityProvided: false,
}

window.config = {
  apiPort: isSsl ? 443 : 80,
  wsPort: isSsl ? 443 : 80,
  apiUrl: 'api/',
  apiHostName: window.location.hostname,
  isSsl,
  featureToggle,
  allowedOrigins: [],
  loginPage: `${window.location.hostname}/sign-in`,
}
