 

const Footer = () => {
     return (
          <>
                <p className="font-bold text-2xl ms-12">Even easier in the app</p>
                <div className="flex gap-3 my-5 ms-5">
                    <img src="https://avatars.mds.yandex.net/get-bunker/50064/763f8b02d2dcb86dc0a7f5c00609ce68261cd418/svg" alt="" />
                    <img src="https://avatars.mds.yandex.net/get-bunker/60661/56991f6060ab2c47ea80ddb75ab1a1358e0e58fc/svg" alt="" />
                </div>
                <hr />
                <div className=" border-gray-400 w-full p-5 mt-10">
                    <h3 className="text-2xl font-bold ms-4">Company Information</h3>
                    <div className="flex items-center gap-2 ms-4 my-5 text-gray-400">
                         <img src="https://avatars.mds.yandex.net/get-bunker/60661/1a0d5a85380003680cc58d7119ce24f33d5f8406/svg" alt="" />
                         FeedBack
                    </div>
                </div>
                <div className="flex justify-between p-4">
                    <p className="text-gray-400">© 2018–2024 Yandex Eats LLC</p>
                    <p className="text-gray-400">Project for Yandex</p>
                </div>
          </>
     );
};

export default Footer;