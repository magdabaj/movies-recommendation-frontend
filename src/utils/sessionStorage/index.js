const sessionStorageItem = key => ({
  get: () => JSON.parse(sessionStorage.getItem(key)),
  set: value => sessionStorage.setItem(key, JSON.stringify(value)),
  remove: () => sessionStorage.removeItem(key),
})

export default sessionStorageItem
