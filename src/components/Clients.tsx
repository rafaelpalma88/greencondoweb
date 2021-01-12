import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { GlobalContext } from '../context/GlobalState'
import styled from 'styled-components';
import { IClient } from '../interfaces'

const TextLink = styled.a`
  text-decoration: underline;
  color: blue;
`;

const Clients: React.FC = () => {

  const { clients, removeClient } = useContext(GlobalContext)

  const [alteringClient, setAlteringClient] = useState<IClient | null>(null);

  const alterClient = (clientId: string) => {
    const result = clients.filter((client: any )=> client.id === clientId);
    setAlteringClient(result[0])
  }

  const handleSubmit = () => {
    
  } 

  const handleChange = (clientName: string) => {
    console.log(`Alterando ${clientName}`)

  }

  return (
    <>
      <div>Lista de Clientes:</div>

      <table>
        <tbody>
          <tr>
            <td>Nome</td>
            <td>Editar</td>
            <td>Excluir</td>
          </tr>
          {clients.map((client: any, i: any) => (
            <tr key={client.id}>
              <td>
                {client.name} posicao {i} 
              </td>
              <td><Link to={`/alterclient/${client.id}`}>Alterar Cliente</Link></td>
              <td><TextLink onClick={() => removeClient(client.id)}>Excluir Cliente</TextLink></td>
            </tr>
          ))}
        </tbody>
      </table>

      {alteringClient && (
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
      )}
    </>
  )
}

export default Clients;
