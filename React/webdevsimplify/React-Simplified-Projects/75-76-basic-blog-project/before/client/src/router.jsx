import { Navigate, createBrowserRouter } from "react-router-dom";
import { postsListRoute } from "./pages/PostsList";
import { postsUserRoute } from "./pages/UsersList";
import { todosRoute } from "./pages/TodosList";
import RootLayout from "./layouts/RootLayout";
import { postRoute } from "./pages/Post";
import { userRoute } from "./pages/User";
import { newPostRoute } from "./pages/NewPost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        // errorElement: <h1>Error - Something Went Wrong</h1>,
        children: [
          { index: true, element: <Navigate to="/posts" /> },
          {
            path: "posts",
            children: [
              { index: true, ...postsListRoute },
              { path: ":postId", ...postRoute },
              { path: "new", ...newPostRoute },
            ],
          },
          {
            path: "users",
            children: [
              { index: true, ...postsUserRoute },
              { path: ":userId", ...userRoute },
            ],
          },
          { path: "todos", ...todosRoute },
          { path: "*", element: <h1>404 - Page Not Found</h1> },
        ],
      },
    ],
  },
]);
