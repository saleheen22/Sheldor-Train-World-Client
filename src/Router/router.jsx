import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Skeleton/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Addtoy from "../components/Addtoy/Addtoy";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/addtoy",
          element: <PrivateRoute><Addtoy></Addtoy></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;