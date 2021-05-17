import React from 'react'
import { createContext,useContext } from 'react';
import { useReducer } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ reducer, initalState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initalState)}>
    {children}
  </StateContext.Provider>
);



export const useStateValue = () => useContext(StateContext);
