import { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { useScrollLock } from "usehooks-ts";
import { StoreContext } from "../context/StoreContext";
import { toast } from "react-toastify";
import axios from 'axios'
import PropTypes from 'prop-types';

export default function LoginPopup({ setShowlogin }) {
  const [currenState, setCurrentState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  
  const { url,setToken } = useContext(StoreContext);

  

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let newUrl =url;
    
    try {
        if(currenState==='Login'){
         newUrl +="/api/user/login";
        }
        else{
          newUrl +="/api/user/register"   
        }

        const res = await axios.post(newUrl,data)
        if(res.data.success){
          setToken(res.data.token)
          localStorage.setItem("token",res.data.token);
          setShowlogin(false)
          toast.success(`${currenState} success`)
        }
        else{
          toast.warn(res.data.message)
        }
    } catch (error) {
      console.log(error);
      toast.warn("System Error")
    }
  };

  useScrollLock();
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="absolute z-1 w-full h-full bg-[#00000090] grid ">
        <div
          className="place-self-center w-[max(23vw,330px)] text-gray-600 bg-white flex flex-col gap-5 py-6 px-2 rounded-lg
                      text-sm animate-fade-in duration-400"
        >
          <div className="flex justify-between items-center text-black">
            <h2 className="text-xl font-medium">{currenState}</h2>
            <img
              className="w-4 cursor-pointer"
              alt="cross"
              src={assets.cross_icon}
              onClick={() => setShowlogin(false)}
            />
          </div>
          <div className="flex flex-col gap-5">
            {currenState === "Login" ? (
              <></>
            ) : (
              <input
                name="name"
                value={data.name}
                onChange={onChangeHandler}
                className="outline-none border-[1px] border-solid border-[#c9c9c9] p-2 rounded-md"
                type="text"
                placeholder="Your Name"
                required
              />
            )}
            <input
              name="email"
              value={data.email}
              onChange={onChangeHandler}
              className="outline-none border-[1px] border-solid border-[#c9c9c9] p-2 rounded-md"
              type="email"
              placeholder="Your email"
              required
            />
            <input
              name="password"
              value={data.password}
              onChange={onChangeHandler}
              className="outline-none border-[1px] border-solid border-[#c9c9c9]  p-2 rounded-md"
              type="password"
              placeholder="password"
              required
            />
          </div>
          <button
            type="submit"
            className="border-none p-2 rounded-md text-white bg-tomato text-base cursor-pointer hover:bg-red-500"
          >
            {currenState === "Sign Up" ? "create account" : "Login"}
          </button>
          <div className="flex items-start gap-2 -mt-3">
            <input type="checkbox" className="mt-1" name="condition accept" />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
          {currenState === "Login" ? (
            <p>
              Create a new account ?
              <span
                className="text-tomato font-medium cursor-pointer"
                onClick={() => setCurrentState("Sign Up")}
              >
                Click here
              </span>
            </p>
          ) : (
            <p>
              Already have an account ?{" "}
              <span
                className="text-tomato font-medium cursor-pointer"
                onClick={() => setCurrentState("Login")}
              >
                Login here
              </span>{" "}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}

LoginPopup.propTypes={
  setShowlogin:PropTypes.bool.isRequired,
}