import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {GlobalContext} from '../context/GlobalState';
import styled from 'styled-components';
import {IClient} from '../interfaces';

const TextLink = styled.a`
  text-decoration: underline;
  color: blue;
`;

const Clients: React.FC = () => {
  const {clients, removeClient} = useContext(GlobalContext);
  return (
    <>
      <div>Lista de Clientes:</div>

      {clients.length > 0 ? (
        <>
          <table>
            <tbody>
              <tr>
                <td>Nome</td>
                <td>Editar</td>
                <td>Excluir</td>
              </tr>

              <>
                {clients.map((client: IClient, i: number) => (
                  <tr key={client.id}>
                    <td>
                      {client.name} posicao {i}
                    </td>
                    <td>
                      <Link to={`/alterclient/${client.id}`}>
                        Alterar Cliente
                      </Link>
                    </td>
                    <td>
                      <TextLink
                        onClick={() => removeClient(client.id)}
                      >
                        Excluir Cliente
                      </TextLink>
                    </td>
                  </tr>
                ))}
              </>

            </tbody>
          </table>
        </>
      ) : (
            <>
              <p>NAO TEMOS CLIENTES PARA EXIBIR</p>
            </>
          )}
    </>
  );
};

export default Clients;
