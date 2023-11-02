import { get, post } from "../api";
import { Lobby } from "../models";
import { createLobbyAction, createLobbyDoneAction, createLobbyFailedAction, getLobbyAction, getLobbyDoneAction, getLobbyFailedAction } from "./actions";
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

    window.location.href = `/lobby/${code}`
});

export const getLobbyEffect = createMikeEffect(getLobbyAction, async ({ payload }) => {
    try {
        const lobby = await get<Lobby>(`/api/lobbies/${payload.lobbyCode}`);

        return getLobbyDoneAction({ lobby });
    } catch (error: unknown) {
        return getLobbyFailedAction({ error: error as Error });
    }
});