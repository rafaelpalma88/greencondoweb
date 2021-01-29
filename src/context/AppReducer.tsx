import {IClient} from '../interfaces';


export default (
    state: any, action: any): any => {
  switch (action.type) {
    case 'REMOVE_USER':
      // console.log('state.clients', state.clients);
      return {
        clients: state.clients.filter(
            (client: IClient) => client.id !== action.payload,
        ),
      };
    case 'ADD_CLIENT':
      return {
        clients: [...state.clients, action.payload],
      };
    case 'ALTER_CLIENT':

      const updateClient = action.payload;

      const updateClients = state.clients.map((client: IClient) => {
        if (client.id === updateClient.id) {
          return updateClient;
        }
        return client;
      });

      return {
        clients: updateClients,
      };
    default:
      return state;
  }
}
;
