import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { IndexRoute } from "../routes/IndexRoute";
import { LobbyRoute } from "../routes/LobbyRoute";
import { NewLobbyRoute } from "../routes/NewLobbyRoute";
import { SharedLayout } from "../SharedLayout/SharedLayout";

export const App = () => {
  return (
    <SharedLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexRoute />} />
          <Route path="/:lobby" element={<LobbyRoute />} />
          <Route path="/newlobby" element={<NewLobbyRoute />} />
        </Routes>
      </BrowserRouter>
    </SharedLayout>
  );
};
