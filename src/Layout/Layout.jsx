import { Outlet } from "react-router-dom";
import Footer from "../Page/Footer/Footer";
import Header from "../Page/Home/Header/Header";
import LeftSide from "../Page/Home/Home/LeftSide/LeftSide";
import RightSide from "../Page/Home/Home/Right/RightSide";

 

const Layout = () => {
     return (
          <div>
               <Header></Header>
               <div className=" md:flex gap-10 sm:gap-3">
               <div className=" grid grid-cols-2 md:grid lg:grid-cols-4 border border-t-orange-900">
                     <LeftSide></LeftSide>
               </div>
               <div className=" grid grid-cols-3   lg:grid-cols-12 border border-green-950">
                    <h3>Main side</h3>
               </div>
               <div className=" grid grid-cols-2 md:grid lg:grid-cols-4 border border-red-800">
                    <RightSide></RightSide>
               </div>
               </div>
               
                
               <Footer></Footer>
          </div>
     );
};

export default Layout;