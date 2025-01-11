import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Signin from "../Pages/Signin/Signin";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h2>Route not found</h2>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
        },
        {
          path:"register",
          element:<Register></Register>,
        },
        {
          path:"signin",
          element:<Signin></Signin>
        }
      ]
    },
  ]);

  export default router;