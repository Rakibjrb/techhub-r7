import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main/Main";
import ErrorPage from "../Layout/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default routes;
