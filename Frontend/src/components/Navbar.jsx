import { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { toast } from "react-toastify";

export default function Navbar({ setShowlogin }) {
  const { getTotalCartAmount, setToken, token } = useContext(StoreContext);
  const [menu, setMenu] = useState("menu");
  const navigate = useNavigate()

  const logout=()=>{
    localStorage.removeItem("token");
    setToken()
    navigate('/')
    toast.done("logout success")
    
  }

  return (
    <div className="py-5 px-0 flex justify-between items-center ">
      <Link to={"/"}>
        <img
          src={assets.logo}
          alt="logo"
          className="w-40 
                    max-lg:w-[140px] max-md:w-[120px]"
        />
      </Link>
      <ul
        className="flex gap-[20px] list-none text-navbar_font text-[18px] cursor-pointer  
                    max-lg:gap-5 max-lg:text-lg max-md:gap-3 max-md:text-base max-sm:hidden"
      >
        <Link
          to={"/"}
          onClick={() => setMenu("home")}
          className={
            menu === "home" ? "pb-[2px] border-b-2 border-b-navbar_font" : ""
          }
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={
            menu === "menu" ? "pb-[2px] border-b-2 border-b-navbar_font" : ""
          }
        >
          menu
        </a>
        <a
          href="#mobileApp-download"
          onClick={() => setMenu("mobile-app")}
          className={
            menu === "mobile-app"
              ? "pb-[2px] border-b-2 border-b-navbar_font"
              : ""
          }
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={
            menu === "contact-us"
              ? "pb-[2px] border-b-2 border-b-navbar_font"
              : ""
          }
        >
          contact-us
        </a>
      </ul>
      <div
        className="flex items-center gap-[40px]
                      max-lg:gap-7 max-md:gap-5"
      >
        <img
          src={assets.search_icon}
          alt="search-icon"
          className="max-lg:w-6 max-md:w-5"
        />
        <div className="relative max-lg:w-6 cursor-pointer">
          <Link to="/cart">
            <img
              src={assets.basket_icon}
              alt=""
              className="max-lg:w-6 max-md:w-5"
            />
            <div
              className={getTotalCartAmount() === 0
                  ? ""
                  : "absolute min-w-[10px] min-h-[10px] bg-tomato rounded-[5px] top-[-8px] right-[-8px]"
              }
            ></div>
          </Link>
        </div>
        {!token
        ?
        <button
        className="bg-transparent text-[16px] text-navbar_font border border-tomato 
        py-[10px] px-[30px] rounded-full cursor-pointer
        transition duration-30000
        hover:bg-chardonte
        max-lg:py-2 max-lg:px-6 max-md:py-[7px] max-md:px-5"
        onClick={() => setShowlogin(true)}
        >
          Sign in
        </button>
      :
     <div className="relative group inline-block">
  <div className="flex flex-col gap-2.5 bg-[#fff2ef] 
                  py-3 px-6 rounded-md border border-transparent 
                  hover:border-tomato hover:outline-2 hover:outline-white">
    <img src={assets.profile_icon} alt="profile_icon" />
  </div>
  
  {/* Dropdown Menu */}
  <ul className="absolute hidden right-0 z-10 bg-white shadow-md rounded-md 
                 group-hover:block w-40 p-2 border border-gray-200">
    <li onClick={()=>navigate('/myOrders')} className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
      <img src={assets.bag_icon} alt="bag_icon" className="w-6 h-6" />
      <span className="ml-2">Orders</span>
    </li>
    <hr className="border-gray-300 my-1" />
    <li onClick={logout} className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
      <img src={assets.logout_icon} alt="logout_icon" className="w-6 h-6" />
      <span className="ml-2">Logout</span>
    </li>
  </ul>
</div>

      }
      </div>
    </div>
  );
}
