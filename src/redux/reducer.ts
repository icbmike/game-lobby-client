import { createReducer } from "@reduxjs/toolkit";
import { createLobbyAction, createLobbyDoneAction, createLobbyFailedAction, joinLobbyAction } from "./actions";

interface IState {
  isJoiningLobby: boolean;
  isCreatingLobby: boolean;
}

const initialState: IState = {
  isJoiningLobby: false,
  isCreatingLobby: false
};

export const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(joinLobbyAction, (state) => ({
      ...state,
      isJoiningLobby: true,
    }))
    .addCase(createLobbyAction, (state) => ({
      ...state,
      isCreatingLobby: true,
    }))
    .addCase(createLobbyDoneAction, (state) => ({
      ...state,
      isCreatingLobby: false
    }))
    .addCase(createLobbyFailedAction, (state) => ({
      ...state,
      isCreatingLobby: false
    }))
);
