import { ChangeEvent, useState } from "react";

export const IndexRoute = () => {
  const [lobbyCode, setLobbyCode] = useState("");

  const onLobbyCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLobbyCode(e.target.value.toUpperCase());
  }

  const onJoinLobbyClick = () => {};

  return (
    <>
      <h1 className="margin-bottom-xlarge">Sick ass game lobby</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <a href="/newLobby" className="button margin-bottom">
          New Lobby
        </a>
        <div>
          <input
            className="input margin-right"
            placeholder="Lobby Code"
            onChange={onLobbyCodeChange}
            value={lobbyCode}
          />
          <button className="button" onClick={onJoinLobbyClick}>
            Join Lobby
          </button>
        </div>
      </div>
    </>
  );
};
