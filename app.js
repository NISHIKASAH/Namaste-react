import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./src/components/Contact";
import Errorpage from "./src/components/Errorpage";
import About from "./src/components/About";
import Menucard from "./src/components/Menucard";
import LoginPage from "./src/components/LoginPage";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";
import userContext from "./src/utils/userContext";

const GroceryLazy = lazy(() => import("./src/components/Grocery"));
const AppLayout = () => {
  const [username, setuserName] = useState("");
  const userDetails = {
    name: "Nishika",
  };
  useEffect(() => {
    setuserName(userDetails.name);
  });
  return (
    <Provider store={appStore}>
      <userContext.Provider
        value={{ userName: username, setuserName: setuserName }}
      >
        <div>
          <Header />
          {/* //inside outlet all config data is wrapped */}
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  );
};
//To Create Routes , Route Config is created using createBrowserRouter
//and wrapped inside RouterProvider
const createRouteConfig = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/menucard/:resId",
        element: <Menucard />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            {" "}
            <GroceryLazy />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    //if element not there, else error component run
    errorElement: <Errorpage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={createRouteConfig} />);
