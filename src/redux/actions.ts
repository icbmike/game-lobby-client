import { createAction } from "@reduxjs/toolkit";
import { Lobby } from "../models";
import { createLoadAction } from "./createLoadAction";

export const joinLobbyAction = createAction<{ lobbyCode: string, name: string }>('joinLobby');

export const [
    getLobbyAction,
    getLobbyDoneAction, 
    getLobbyFailedAction
] =  createLoadAction<{ lobbyCode: string }, { lobby: Lobby }>('getLobby');

export const [
    createLobbyAction, 
    createLobbyDoneAction, 
    createLobbyFailedAction
] = createLoadAction<{ lobbySize: number }, { lobby: Lobby }>('createLobby');
