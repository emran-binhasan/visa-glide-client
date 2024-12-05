import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AllVisa from "./pages/AllVisa";
import AddVisa from "./pages/AddVisa";
import NotFound from "./pages/NotFound";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'all-visa',
            element:<AllVisa/>
        },
        {
            path:'add-visa',
            element:<AddVisa/>
        },
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path:'*',
    element:<NotFound/>
  }
]);
