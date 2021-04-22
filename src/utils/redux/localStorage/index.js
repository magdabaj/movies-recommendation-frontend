const localStorageItem = key => ({
    get: () => JSON.parse(localStorage.getItem(key)),
    set: value => localStorage.setItem(key, JSON.stringify(value)),
    remove: () => localStorage.removeItem(key),
})

export default localStorageItem
