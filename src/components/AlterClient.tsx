import React, {useState, useEffect, useContext} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {GlobalContext} from '../context/GlobalState';
import {IClient} from '../interfaces';

interface IRouteParams {
  id: string
}

const AlterClient: React.FC<any> = (props) => {
  const [selectedClient, setSelectedClient] = useState<IClient>({
    id: '',
    name: '',
  });
  const {clients, alterClient} = useContext(GlobalContext);
  const history = useHistory();

  const routeParams: IRouteParams = useParams();
  const currentClientId = routeParams.id;

  useEffect(() => {
    const selectedUser = clients.find(
        (client: any) => client.id === currentClientId);

    setSelectedClient(selectedUser);
  }, [clients, currentClientId]);

  const handleSubmit = (client: any) => {
    alterClient(selectedClient);
    history.push('/');
  };

  const changeName = (e: any) => {
    setSelectedClient({...selectedClient, [e.target.name]: e.target.value});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text"
            value={selectedClient.name}
            onChange={changeName}
            name="name"
            placeholder="Digite o nome aqui" />
        </label>
        <button type="submit">Submit</button>
      </form>

    </div>);
};

export default AlterClient;
