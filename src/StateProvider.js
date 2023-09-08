// setup data layout

import { createContext, useContext, useReducer } from "react";

// 1. the data layout
export const stateContext = createContext()

// 2.  the provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <stateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </stateContext.Provider>
);


// this is how we use it inside of a component
export const useStateValue = () => useContext(stateContext)
