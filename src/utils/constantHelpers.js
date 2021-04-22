export const withNamespace = namespace => (constant, isRequest = false) =>
    isRequest ? asRequestConst(namespace, constant) : `${namespace}/${constant}`

export const asRequestConst = (nameSpace, constant) => ({
    REQUEST: requestConst(nameSpace, constant),
    SUCCESS: successConst(nameSpace, constant),
    FAILED: failedConst(nameSpace, constant),
})
export const requestConst = (nameSpace, constant) =>
    `${nameSpace}/REQUEST_${constant}`
export const successConst = (nameSpace, constant) =>
    `${nameSpace}/${constant}_SUCCESS`
export const failedConst = (nameSpace, constant) =>
    `${nameSpace}/${constant}_FAILED`