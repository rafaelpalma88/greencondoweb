// import {IClient, IClientsState,
// IContextModel, IClientsAction} from '../interfaces';

export default (
    state: any, action: any): any => {
  switch (action.type) {
    case 'REMOVE_USER':
      console.log('state.clients', state.clients);
      return {
        clients: state.clients.filter(
            (client: any) => client.id !== action.payload,
        ),
      };
    case 'ADD_CLIENT':
      return {
        clients: [...state.clients, action.payload],
      };
    default:
      return state;
  }
}
;
