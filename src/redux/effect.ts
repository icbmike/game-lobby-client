import { get, post } from "../api";
import { JoinLobbyResponse, Lobby } from "../models";
import { createLobbyAction, createLobbyDoneAction, createLobbyFailedAction, getLobbyAction, getLobbyDoneAction, getLobbyFailedAction, joinLobbyAction, joinLobbyDoneAction, joinLobbyFailedAction } from "./actions";
import { createMikeEffect } from "./createMikeEffect";

export const createLobbyEffect = createMikeEffect(createLobbyAction, async ({ payload }) => {
    try {
        const lobby = await post<Lobby>('/api/lobbies', { lobbySize: payload.lobbySize });

        return createLobbyDoneAction({ lobby });
    } catch (error: unknown) {
        return createLobbyFailedAction({ error: error as Error });
    }
});

export const lobbyCreatedEffect = createMikeEffect(createLobbyDoneAction, async ({ payload }) => {
    const { code } = payload.lobby;

    window.location.assign(`/lobby/${code}`);
});

export const getLobbyEffect = createMikeEffect(getLobbyAction, async ({ payload }) => {
    try {
        const lobby = await get<Lobby>(`/api/lobbies/${payload.lobbyCode}`);

        return getLobbyDoneAction({ lobby });
    } catch (error: unknown) {
        return getLobbyFailedAction({ error: error as Error });
    }
});

export const joinLobbyEffect = createMikeEffect(joinLobbyAction, async ({ payload }) => {
    try {
        const response = await post<JoinLobbyResponse>(`/api/lobbies/${payload.lobbyCode}/players`, { name: payload.name });

        localStorage.setItem(`lobby.${payload.lobbyCode}.player`, JSON.stringify(response.newPlayer));

        return joinLobbyDoneAction(response);
    } catch (error: unknown) {
        return joinLobbyFailedAction({ error: error as Error });
    }
})