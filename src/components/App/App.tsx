import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { IndexRoute } from "../routes/IndexRoute";
import { LobbyRoute } from "../routes/LobbyRoute";
import { NewLobbyRoute } from "../routes/NewLobbyRoute";
import { SharedLayout } from "../SharedLayout/SharedLayout";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

export const App = () => {
  return (
    <Provider store={store}>
      <SharedLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexRoute />} />
            <Route path="/:lobby" element={<LobbyRoute />} />
            <Route path="/newlobby" element={<NewLobbyRoute />} />
          </Routes>
        </BrowserRouter>
      </SharedLayout>
    </Provider>
  );
};
