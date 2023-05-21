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
import NotFound from "../components/NotFound/NotFound";
import Alltoys from "../components/Alltoys/Alltoys";
import Mytoys from "../components/Mytoys/Mytoys";
import UpdateToy from "../components/UpdateToy/UpdateToy";

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
          loader: ({params})=> fetch(`https://toy-marketplace-server-side-muntasaleheen-gmailcom.vercel.app/toy/${params.id}`)
        },
        {
          path: "/alltoys",
          element: <Alltoys></Alltoys>,
          loader: () => fetch('https://toy-marketplace-server-side-muntasaleheen-gmailcom.vercel.app/getall')
        },
        {
          path: "/mytoys",
          element: <PrivateRoute><Mytoys></Mytoys></PrivateRoute>
        },
        {
          path: '/update/:id',
          element: <UpdateToy></UpdateToy>,
          loader: ({params})=> fetch(`https://toy-marketplace-server-side-muntasaleheen-gmailcom.vercel.app/toy/${params.id}`)
        }
      ],
 
    },
    {
      path: "*",
      element: <NotFound></NotFound>
    },
  ]);

  export default router;