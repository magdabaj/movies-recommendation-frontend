/* global TEST_API_HOST_NAME, TEST_API_VERSION, TEST_API_PORT, TEST_WS_PORT */
const makeTestConfig = () => ({
  apiPort: TEST_API_PORT,
  wsPort: TEST_WS_PORT,
  apiVersion: TEST_API_VERSION,
  apiHostName: TEST_API_HOST_NAME,
  isSsl: false,
  featureToggle: {},
  allowedOrigins: ['test-origin'],
  loginPage: 'http://localhost/login',
})

export default makeTestConfig
