import { BaseActionCreator, PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { AnyAction, Middleware } from "redux";
import { TState } from "./store";

export const createMikeEffect = <P, T extends string>(
    actionCreator: BaseActionCreator<P, T>, 
    handler: (action: PayloadAction<P, T>) => Promise<AnyAction | void>): Middleware<{}, TState> => {

    return store => next => (action: AnyAction) => {
        if(actionCreator.match(action)){
            handler(action).then(outAction => {
                if(outAction){
                    store.dispatch(outAction);
                }
            });
        }

        next(action);
    }
}