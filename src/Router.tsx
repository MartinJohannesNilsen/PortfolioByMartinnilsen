import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import App from "./App";

const Layout = () => (
  <>
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    // errorElement: <ErrorView />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
