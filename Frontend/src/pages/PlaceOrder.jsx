import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export default function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="flex items-start justify-between gap-48 mt-[100px]">
      <div className="w-full max-w-[max(30%,500)]">
        <p className="text-3xl font-semibold mb-12">Delivery Information</p>
        <div className="flex gap-2">
          <input
            type="text"
            className="mb-4 w-full p-[10px] border-2 border-solid border-[#c5c5c5] rounded-md outline-tomato"
            name="first-name"
            id="first-name"
            placeholder="first name"
          />
          <input
            type="text"
            className="mb-4 w-full p-[10px] border-2 border-solid border-[#c5c5c5] rounded-md outline-tomato"
            name="last-name"
            id="last-name"
            placeholder="last name"
          />
        </div>
        <input
          type="email"
          className="mb-4 w-full p-[10px] border-2 border-solid border-[#c5c5c5] rounded-md outline-tomato"
          name="email-address"
          id="email-address"
          placeholder="email address"
        />
        <input
          type="email"
          name="street"
          id="street"
          placeholder="street"
          className="mb-4 w-full p-[10px] border-2 border-solid border-[#c5c5c5] rounded-md outline-tomato"
        />
        <div className="flex gap-2">
          <input
            type="text"
            name="city"
            id="city"
            placeholder="city"
            className="mb-4 w-full p-[10px] border-2 border-solid border-[#c5c5c5] rounded-md outline-tomato"
          />
          <input
            type="text"
            name="state"
            id="state"
            placeholder="state"
            className="mb-4 w-full p-[10px] border-2 border-solid border-[#c5c5c5] rounded-md outline-tomato"
          />
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            className="mb-4 w-full p-[10px] border-2 border-solid border-[#c5c5c5] rounded-md outline-tomato"
            name="zip-code"
            id="zip-code"
            placeholder="zip code"
          />
          <input
            type="text"
            className="mb-4 w-full p-[10px] border-2 border-solid border-[#c5c5c5] rounded-md outline-tomato"
            name="country"
            id="country"
            placeholder="country"
          />
        </div>
        <input
          type="text"
          className="mb-4 w-full p-[10px] border-2 border-solid border-[#c5c5c5] rounded-md outline-tomato"
          name="phone"
          id="phone"
          placeholder="Phone"
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
            <button className="border-none text-white bg-tomato w-[max(12vw,200px)]  py-3 px-0 rounded cursor-pointer mt-8 hover:bg-red-500">
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
