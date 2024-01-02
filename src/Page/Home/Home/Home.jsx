 
import { useEffect, useState } from "react";
import Category from "../Category/Category";
import Card from "../Card/Card";
 

 

const Home = () => {
     const [menu, setMenu]= useState([])
     useEffect(()=>{
          fetch('../../../../public/data.json')
          .then(res=>res.json())
          .then(data=>  setMenu(data))
     },[])
     // console.log(menu);
     const menu1  = menu.filter(item => item.category === 'Комбо Баскеты');
     console.log(menu1);
     // const курочка  = menu.filter(item => item.category === 'Сочная курочка');

     return (
          <section className="">
          <div className="w-[450px] mr-10 ">
                <Category></Category>
                
          </div>
          {/* card */}
          <div className="p-2 my-3">
          <h3 className="font-bold text-xl my-4">Новинки</h3>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
                          {
                                menu1.slice(0,3).map((item,index) => <Card
                                   key={index}
                                   item={item}
                               ></Card>)
                          }
                     </div>
          </div>
          <div className="p-2 my-3">
          <h3 className="font-bold text-xl my-4">Комбо Баскеты</h3>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                          {
                                menu1.slice(5,7).map((item,index) => <Card
                                   key={index}
                                   item={item}
                               ></Card>)
                          }
                     </div>
          </div>
          <div className="p-2 my-3">
          <h3 className="font-bold text-xl my-4">Боксы</h3>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                          {
                                menu1.slice(3,6).map((item,index) => <Card
                                   key={index}
                                   item={item}
                               ></Card>)
                          }
                     </div>
          </div>
          </section>
     );
};

export default Home;