import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Help from "./components/Help";
import Offer from "./components/Offer";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return(
    <>
      <Header />
      <Outlet />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [{
      path: "/help",
      element: <Help />
    },
    {
      path: "/offer",
      element: <Offer />
    },
    {
      path: "/",
      element: <Body />
    },
    {
      path: "/restaurant/:id",
      element: <RestaurantMenu />
    }
  ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);