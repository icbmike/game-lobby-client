import { TState } from "./store";

export const selectIsCreatingLobby = (state: TState) => state.lobbies.isCreatingLobby;

export const selectIsJoiningLobby = (state: TState) => state.lobbies.isJoiningLobby;

export const selectIsLoadingLobby = (state: TState) => state.lobbies.isLoadingLobby;

export const selectLobby = (state: TState) => state.lobbies.lobby;
