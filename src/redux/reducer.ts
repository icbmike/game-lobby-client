import { createReducer } from "@reduxjs/toolkit";
import { joinLobbyAction } from "./actions";

interface IState {
  isJoiningLobby: boolean;
}

const initialState: IState = {
  isJoiningLobby: false,
};

export const reducer = createReducer(initialState, (builder) =>
  builder.addCase(joinLobbyAction, (state) => ({
    ...state,
    isJoiningLobby: true,
  }))
);
