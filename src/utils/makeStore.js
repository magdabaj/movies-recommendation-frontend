import React, { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'

export function makeStore(initialState, reducer) {
  const dispatchContext = createContext(() => undefined)
  const storeContext = createContext(initialState)

  const StoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(reducer, initialState)

    return (
      <dispatchContext.Provider value={dispatch}>
        <storeContext.Provider value={store}>{children}</storeContext.Provider>
      </dispatchContext.Provider>
    )
  }

  StoreProvider.propTypes = {
    children: PropTypes.node.isRequired,
  }

  function useDispatch() {
    return useContext(dispatchContext)
  }

  function useStore() {
    return useContext(storeContext)
  }

  return [StoreProvider, useDispatch, useStore]
}
