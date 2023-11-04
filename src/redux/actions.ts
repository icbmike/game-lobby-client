import { JoinLobbyResponse, Lobby } from "../models";
import { createLoadAction as createRequestDoneFailedAction } from "./createLoadAction";

export const [
    joinLobbyAction, 
    joinLobbyDoneAction, 
    joinLobbyFailedAction
] = createRequestDoneFailedAction<{ lobbyCode: string, name: string }, JoinLobbyResponse>('joinLobby');

export const [
    getLobbyAction,
    getLobbyDoneAction,
    getLobbyFailedAction
] = createRequestDoneFailedAction<{ lobbyCode: string }, { lobby: Lobby }>('getLobby');

export const [
    createLobbyAction,
    createLobbyDoneAction,
    createLobbyFailedAction
] = createRequestDoneFailedAction<{ lobbySize: number }, { lobby: Lobby }>('createLobby');
