import { TState } from "./store";

export const selectIsCreatingLobby = (state: TState) => state.lobbies.isCreatingLobby;

export const selectIsJoiningLobby = (state: TState) => state.lobbies.isJoiningLobby;
