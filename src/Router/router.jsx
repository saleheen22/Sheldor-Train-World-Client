import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Skeleton/Main";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        
      ]
    },
  ]);

  export default router;