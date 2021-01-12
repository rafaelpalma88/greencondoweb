import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
import { IClient, IClientsState, IContextModel, IClientsAction } from '../interfaces'

//Initial State
const initialState: any = {
  clients: [
    {id: "1", name: "Joao"}, 
    {id: "2", name: "Jose"}, 
    {id: "3", name: "Roberto"}
  ]
}

//Create Context
export const GlobalContext = createContext<any>(initialState);

//Provider Component
export const GlobalProvider = ({ children }: any ) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  const removeClient = (id: string): void => {
    dispatch({
      type: 'REMOVE_USER',
      payload: id
    })
  }

  return (
    <GlobalContext.Provider value={{
      clients: state.clients,
      removeClient
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

