import React, { createContext, useContext, useReducer } from 'react'
import thesaurusScales from '../utils/thesaurusScales'

const defaultContext = {
  volume: 2,
  ...thesaurusScales.light,
}

// context
const AppContext = createContext(defaultContext)

// reducer
const reducer = (state, action) => {
  switch(action.type) {
    case 'CHANGE_SCALE':
      return {
        ...state,
        ...thesaurusScales[action.payload]
      }
    case 'CHANGE_VOLUME':
      return {
        ...state,
        volume: action.payload
      }
  }
  return state
}

// provider
const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultContext)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

// helpers
const useAppContext = () => useContext(AppContext)

export { AppContextProvider, useAppContext }