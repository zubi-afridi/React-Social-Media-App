import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostList from "./components/PostList.jsx";
import CreatePost from "./components/CreatePost.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> },
      { path: "/create-post", element: <CreatePost /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
