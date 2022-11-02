// React context API
// https://www.loginradius.com/blog/engineering/react-context-api-guide-with-example/

import React, { createContext, useContext, useReducer } from "react";
//data layer
export const StateContext = createContext();

/* children refers to all child components that we wrap inside at index.js */
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//how its used in components
export const useStateValue = () => useContext(StateContext);
