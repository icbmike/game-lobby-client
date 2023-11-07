import { RouterProvider } from "react-router";
import { createBrowserRouter} from "react-router-dom";
import { IndexRoute } from "../routes/IndexRoute";
import { LobbyRoute } from "../routes/LobbyRoute";
import { NewLobbyRoute } from "../routes/NewLobbyRoute";
import { SharedLayout } from "../SharedLayout/SharedLayout";
import { Provider } from "react-redux";
import { createStore } from "../../redux/store";
import { NotFoundRoute } from "../routes/NotFoundRoute";

const router = createBrowserRouter([
  { path: '/', element: <IndexRoute /> },
  { path: '/lobby/:lobbyCode', element: <LobbyRoute /> },
  { path: '/newLobby', element: <NewLobbyRoute /> },
  { path: '*', element: <NotFoundRoute /> }
]);

export const navigate = router.navigate;

const store = createStore();

export const App = () => {
  return (
    <Provider store={store}>
      <SharedLayout>
        <RouterProvider router={router} />
      </SharedLayout>
    </Provider>
  );
};
