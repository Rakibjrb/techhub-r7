import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main/Main";
import ErrorPage from "../Layout/ErrorPage";
import Products from "../Pages/Products/Products";
import AddProduct from "../Pages/AddProduct/AddProduct";
import UpdateProduct from "../Pages/AddProduct/UpdateProduct/UpdateProduct";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import MyCart from "../Pages/MyCart/MyCart";
import Switcher from "../Pages/LoginAndSignUp/Switcher";
import Protectection from "./Protectection";

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
        element: (
          <Protectection>
            <AddProduct />
          </Protectection>
        ),
      },
      {
        path: "/api/update/product/:_id",
        element: (
          <Protectection>
            <UpdateProduct />
          </Protectection>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-side.vercel.app/api/products/${params._id}`
          ),
      },
      {
        path: "/api/product/details/:_id",
        element: (
          <Protectection>
            <ProductDetails />
          </Protectection>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-side.vercel.app/api/products/${params._id}`
          ),
      },
      {
        path: "/user/mycart",
        element: (
          <Protectection>
            <MyCart />
          </Protectection>
        ),
        loader: () =>
          fetch("https://brand-shop-server-side.vercel.app/api/cartproducts"),
      },
      {
        path: "/user/account",
        element: <Switcher />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default routes;
