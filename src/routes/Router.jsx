import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Dashboard from "../dashboard/Dashboard";
import Login from "../component/login/Login";
import Register from "../component/register/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:"/",
            element:<Dashboard/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        }
      ]
    },
  ]);