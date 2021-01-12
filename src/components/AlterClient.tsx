import React, { useState } from 'react';
import { IClient } from '../interfaces'

const AddClient: React.FC = () => {

  /*const [clients, setClients] = useState<IClient[]>([
    {id: "1", name: "Joao"}, 
    {id: "2", name: "Jose"}, 
    {id: "3", name: "Roberto"}
  ]);
  const [alteringClient, setAlteringClient] = useState<IClient>({id: "1", name: "Joao"});

  const alterClient = (clientId: string) => {
    const result = clients.filter(client => client.id === clientId);
    setAlteringClient(result[0])
  }

  const deleteClient = (clientId: string) => {
    const newClientList = clients.filter(client => client.id !== clientId);
    setClients(newClientList)
  }

  const handleSubmit = () => {}

  const handleChange = (clientName: string) => {
    console.log(`Alterando ${clientName}`)

  }

  return (
    <>
      <div>Cliente alterado:</div>

      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <textarea value={alteringClient.name} onChange={() => handleChange(alteringClient.name)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    
    </>
  )*/
  return (<div>Oi Gente</div>)

}

export default AddClient;
