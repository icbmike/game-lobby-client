import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createLobbyAction } from "../../redux/actions";
import { selectIsCreatingLobby } from "../../redux/selectors";
import { Button } from "../Button";

export const NewLobbyRoute = () => {
  const dispatch = useDispatch();
  const [lobbySize, setLobbySize] = useState(6);
  const isCreatingLobby = useSelector(selectIsCreatingLobby);

  const onLobbySizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);

    setLobbySize(value);
  };

  const onCreateLobbyClick = () => {
    dispatch(createLobbyAction({ lobbySize }));
  };

  const isValid = lobbySize >= 2 && lobbySize <= 75;

  return (
    <>
      <h1 className="margin-bottom-large">Create new lobby</h1>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <label className="margin-right">Lobby size</label>

        <input
          className="input margin-right"
          type="number"
          min={2}
          max={75}
          value={lobbySize}
          onChange={onLobbySizeChange}
        />

        <Button
          isDisabled={!isValid}
          isLoading={isCreatingLobby}
          onClick={onCreateLobbyClick}
        >
          Create lobby
        </Button>
      </div>
    </>
  );
};
