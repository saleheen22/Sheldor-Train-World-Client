import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Skeleton/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Addtoy from "../components/Addtoy/Addtoy";
import SingleToy from "../components/SingleToy/SingleToy";

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
        },
        {
          path: "toy/:id",
          element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/toy/${params.id}`)
        }
      ]
    },
  ]);

  export default router;