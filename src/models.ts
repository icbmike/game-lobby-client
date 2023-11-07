export interface Player {
    name: string;
    id: string;
}

export interface Lobby {
    code: string;
    players: Player[]
    lobbySize?: number,
    createdDate: Date
}

export interface JoinLobbyResponse {
    lobby: Lobby;
    newPlayer: Player;
}

interface Success<TBody> {
  data: TBody;
  ok: true;
}

interface Fail {
  ok: false;
  error: Error;
}

export type TResponse<TBody> = Success<TBody> | Fail;
