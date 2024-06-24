import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Signup from "../components/Logib/Signup";
import ServiceDetails from "../components/Home/ServiceDetails";
import Checkout from "../components/Checkout/Checkout";
import BookService from "../components/BookServiece/BookService";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/Signup',
          element:<Signup></Signup>
        },
        {
          path:'/ServiceDetails/:id',
          element:<ServiceDetails></ServiceDetails>,
          loader:({params})=> fetch(`/services/${params.id}`)
        },
        {
          path:'/Checkout/:id',
          element:<Checkout></Checkout>,
          loader:({params}) => fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
          path:'/book/:id',
          element:<BookService></BookService>,
          loader:({params}) => fetch(`http://localhost:5000/service/${params.id}`)
        }
      ]
    },
  ]);
  
  export default router;