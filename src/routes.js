import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import ErrorPage from "./views/ErrorPage";
import TestPage from "./views/TestPage";
import Home from "./views/home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "test",
        element: <TestPage />,
      },
    ],
  },
]);

export default routes;
