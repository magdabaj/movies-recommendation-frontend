export const isEnvironment = environment => process.env.NODE_ENV === environment


const doIfEnvironment = (action, environment) => {
  if (process.env.NODE_ENV === environment) {
    action()
  }
}

const doIfNotEnvironment = (action, environment) => {
  if (process.env.NODE_ENV !== environment) {
    action()
  }
}


export const doIfNotProduction = action =>
  doIfNotEnvironment(action, 'production')

export const doIfDev = action => doIfEnvironment(action, 'development')

export const isTest = () => isEnvironment('test')
