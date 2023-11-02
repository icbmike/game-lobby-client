import { createAction, PayloadActionCreator } from "@reduxjs/toolkit"

export const createLoadAction = <
    TLoadPayload = void, 
    TDonePayload = void, 
    TFailedPayload = { error: Error },
    >(type: string) : [PayloadActionCreator<TLoadPayload>, PayloadActionCreator<TDonePayload>, PayloadActionCreator<TFailedPayload>]=> {
        return [
            createAction<TLoadPayload>(type),
            createAction<TDonePayload>(`${type}/DONE`),
            createAction<TFailedPayload>(`${type}/FAILED`)
        ];
}
