import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

export default function Cart() {
  const { cartItem, removeFromCart, food_list ,getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className="mt-[100px]">
      <div className="cart-items">
        <div className="grid grid-cols-1fr items-center text-gray-500 text-[max(1vw,12px)]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="h-[1px] bg-[#e2e2e2] border-none" />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div key={index}>
                <div
                  className="grid grid-cols-1fr items-center text-[max(1vw,12px)]
                                  my-3 mx-0 text-black "
                >
                  <img className="w-[50px]" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>₹{item.price * cartItem[item._id]}</p>
                  <p
                    className="cursor-pointer"
                    onClick={() => removeFromCart(item._id)}
                  >
                    x
                  </p>
                </div>
                <hr className="h-[1px] bg-[#e2e2e2] border-none" />
              </div>
            );
          }
        })}
      </div>
      <div className="mt-20 flex justify-between gap-[max(12vw,20px)] max-sm:flex-col-reverse">
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
              <p>₹ {2}</p>
            </div>
            <hr  className="my-[10px] mx-0"/>
            <div className="flex justify-between text-[#555]">
              <b>Total</b>
              <b>₹ {getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button className="border-none text-white bg-tomato w-[max(12vw,200px)]  py-3 px-0 rounded cursor-pointer  hover:bg-red-500">PROCEED TO CHECKOUT</button>
        </div>
        <div className="flex-1 max-sm justify-start">
          <div>
            <p className="text-[#555]">enter promo code</p>
            <div className="mt-2 flex justify-between items-center bg-[#eaeaea] rounded ">
              <input type="text" placeholder="promo code" className="bg-transparent border-none outline-none  pl-2"/>
              <button className=" w-[max(10vw,150px)] py-3 px-1 bg-black text-white rounded">submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
