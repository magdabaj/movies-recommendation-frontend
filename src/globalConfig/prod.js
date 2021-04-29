const { config } = window

const makeProductionConfig = () => {
  const globalConfig = {
    ...config,
  }
  console.log(globalConfig)
  return globalConfig
}

export default makeProductionConfig
