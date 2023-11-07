import { createReducer } from "@reduxjs/toolkit";
import { Lobby, Player } from "../models";
import { createLobbyAction, createLobbyDoneAction, createLobbyFailedAction, getLobbyAction, getLobbyDoneAction, getLobbyFailedAction, joinLobbyAction, joinLobbyDoneAction, joinLobbyFailedAction, leaveLobbyAction, leaveLobbyDoneAction, leaveLobbyFailedAction, restoreSessionAction } from "./actions";

interface IState {
  isLoadingLobby: boolean;
  isJoiningLobby: boolean;
  isCreatingLobby: boolean;
  isLeavingLobby: boolean;
  lobby?: Lobby;
  player?: Player;
}

const initialState: IState = {
  isLoadingLobby: false,
  isJoiningLobby: false,
  isCreatingLobby: false,
  isLeavingLobby: false
};

export const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(createLobbyAction, state => ({
      ...state,
      isCreatingLobby: true,
    }))
    .addCase(createLobbyDoneAction, state => ({
      ...state,
      isCreatingLobby: false
    }))
    .addCase(createLobbyFailedAction, state => ({
      ...state,
      isCreatingLobby: false
    }))
    .addCase(getLobbyAction, state => ({
      ...state,
      isLoadingLobby: true
    }))
    .addCase(getLobbyDoneAction, (state, { payload }) => ({
      ...state,
      isLoadingLobby: false,
      lobby: payload.lobby
    }))
    .addCase(getLobbyFailedAction, state => ({
      ...state,
      isLoadingLobby: false
    }))
    .addCase(joinLobbyAction, state => ({
      ...state,
      isJoiningLobby: true
    }))
    .addCase(joinLobbyDoneAction, (state, { payload }) => ({
      ...state,
      isJoiningLobby: false,
      lobby: payload.lobby,
      player: payload.newPlayer
    }))
    .addCase(joinLobbyFailedAction, state => ({
      ...state,
      isJoiningLobby: false
    }))
    .addCase(restoreSessionAction, (state, { payload} ) => ({
      ...state,
      player: payload.player
    }))
    .addCase(leaveLobbyAction, state => ({
      ...state,
      isLeavingLobby: true
    }))
    .addCase(leaveLobbyDoneAction, state => ({
      ...state,
      lobby: undefined,
      player: undefined,
      isLeavingLobby: false
    }))
    .addCase(leaveLobbyFailedAction, state => ({
      ...state,
      isLeavingLobby: false
    }))
);
