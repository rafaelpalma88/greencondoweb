import { IClient, IClientsState, IContextModel, IClientsAction } from '../interfaces'

export default (state: IClientsState, action: IClientsAction): IClientsState  => {
  switch(action.type) {
    case 'REMOVE_USER':
      return {
        clients: state.clients.filter((client: IClient) => client.id !== action.payload)
      } 
    default: 
      return state;
  }
}