import { FaArrowLeftLong } from "react-icons/fa6";

const LeftSide = () => {
     return (
          <div className=" w-[300px] p-10 ">
               <button className="flex items-center px-1 btn w-[200px] text-xl"><FaArrowLeftLong />All Restaurant</button>
               <div className="mt-3">
                    <h3 className="text-2xl font-bold ms-2" >Menu</h3>
                    <ul className="my-2">
                         <li className="w-[200px] hover:bg-slate-200 hover:rounded-2xl p-2 h-[40px]"><a className="text-xl font-semibold p-2" href="#">Новинки</a></li>
                         <li className="w-[200px] hover:bg-slate-200 hover:rounded-2xl p-2 h-[40px]"><a className="text-xl font-semibold p-2" href="#">Боксы</a></li>
                         <li className="w-[200px] hover:bg-slate-200 hover:rounded-2xl p-2 h-[40px]"><a className="text-xl font-semibold p-2" href="#">Комбо Баскеты</a></li>
                         <li className="w-[200px] hover:bg-slate-200 hover:rounded-2xl p-2 h-[40px]"><a className="text-xl font-semibold p-2" href="#">Сочная курочка</a></li>
                          
                         <li className="w-[200px] hover:bg-slate-200 hover:rounded-2xl p-2 h-[40px]"><a className="text-xl font-semibold p-2" href="#">Снэки</a></li>
                         <li className="w-[200px] hover:bg-slate-200 hover:rounded-2xl p-2 h-[40px]"><a className="text-xl font-semibold p-2" href="#">Комбо</a></li>
                         <li className="w-[200px] hover:bg-slate-200 hover:rounded-2xl p-2 h-[40px]"><a className="text-xl font-semibold p-2" href="#">Напитки</a></li>
                    </ul>
               </div>
          </div>
     );
};

export default LeftSide;