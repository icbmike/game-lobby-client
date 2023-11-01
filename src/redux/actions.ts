import { createAction } from "@reduxjs/toolkit";
import { Lobby } from "../models";

export const joinLobbyAction = createAction<{lobbyCode: string}>('joinLobby');

export const createLobbyAction = createAction<{lobbySize: number}>('createLobby');
export const createLobbyDoneAction = createAction<{lobby: Lobby}>('createLobby/DONE');
export const createLobbyFailedAction = createAction<{error: Error}>('createLobby/Failed');
