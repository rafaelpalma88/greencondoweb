import React from "react";

export interface IClient {
  id: string;
  name: string;
  removeClient(): void;
}

export interface IClientsState {
  clients: IClient[];
}

export interface IContextModel {
  state: IClientsState;
  dispatch: React.Dispatch<IClientsAction>;
}

export type IClientsAction =
  | { type: 'TESTE'; payload: IClient }
  | { type: 'REMOVE_USER'; payload: string };  