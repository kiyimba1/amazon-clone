import React, { createContext, useContext, useReducer } from "react"

//Preparea the dataLayer
export const StateContext = createContext({ reducer, initialState, children }=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information from the data layer
export const useStateValue = () => useContext(StateContext);