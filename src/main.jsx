import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import Landing from "./components/Home/Home.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Category from "./components/Category/Category.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/shop",
        element: <Shop />,
        children: [
          {
            index: true,
            element: <Category category="all" />,
          },
          {
            path: ":category",
            element: <Category />,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
