import { useParams } from "react-router";
import { Lobby } from "../Lobby";

export const LobbyRoute = () => {
  const { lobbyCode } = useParams();

  return lobbyCode
    ? <Lobby lobbyCode={lobbyCode} />
    : <div style={{ display: 'flex', alignItems: 'center' }}>
        <p>Lobby code missing in url</p><a href="/" className="button">Go home</a>
      </div>
};
