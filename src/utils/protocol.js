import globalConfig from '../globalConfig'

const protocol = {
  makeWebSocket() {
    switch (true) {
      // case globalConfig.isCloud:
      //   return protocol.makeHttp()
      case globalConfig.isSsl:
        return 'wss'
      default:
        return 'ws'
    }
  },
  makeHttp: () => (globalConfig.isSsl ? 'https' : 'http'),
}

export default protocol
