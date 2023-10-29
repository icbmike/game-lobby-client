import { createAction } from "@reduxjs/toolkit";

export const joinLobbyAction = createAction<{lobbyCode: string}>('joinLobby');