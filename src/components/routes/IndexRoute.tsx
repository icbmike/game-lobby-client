import { ChangeEvent, useState } from "react";

const nonAlphaNumeric = /[^A-Za-z0-9]/;

export const IndexRoute = () => {
  const [lobbyCode, setLobbyCode] = useState("");

  const onLobbyCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newLobbyCode = e.target.value.toUpperCase().replace(nonAlphaNumeric, '');
    setLobbyCode(newLobbyCode);
  };

  const onJoinLobbyClick = () => {
    window.location.href = `/lobby/${lobbyCode}`
  };

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
            maxLength={5}
            className="input margin-right"
            placeholder="Lobby Code"
            onChange={onLobbyCodeChange}
            value={lobbyCode}
            accept=""
          />
          <button disabled={lobbyCode.length !== 5} className="button" onClick={onJoinLobbyClick}>
            Join Lobby
          </button>
        </div>
      </div>
    </>
  );
};
