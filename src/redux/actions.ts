import { createAction } from "@reduxjs/toolkit";

export const joinLobbyAction = createAction<{lobbyCode: string}>('joinLobby');

export const createLobbyAction = createAction<{lobbySize: number}>('createLobby');
