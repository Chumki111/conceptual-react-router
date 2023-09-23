import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import ViewProduct from "../Pages/ViewProduct/ViewProduct";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Profile/Profile";
import EditProfile from "../Pages/EditProfile/EditProfile";
  

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children : [
        {
          path : '/',
          element : <Home></Home>
        },
        {
          path : '/products',
          element : <Products></Products>,
          loader : () => fetch(`https://dummyjson.com/products`),
        },
        {
         path : '/products/:id',
         element : <ViewProduct></ViewProduct>,
         loader : (object) => fetch(`https://dummyjson.com/products/${object.params.id}`)
        },
        {
            path : '/dashboard',
            element : <DashboardLayout></DashboardLayout>,
            children : [
              {
                path : '/dashboard',
                element : <Dashboard></Dashboard>
              },
              {
                path : '/dashboard/profile',
                element : <Profile></Profile>
              },
              {
                path : '/dashboard/editProfile',
                element : <EditProfile></EditProfile>
              }
            ]
        }
      ]
    },
  ]);

export default router;