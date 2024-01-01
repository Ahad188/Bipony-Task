 
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home/Home";
 
 
 
 const Router = createBrowserRouter([
     {
          path:'/',
          element: <Layout></Layout> ,
          children:[
               {
                    path:'/',
                    element:<Home></Home>
               }
          ]
           
     }
 ])
 export default Router;