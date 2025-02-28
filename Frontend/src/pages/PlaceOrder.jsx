import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import { toast } from "react-toastify";
import axios from "axios";
export default function PlaceOrder() {
  const { getTotalCartAmount,food_list,token,url,cartItem } = useContext(StoreContext);

  const [data,setData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    zipCode:'',
    country:'',
    phone:''
  })

  const onChangeHander = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const intialzeOrder = async (event) =>{
    try {
        event.preventDefault();
        let orderItems = [];
        food_list.map((item)=>{
          if(cartItem[item._id]>0){
            let itemInfo = item;
            itemInfo['quantity'] = cartItem[item._id];
            orderItems.push(itemInfo);
          }
        })
       let orderData = {
        address:data,
        items:orderItems,
        amount:getTotalCartAmount()+2
       }

       let res = await axios.post(url+`/api/order/place`,orderData,{headers:{token}})
       if(res.data.success){
        const {session_url} = res.data;
        window.location.replace(session_url);
       }
       else{
        toast.error("error")
        
       }
        
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <form  onSubmit={intialzeOrder} className="flex items-start justify-between gap-48 mt-[100px]">
      <div className="w-full max-w-[max(30%,500)]">
        <p className="text-3xl font-semibold mb-12">Delivery Information</p>
        <div className="flex gap-2">
          <input
            onChange={onChangeHander}
            value={data.firstName}
            type="text"
            className="mb-4 w-full p-[10px] border-2 border-solid border-[#c5c5c5] rounded-md outline-tomato"
            name="firstName"
            id="first-name"
            placeholder="first name"
            required
          />
          <input
            onChange={onChangeHander}
            value={data.lastName}
            type="text"
            className="mb-4 w-full p-[10px] border-2 border-solid border-[#c5c5c5] rounded-md outline-tomato"
            name="lastName"
            id="last-name"
            placeholder="last name"
            required
          />
        </div>
        <input
          onChange={onChangeHander}
          value={data.email}
          type="email"
          className="mb-4 w-full p-[10px] border-2 border-solid border-[#c5c5c5] rounded-md outline-tomato"
          name="email"
          id="email-address"
          placeholder="email address"
          required
        />
        <input
          onChange={onChangeHander}
          value={data.street}
          type="text"
          name="street"
          id="street"
          placeholder="street"
          className="mb-4 w-full p-[10px] border-2 border-solid border-[#c5c5c5] rounded-md outline-tomato"
          required
        />
        <div className="flex gap-2">
          <input
            onChange={onChangeHander}
            value={data.city}
            type="text"
            name="city"
            id="city"
            placeholder="city"
            className="mb-4 w-full p-[10px] border-2 border-solid border-[#c5c5c5] rounded-md outline-tomato"
            required
          />
          <input
            onChange={onChangeHander}
            value={data.state}
            type="text"
            name="state"
            id="state"
            placeholder="state"
            className="mb-4 w-full p-[10px] border-2 border-solid border-[#c5c5c5] rounded-md outline-tomato"
            required
          />
        </div>
        <div className="flex gap-2">
          <input
           onChange={onChangeHander}
           value={data.zipCode}
            type="number"
            className="mb-4 w-full p-[10px] border-2 border-solid border-[#c5c5c5] rounded-md outline-tomato"
            name="zipCode"
            id="zip-code"
            placeholder="zip code"
            required
          />
          <input
            onChange={onChangeHander}
            value={data.country}
            type="text"
            className="mb-4 w-full p-[10px] border-2 border-solid border-[#c5c5c5] rounded-md outline-tomato"
            name="country"
            id="country"
            placeholder="country"
            required
          />
        </div>
        <input
          onChange={onChangeHander}
          value={data.phone}
          type="number"
          className="mb-4 w-full p-[10px] border-2 border-solid border-[#c5c5c5] rounded-md outline-tomato"
          name="phone"
          id="phone"
          placeholder="Phone"
          pattern="[0-9]{10}"
          minLength={10}
          maxLength={10}
          required
        />
      </div>
      <div className="w-full max-w-[max(40%,500px)]">
        <div className="flex-1 flex flex-col gap-5">
          <h2>Cart Totals</h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>₹ {getTotalCartAmount()}</p>
            </div>
            <hr className="my-[10px] mx-0" />
            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>₹ {getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr className="my-[10px] mx-0" />
            <div className="flex justify-between text-[#555]">
              <b>Total</b>
              <b>₹ {getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
            <button type="submit" className="border-none text-white bg-tomato w-[max(12vw,200px)]  py-3 px-0 rounded cursor-pointer mt-8 hover:bg-red-500">
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
