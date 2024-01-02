
import { FaMapPin } from "react-icons/fa";
import { TiWorld } from "react-icons/ti"; // Assuming TiWorld is the correct icon for languages
import { BsPerson } from "react-icons/bs"; // Assuming BsPerson is the correct icon for login
 
import { useEffect, useState } from "react";
const Header = () => {
     const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
     
     <nav
      className={`w-full z-50 mx-auto md:p-2 md:w-[1440px] h-[80px] flex justify-between fixed top-0 bg-[rgba(108, 107, 107, 0.13)] ${
        scrolled ? "border-b-gray-300 shadow-md bg-white" : ""
      }`}
    >
      <div className="logo flex items-center">
        <img
          src="https://avatars.mds.yandex.net/get-bunker/994123/b78e4890b454976f74575e3ea79f24a5eeee5fd8/orig"
          alt="Company Logo"
          className="h-10 w-auto"
        />
        <div className="flex flex-col ml-2">
          <select className="select border-gray-500 max-w-xs md:w-[420px] md:ms-4">
            <option className="font-bold text-xl">
            <FaMapPin /> Share your Address
            </option>
            <option className="text-xl bg-slate-200 p-2 rounded-3xl">
              Add a new Address +
            </option>
          </select>
        </div>
      </div>

      <div className="flex items-center md:mr-5 mr-14 gap-5 ">
        <div className="dropdown group">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 group-hover:shadow-md"
          >
            <TiWorld /> English
          </div>
          <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Spanish</a></li>
             <li><a>Қазақ</a></li>
             <li><a>Հայերեն</a></li>
             <li><a>Français</a></li>
             <li><a>Հայերեն</a></li>
             <li><a>Ky</a></li>
             <li><a>o'zbek</a></li>
             <li><a>English</a></li>
            {/* Add more languages */}
          </ul>
        </div>

        <button className="btn mr-3 hidden md:block">
          <BsPerson /> Login
        </button>
      </div>
    </nav>
   
  );
};

export default Header;
