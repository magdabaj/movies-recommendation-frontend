import loadDevConfig from './loadDevConfig'
const { config } = window

// todo @chris.hoffman refactor, .env is not used anymore
const makeDevConfig = () => {
  const devConfig = loadDevConfig()
  let globalConfig = {}
  if (devConfig) {
    globalConfig = devConfig
    // eslint-disable-next-line no-console
    console.log('Using config devConfig.js:')
  } else {
    globalConfig.apiPort = 3000//+process.env.API_PORT
    globalConfig.wsPort = 3000 //+process.env.WS_PORT
    globalConfig.appPort = 'localhost'// process.env.APP_PORT
    globalConfig.apiVersion = process.env.API_VERSION
    globalConfig.isSsl = !!+process.env.USE_SSL
    globalConfig.apiHostName = process.env.USE_DEV_CONFIG
      ? config.apiHostName
      : process.env.API_HOST_NAME
    globalConfig.apiUrl = ''
    globalConfig.apiHostName = 'localhost'
    // eslint-disable-next-line no-console
    console.log('Using config .env:')
  }

  if (!globalConfig.featureToggle) {
    globalConfig.featureToggle = {}
  }

  Object.entries(globalConfig).forEach(([key, value]) =>
    // eslint-disable-next-line no-console
    console.log({ [key]: value }),
  )
  return globalConfig
}

export default makeDevConfig
