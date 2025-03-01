import { assets } from "../assets/admin_assets/assets";


export default function Navbar() {
  return (
    <div className="flex justify-between items-center py-[8px] px-[4%]">
        <img src={assets.logo} alt="logo"  className="w-[max(10%,80px)] cursor-pointer"/>
        <img src={assets.profile_image} alt="profile_image" className="w-10 cursor-pointer"/>
    </div>
  )
}
