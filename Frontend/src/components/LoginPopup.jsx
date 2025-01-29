<<<<<<< HEAD
import React, { useState } from "react";
=======
<<<<<<< HEAD
import  { useState } from "react";
=======
import React, { useState } from "react";
>>>>>>> fc348af0c4f34f46c3be952f35c4b836abc81ac1
>>>>>>> 52b9f5499beb5de6eacc0006f05461ebcd5b4b4c
import { assets } from "../assets/frontend_assets/assets";
import { useScrollLock } from "usehooks-ts";

export default function LoginPopup({ setShowlogin }) {
  const [currenState, setCurrentState] = useState("Sign Up");
  useScrollLock();
  return (
    <div className="absolute z-1 w-full h-full bg-[#00000090] grid  op">
      <div className="place-self-center w-[max(23vw,330px)] text-gray-400 bg-white flex flex-col gap-5 py-6 px-2 rounded-lg
                      text-sm animate-fade-in duration-400">
        <div className="flex justify-between items-center text-black">
          <h2 className="text-xl font-medium" >{currenState}</h2>
          <img
            className="w-4 cursor-pointer"
            alt="cross"
            src={assets.cross_icon}
            onClick={() => setShowlogin(false)}
          />
        </div>
        <div className="flex flex-col gap-5">
          {currenState==="Login"
          ?<></>
          :<input className="outline-none border-[1px] border-solid border-[#c9c9c9] p-2 rounded-md" type="text" placeholder="Your Name" required />
          }
          <input className="outline-none border-[1px] border-solid border-[#c9c9c9] p-2 rounded-md" type="email" placeholder="Your email" required />
          <input className="outline-none border-[1px] border-solid border-[#c9c9c9]  p-2 rounded-md" type="password" placeholder="password" required />
        </div> 
        <button className="border-none p-2 rounded-md text-white bg-tomato text-base cursor-pointer hover:bg-red-500">{currenState==="Sign Up"?"create account":"Login"}</button>
        <div className="flex items-start gap-2 -mt-3">
          <input type="checkbox" className="mt-1" name="condition accept"/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currenState==="Login"
        ?<p>Create a new account ?<span className="text-tomato font-medium cursor-pointer" onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
        :<p>Already have an account ? <span className="text-tomato font-medium cursor-pointer" onClick={()=>setCurrentState("Login")}>Login here</span> </p>  
        }
      </div>
    </div>
  );
}
