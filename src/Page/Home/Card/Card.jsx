 

const Card = ( {item}) => {
      
     return (
          <div className="w-[217px] h-[318px] bg-white rounded-3xl">
               <img className="rounded-3xl" src={item.photo} alt="" />

               <p className="ml-6 font-bold">{item.price}$</p>
               <h3 className="font-bold text-xl ml-6 mb-3">{item.category}</h3>

               <button className="btn p-3 ms-9 text-center w-[130px] bg-slate-300">+ Add</button>
          </div>
     );
};

export default Card;