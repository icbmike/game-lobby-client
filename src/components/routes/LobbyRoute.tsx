import { useParams } from "react-router";

export const LobbyRoute = () => {
    const {lobby} = useParams();

    return <h1>Lobby {lobby}</h1>
};