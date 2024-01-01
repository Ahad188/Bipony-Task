import { FaStar } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
 
 const Category = () => {
     return (
          <div>
          <div className=" md:w-[700px] relative"  >
            <img className="h-[400px] md:w-[100%] rounded-3xl md:p-4 bg-opacity-90" src="https://eda.yandex/images/3378693/049e8232c93c3ce2b19dc94a1da9ba26-1100x825.jpg" alt="" />
        
            <div className=" overlay"></div>
        
            <h2 className="absolute top-[50%] left-16 text-5xl z-10 font-bold text-white">KFC</h2>
            <div className="absolute top-[70%] left-16 btn font-bold flex items-center">
              <FaStar />
              <div>4.7<span className="font-normal block">200+</span></div>
              <div className="absolute top-[1%] left-28 btn"> <FaCircleInfo /></div>
            </div>
          </div>
        </div>
        
     );
 };
 
 export default Category;