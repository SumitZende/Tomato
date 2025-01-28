import  { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";

export default function Navbar() {
    const [menu,setMenu]=useState("menu");
  return (
    <div className="py-5 px-0 flex justify-between items-center ">
      <img src={assets.logo} alt="logo" 
          className="w-40 
                    max-lg:w-[140px] max-md:w-[120px]" />
      <ul className="flex gap-[20px] list-none text-navbar_font text-[18px] cursor-pointer  
                    max-lg:gap-5 max-lg:text-lg max-md:gap-3 max-md:text-base max-sm:hidden">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"pb-[2px] border-b-2 border-b-navbar_font":""}>home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"pb-[2px] border-b-2 border-b-navbar_font":""}>menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"pb-[2px] border-b-2 border-b-navbar_font":""}>mobile-app</li>
        <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"pb-[2px] border-b-2 border-b-navbar_font":""}>contact-us</li>
      </ul>
      <div className="flex items-center gap-[40px]
                      max-lg:gap-7 max-md:gap-5">
        <img src={assets.search_icon} alt="search-icon" className="max-lg:w-6 max-md:w-5" />
        <div className="relative max-lg:w-6">
            <img src={assets.basket_icon} alt="" 
            className="max-lg:w-6 max-md:w-5"  />
            <div className="absolute min-w-[10px] min-h-[10px] bg-tomato rounded-[5px] top-[-8px] right-[-8px]"></div> 
        </div>
        <button 
            className="bg-transparent text-[16px] text-navbar_font border border-tomato 
                    py-[10px] px-[30px] rounded-full cursor-pointer
                    transition duration-30000
                    hover:bg-chardonte
                    max-lg:py-2 max-lg:px-6 max-md:py-[7px] max-md:px-5">
                Sign in
        </button>
      </div>
    </div>
  );
}
