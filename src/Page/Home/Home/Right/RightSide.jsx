 

const RightSide = () => {
     return (
          <div className="  p-10 ">
                <div className="  h-[700px] rounded-2xl bg-white">
                    <h3 className="text-xl font-bold p-5">Cart</h3>
                    <div className="w-[200px] mx-auto mt-20 ms-28">
                         <img src="https://avatars.mds.yandex.net/get-bunker/61205/a11b38948b6d328e2f739d602fa36b15b2680ba8/svg" alt="" />
                    </div>
                         <p className="text-center font-bold text-xl md:text-2xl mt-5">Your cart is currently empty</p>
                         <hr className="mt-24 w-60 mx-auto" />

                         <div className="flex gap-5 my-5">
                              <img className="w-16 p-3 ms-5 bg-slate-50 rounded-3xl" src="https://avatars.mds.yandex.net/get-bunker/60661/e0b70b2b2a584c45a33c9f9866609f9b2e95019c/svg" alt="" />
                              <p> <span className="text-red-500">Адрес вне зоны доставки</span> <br /> Доставка недоступна</p>
                         </div>
                </div>
          </div>
     );
};

export default RightSide;