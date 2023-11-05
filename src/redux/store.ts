import { combineReducers, configureStore, StateFromReducersMapObject } from "@reduxjs/toolkit";
import * as allEffects from "./effect";
import { reducer } from "./reducer";
import { localStorageKeys } from "../constants";
import { Player } from "../models";
import { restoreSessionAction } from "./actions";

const reducerMap = {
  lobbies: reducer,
}

export type TState = StateFromReducersMapObject<typeof reducerMap>;

export const createStore = () => {
  const store = configureStore(
    {
      reducer: combineReducers(reducerMap),
      middleware: [
        ...Object.values(allEffects)
      ]
    }
  );

  const storedPlayer = localStorage.getItem(localStorageKeys.player)
  const storedLobbyCode = localStorage.getItem(localStorageKeys.lobbyCode)
  if(storedPlayer && storedLobbyCode){
    const player = JSON.parse(storedPlayer) as Player

    store.dispatch(restoreSessionAction({player, lobbyCode: storedLobbyCode}))
  }

  return store;
}
