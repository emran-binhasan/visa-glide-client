import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from '../pages/Register'
import Home from "../pages/Home";
import AllVisa from "../pages/AllVisa";
import AddVisa from "../pages/AddVisa";
import NotFound from "../pages/NotFound";
import AddedVisas from "../pages/AddedVisas";
import Applications from "../pages/Applications";
import VisaDetails from "../pages/VisaDetails";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { Navigate } from "react-router-dom"; // Import Navigate

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "all-visa",
        element: <AllVisa />,
        loader: () => fetch("http://localhost:5000/visas")
      },
      {
        path: "add-visa",
        element: <PrivateRoute><AddVisa /></PrivateRoute>
      },
      {
        path: `added-visas/`,
        element: <PrivateRoute><AddedVisas /></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/visas")
      },
      {
        path: "applications",
        element: <PrivateRoute><Applications /></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/visas")
      },
      {
        path: "visa/:id",
        element: <PrivateRoute><VisaDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/visa/${params.id}`)
      }
    ]
  },
  {
    path: "/auth",
    element: <PublicRoute><AuthLayout /></PublicRoute>,
    children: [
      {
        path: "",
        element: <Navigate to="login" replace /> // Redirect from /auth to /auth/login
      },
      {
        path: "login",
        element:<Login />
      },
      {
        path: "register",
        element: <Register />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);
