import { Lobby } from "../models";
import { createLobbyAction, createLobbyDoneAction, createLobbyFailedAction } from "./actions";
import { createMikeEffect } from "./createMikeEffect";

export const createLobbyEffect = createMikeEffect(createLobbyAction, async ({payload}) => {
    try {
        const response = await fetch('/api/lobbies', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({lobbySize: payload.lobbySize})
        });

        const body = await response.json() as Lobby; 

        return createLobbyDoneAction({lobby: body});
    } catch(error: unknown){
        return createLobbyFailedAction({ error: error as Error});
    }
});

export const lobbyCreatedEffect = createMikeEffect(createLobbyDoneAction, async ({payload}) => {
  const { code } = payload.lobby;

  window.location.href = `/lobby/${code}`
});