import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import ErrorPage from "./views/ErrorPage";
import TestPage from "./views/TestPage";
import Home from "./views/home/Home";
import LendingItem from "./views/lend/LendingItem";
import Lends from "./views/lend/Lends";
import NewLending from "./views/lend/NewLending";
import Collection from "./views/collection/Collection";
import Income from "./views/otherIncome/Income";
import Dashboard from "./views/dashboard/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home/:nic",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "lend/:lendId",
        element: <LendingItem />,
      },
      {
        path: "lend/new",
        element: <NewLending />,
      },
      {
        path: "lend",
        element: <Lends />,
      },
      {
        path: "collection",
        element: <Collection />,
      },
      {
        path: "other-income",
        element: <Income />,
      },
      {
        path: "test",
        element: <TestPage />,
      },
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
]);

export default routes;
