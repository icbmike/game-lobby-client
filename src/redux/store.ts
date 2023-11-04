import { combineReducers, configureStore, StateFromReducersMapObject } from "@reduxjs/toolkit";
import { createLobbyEffect, getLobbyEffect, joinLobbyEffect, lobbyCreatedEffect } from "./effect";
import { reducer } from "./reducer";

const reducerMap = {
    lobbies: reducer,
}

export type TState = StateFromReducersMapObject<typeof reducerMap>;

export const store = configureStore(
    { 
        reducer: combineReducers(reducerMap), 
        middleware: [
            createLobbyEffect,
            lobbyCreatedEffect,
            getLobbyEffect,
            joinLobbyEffect
        ]
    }
);