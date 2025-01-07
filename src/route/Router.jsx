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
import About from "../pages/About";
import Contact from "../pages/Contact";

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
        loader: () => fetch("https://visa-glide-server.vercel.app/visas")
      },
      {
        path: "add-visa",
        element: <PrivateRoute><AddVisa /></PrivateRoute>
      },
      {
        path: `added-visas/`,
        element: <PrivateRoute><AddedVisas /></PrivateRoute>,
        loader: () => fetch("https://visa-glide-server.vercel.app/visas")
      },
      {
        path: "applications",
        element: <PrivateRoute><Applications /></PrivateRoute>,
        loader: () => fetch("https://visa-glide-server.vercel.app/visas")
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "visa/:id",
        element: <VisaDetails />,
        loader: ({ params }) => fetch(`https://visa-glide-server.vercel.app/visa/${params.id}`)
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
