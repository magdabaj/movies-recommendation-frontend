const loadDevConfig = () => {
  try {
    // eslint-disable-next-line global-require,import/no-unresolved
    const module = require('../../devConfig')
    return module.default
  } catch (e) {
    if (e instanceof Error && e.code === 'MODULE_NOT_FOUND')
      // eslint-disable-next-line no-console
      console.log('No devConfig found')
    return null
  }
}

export default loadDevConfig
