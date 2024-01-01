import { Outlet } from "react-router-dom";
import Footer from "../Page/Footer/Footer";
import Header from "../Page/Home/Header/Header";
import LeftSide from "../Page/Home/Home/LeftSide/LeftSide";
import RightSide from "../Page/Home/Home/Right/RightSide";

 

const Layout = () => {
     return (
          <div className="md:container md:w-[1440px] mx-auto">
               <Header></Header>
               <div className=" md:flex md:justify-evenly gap-4 my-10">
               <div className=" w-[300px]  ">
                     <LeftSide></LeftSide>
               </div>
               <div className="md:w-[800px]  ">
                    <h3 className="ms-10">Main side</h3>
               </div>
               <div className="md:w-[400px]">
                    <RightSide></RightSide>
               </div>
               </div>
               
                
               <Footer></Footer>
          </div>
     );
};

export default Layout;