
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
      className={`w-full mx-auto p-2 lg:w-[1440px] flex justify-between sticky top-0 bg-gray-50 ${
        scrolled ? "border-b-gray-300 shadow-md" : ""
      }`}
    >
      <div className="logo flex items-center">
        <img
          src="https://avatars.mds.yandex.net/get-bunker/994123/b78e4890b454976f74575e3ea79f24a5eeee5fd8/orig"
          alt="Company Logo"
          className="h-10 w-auto"
        />
        <div className="flex flex-col ml-2">
          <select className="select border-gray-500 max-w-xs">
            <option>
            <FaMapPin /> Share your Address
            </option>
            <option className="text-xl bg-slate-200 p-2 rounded-3xl">
              Add a new Address +
            </option>
          </select>
        </div>
      </div>

      <div className="flex items-center">
        <div className="dropdown group">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 group-hover:shadow-md"
          >
            <TiWorld /> English
          </div>
          <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Spanish</a>
            </li>
            <li>
              <a>Қазақ</a>
            </li>
            {/* Add more languages */}
          </ul>
        </div>

        <button className="btn ml-2">
          <BsPerson /> Login
        </button>
      </div>
    </nav>
   
  );
};

export default Header;
