import { createReducer } from "@reduxjs/toolkit";
import { Lobby } from "../models";
import { createLobbyAction, createLobbyDoneAction, createLobbyFailedAction, getLobbyAction, getLobbyDoneAction, getLobbyFailedAction, joinLobbyAction } from "./actions";

interface IState {
  isLoadingLobby: boolean;
  isJoiningLobby: boolean;
  isCreatingLobby: boolean;
  lobby?: Lobby;
}

const initialState: IState = {
  isLoadingLobby: false,
  isJoiningLobby: false,
  isCreatingLobby: false
};

export const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(joinLobbyAction, state => ({
      ...state,
      isJoiningLobby: true,
    }))
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
);
