import { deleteRequest, get, post } from "../api";
import { JoinLobbyResponse, Lobby } from "../models";
import { createLobbyAction, createLobbyDoneAction, createLobbyFailedAction, getLobbyAction, getLobbyDoneAction, getLobbyFailedAction, joinLobbyAction, joinLobbyDoneAction, joinLobbyFailedAction, leaveLobbyAction, leaveLobbyDoneAction, leaveLobbyFailedAction, restoreSessionAction } from "./actions";
import { createMikeEffect } from "./createMikeEffect";
import { localStorageKeys } from "../constants";
import { navigate } from "../components/App/App";

export const createLobbyEffect = createMikeEffect(createLobbyAction, async ({ payload }) => {
  const response = await post<Lobby>('/api/lobbies', { lobbySize: payload.lobbySize });

  return response.ok
    ? createLobbyDoneAction({ lobby: response.data })
    : createLobbyFailedAction({ error: response.error });
});

export const lobbyCreatedEffect = createMikeEffect(createLobbyDoneAction, async ({ payload }) => {
  const { code } = payload.lobby;

  await navigate(`/lobby/${code}`);
});

export const getLobbyEffect = createMikeEffect(getLobbyAction, async ({ payload }) => {
  const response = await get<Lobby>(`/api/lobbies/${payload.lobbyCode}`);

  if (response.ok) {
    return getLobbyDoneAction({ lobby: response.data });
  }

  localStorage.removeItem(localStorageKeys.player);
  localStorage.removeItem(localStorageKeys.lobbyCode);

  return getLobbyFailedAction({ error: response.error });
});

export const joinLobbyEffect = createMikeEffect(joinLobbyAction, async ({ payload }) => {
  const response = await post<JoinLobbyResponse>(`/api/lobbies/${payload.lobbyCode}/players`, { name: payload.name });

  if (response.ok) {
    localStorage.setItem(localStorageKeys.player, JSON.stringify(response.data.newPlayer));
    localStorage.setItem(localStorageKeys.lobbyCode, response.data.lobby.code);

    return joinLobbyDoneAction(response.data);
  }

  return joinLobbyFailedAction({ error: response.error });
});

export const restoreSessionEffect = createMikeEffect(restoreSessionAction, async ({ payload }) => {
  const { lobbyCode } = payload

  if (window.location.pathname !== `/lobby/${lobbyCode}`) {
    await navigate(`/lobby/${lobbyCode}`);
  }
});

export const leaveLobbyEffect = createMikeEffect(leaveLobbyAction, async ({ payload }) => {
  const response = await deleteRequest(`/api/lobbies/${payload.lobbyCode}/players/${payload.playerId}`);

  if (response.ok) {
    localStorage.removeItem(localStorageKeys.player);
    localStorage.removeItem(localStorageKeys.lobbyCode);

    await navigate(`/`);

    return leaveLobbyDoneAction();
  }

  return leaveLobbyFailedAction({ error: response.error });
});
