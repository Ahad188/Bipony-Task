import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import { FaMotorcycle } from "react-icons/fa6";
import Card from "../Card/Card";
 
 const Category = () => {
    
     return (
          <div>
          <div className=" md:w-[700px] relative"  >
            <img className="h-[400px] w-[90%] md:w-[100%]  rounded-3xl md:p-4 bg-opacity-90" src="https://eda.yandex/images/3378693/049e8232c93c3ce2b19dc94a1da9ba26-1100x825.jpg" alt="" />
        
            <div className=" overlay"></div>
        
            <h2 className="absolute top-[50%] left-16 text-5xl z-10 font-bold text-white">KFC</h2>
            <div className="absolute top-[70%] left-16 btn font-bold flex items-center">
              <FaStar />
              <div>4.7<span className="font-normal block">200+</span></div>
              <div className="absolute top-[1%] left-28 btn"> <FaCircleInfo /></div>
            </div>
          </div>
          <div className="bg-[#5bc31a44] mx-auto w-[400px] md:w-[600px] h-20 rounded-2xl flex items-center gap-3 md:ms-12">
                    <FaMotorcycle className="ms-8 h-[40px] w-[40px]" />
                    <h3 className="font-bold text-[#5ac31a] p-2">Free delivery <br />off any order</h3>
          </div>
          
                   
        </div>
        
     );
 };
 
 export default Category;