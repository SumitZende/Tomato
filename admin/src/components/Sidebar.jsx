import { NavLink } from "react-router-dom";
import { assets } from "../assets/admin_assets/assets";

export default function Sidebar() {
  return (
    <div className="w-[18%] min-h-[100vh] border-2 border-solid border-[#a9a9a9] border-t-0 text-[max(1vw,10px)">
      <div className="pt-12 pl-[20%] flex flex-col gap-5 ">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center gap-3 
            border border-solid border-[#a9a9a9] border-r-0 py-2 px-[10px]
            rounded-t-[3px] rounded-l-none rounded-b-none rounded-r-[3px]
            cursor-pointer 
            ${isActive ? "bg-[#fff0ed] border-tomato" : ""}`
          }
        >
          <img src={assets.add_icon} alt="" />
          <p className="max-lg:hidden">add item</p>
        </NavLink>
        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center gap-3 
            border border-solid border-[#a9a9a9] border-r-0 py-2 px-[10px]
            rounded-t-[3px] rounded-l-none rounded-b-none rounded-r-[3px]
            cursor-pointer 
            ${isActive ? "bg-[#fff0ed] border-tomato" : ""}`
          }
        >
          <img src={assets.order_icon} alt="" />
          <p className="max-lg:hidden">List item</p>
        </NavLink>
        <NavLink
          to="/order"
          className={({ isActive }) =>
            `flex items-center gap-3 
            border border-solid border-[#a9a9a9] border-r-0 py-2 px-[10px]
            rounded-t-[3px] rounded-l-none rounded-b-none rounded-r-[3px]
            cursor-pointer 
            ${isActive ? "bg-[#fff0ed] border-tomato" : ""}`
          }
        >
          <img src={assets.order_icon} alt="" />
          <p className="max-lg:hidden">Orders</p>
        </NavLink>
      </div>
    </div>
  );
}
