import React, { createContext, useContext, useReducer } from 'react'
import thesaurusScales from '../utils/thesaurusScales'

// context
const AppContext = createContext(thesaurusScales)

// reducer
const reducer = (state, action) => {
  switch(action.type) {
    case 'CHANGE_SCALE':
      return thesaurusScales[action.payload]
  }
  return state
}

// provider
const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, thesaurusScales.light)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

// helpers
const useAppContext = () => useContext(AppContext)

export { AppContextProvider, useAppContext }