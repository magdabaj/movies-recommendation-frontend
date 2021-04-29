import makeDevConfig from './dev'
import makeTestConfig from './test'
import makeProductionConfig from './prod'

const makeGlobalConfig = () => {
  if (process.env.NODE_ENV === 'development') {
    return makeDevConfig()
  }
  if (process.env.NODE_ENV === 'test') {
    return makeTestConfig()
  }
  return makeProductionConfig()
}

const globalConfig = makeGlobalConfig()

export default globalConfig
