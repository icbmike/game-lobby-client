import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getLobbyAction, joinLobbyAction } from "../../redux/actions";
import { selectIsJoiningLobby, selectIsLoadingLobby, selectLobby, selectPlayer } from "../../redux/selectors";
import { Button } from "../Button";
import { Loader } from "../Loader";

export const LobbyRoute = () => {
    const dispatch = useDispatch();
    const { lobbyCode } = useParams();

    const isLobbyLoading = useSelector(selectIsLoadingLobby);
    const isJoiningLobby = useSelector(selectIsJoiningLobby);
    const lobby = useSelector(selectLobby);
    const player = useSelector(selectPlayer);

    const [name, setName] = useState('');

    useEffect(() => {
        if (lobbyCode) {
            dispatch(getLobbyAction({ lobbyCode }))
        }
    }, [lobbyCode, dispatch]);

    const onJoinClick = () => {
        dispatch(joinLobbyAction({ lobbyCode: lobbyCode!, name }))
    };

    if (isLobbyLoading) {
        return <Loader />
    }

    if (!lobby) {
        return <><h1 className="margin-bottom-xlarge">Lobby not found</h1><a href="/" className="button">Back to home</a></>
    }

    return <>
        <h1 className="margin-bottom-xlarge">Lobby {lobbyCode}</h1>
        <p className="margin-bottom-xlarge"><code>{JSON.stringify(lobby)}</code></p>

        <ul className="margin-bottom-xlarge">
            {lobby.players.map(p => <li key={p.id}>{p.name}</li>)}
        </ul>

        {!player 
            ? <div style={{ display: 'flex', alignItems: 'center' }}>
                <label className="margin-right-large" >Name</label>
                <input value={name} onChange={e => setName(e.target.value)} className='input margin-right-large' />

                <Button className="button" onClick={onJoinClick} isLoading={isJoiningLobby}>Join</Button>
              </div>
            : null
        }
    </>
};