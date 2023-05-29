import React from "react";
import { useRoutes  } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostView from "./pages/PostView";
import PostWrite from "./pages/PostWrite";

function Router() {
  const routes = 
    useRoutes([
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "posts",
            children: [
              {
                path: "write",
                element: <PostWrite />,
              },
              {
                path: "write/:id",
                element: <PostWrite />,
              },
              {
                path: ":id",
                element: <PostView />,
              },
              {
                path: "category/:categoryId",
                element: <Posts/>,
              },
              {
                path: "",
                element: <Posts/>,
              },
            ],
          },
          {
            path: "",
            element: <Home />,
          },
        ],
      },
    ]);
  return routes;
}

export default Router;
