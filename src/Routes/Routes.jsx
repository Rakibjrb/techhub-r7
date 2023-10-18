import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main/Main";
import ErrorPage from "../Layout/ErrorPage";
import Products from "../Pages/Products/Products";
import AddProduct from "../Pages/AddProduct/AddProduct";
import UpdateProduct from "../Pages/AddProduct/UpdateProduct/UpdateProduct";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
        loader: () =>
          fetch("https://brand-shop-server-side.vercel.app/api/brands"),
      },
      {
        path: "/products/:brand_name",
        element: <Products />,
        loader: () =>
          fetch("https://brand-shop-server-side.vercel.app/api/products"),
      },
      {
        path: "/api/add/product",
        element: <AddProduct />,
      },
      {
        path: "/api/update/product/:_id",
        element: <UpdateProduct />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default routes;
