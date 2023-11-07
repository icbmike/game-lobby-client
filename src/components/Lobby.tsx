import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLobbyAction, joinLobbyAction, leaveLobbyAction } from "../redux/actions";
import { selectIsLoadingLobby, selectIsJoiningLobby, selectLobby, selectPlayer } from "../redux/selectors";
import { Button } from "./Button";
import { Loader } from "./Loader";

interface IProps {
  lobbyCode: string;
}

export const Lobby = ({ lobbyCode }: IProps) => {
  const dispatch = useDispatch();

  const isLobbyLoading = useSelector(selectIsLoadingLobby);
  const isJoiningLobby = useSelector(selectIsJoiningLobby);
  const lobby = useSelector(selectLobby);
  const player = useSelector(selectPlayer);

  const [name, setName] = useState('');

  useEffect(() => {
    dispatch(getLobbyAction({ lobbyCode }))
  }, [lobbyCode, dispatch]);

  const onJoinClick = () => {
    dispatch(joinLobbyAction({ lobbyCode, name }))
  };

  const onLeaveLobby = () => {
    dispatch(leaveLobbyAction({lobbyCode, playerId: player!.id}));
  }

  if (isLobbyLoading) {
    return <Loader />
  }

  if (!lobby) {
    return <><h1 className="margin-bottom-xlarge">Lobby not found</h1><a href="/" className="button">Back to home</a></>
  }

  return <>
    <h1 className="margin-bottom-xlarge">Lobby {lobbyCode}</h1>

    <ul className="margin-bottom-xlarge">
      {lobby.players.map(p => <li key={p.id}>{p.name}</li>)}
    </ul>

    {!player
      ? <div style={{ display: 'flex', alignItems: 'center' }}>
        <label className="margin-right-large" >Name</label>
        <input value={name} onChange={e => setName(e.target.value)} className='input margin-right-large' />

        <Button onClick={onJoinClick} isLoading={isJoiningLobby}>Join</Button>
      </div>
      : <Button onClick={onLeaveLobby}>Leave lobby</Button>
    }
  </>
}
