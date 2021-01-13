import React, {useContext} from 'react';
// import {IClient} from '../interfaces';
import {GlobalContext} from '../context/GlobalState';
import {useHistory} from 'react-router-dom';

const AddClient: React.FC = () => {
  // const {addUser} = useContext(GlobalContext);


  /* const [clients, setClients] = useState<IClient[]>([
    {id: "1", name: "Joao"},
    {id: "2", name: "Jose"},
    {id: "3", name: "Roberto"}
  ]);
  const [alteringClient, setAlteringClient] =
  useState<IClient>({id: "1", name: "Joao"});

  const alterClient = (clientId: string) => {
    const result = clients.filter(client => client.id === clientId);
    setAlteringClient(result[0])
  }

  const deleteClient = (clientId: string) => {
    const newClientList = clients.filter(client => client.id !== clientId);
    setClients(newClientList)
  }*/

  const {addClient} = useContext(GlobalContext);
  const history = useHistory();

  const handleSubmit = (client: any) => {
    const newUser = {
      id: '4',
      name: 'Rafael Palma',
    };
    addClient(newUser);
    history.push('/');
  };

  /* const handleChange = (clientName: string) => {
    console.log(`Alterando ${clientName}`)

  }

  return (
    <>
      <div>Cliente alterado:</div>


    </>
  )*/

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" placeholder="Digite o nome aqui" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddClient;
