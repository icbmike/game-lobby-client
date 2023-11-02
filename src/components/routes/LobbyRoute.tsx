import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getLobbyAction } from "../../redux/actions";
import { selectIsLoadingLobby, selectLobby } from "../../redux/selectors";
import { Loader } from "../Loader";

export const LobbyRoute = () => {
    const dispatch = useDispatch();
    const { lobbyCode } = useParams();
    const isLobbyLoading = useSelector(selectIsLoadingLobby);
    const lobby = useSelector(selectLobby);
    const [name, setName] = useState('');

    useEffect(() => {
        if (lobbyCode) {
            dispatch(getLobbyAction({ lobbyCode }))
        }
    }, [lobbyCode, dispatch]);

    if (isLobbyLoading) {
        return <Loader />
    }

    return <>
        <h1 className="margin-bottom-xlarge">Lobby {lobbyCode}</h1>
        <p  className="margin-bottom-xlarge"><code>{JSON.stringify(lobby)}</code></p>

        <div style={{display: 'flex', alignItems: 'center'}}>
            <label className="margin-right-large" >Name</label>
            <input value={name} onChange={e => setName(e.target.value)} className='input margin-right-large' />
            <button className="button">Join</button>
        </div>
    </>;
};