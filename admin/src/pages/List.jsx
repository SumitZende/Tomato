import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function List() {
  const [list, setList] = useState([]);
  const url = " http://localhost:4000";

  const fetchList = async () => {
    try {
      const res = await axios.get(`${url}/api/food/list`);
      if (res.data.success || res.data) {
        setList(res.data.data);
      } else {
        toast.alert(toast.error(res.data.message), " + list is empty");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeFood=async(foodId)=>{
    try {
      const res = await axios.delete(`${url}/api/food/remove`,{
        data:{id:foodId}});
      if(res.data.success){
        fetchList(),
        toast.success("Food Item Removed")
      }
      else{
        toast.warn("Item Not Found")
      }
    } catch (error) {
      console.log(error);
      
    }
    
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="flex flex-col  items-center">
      <p>All Foods Items</p>
      <div className="flex flex-col w-6xl pl-10 mt-5 ">
        <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-2.5 p-[12px_15px]
                         border border-[#c9c9c9] text-[13px]  bg-[#f9f9f9]
                       ">
          <b>Image</b>
          <b>Name</b>
          <b>Cateogry</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div
              className="grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-2.5 p-[12px_15px] border border-[#c9c9c9]  text-[13px]"
              key={index}
            >
              <img src={`${url}/images/` + item.image} alt={item.name} className="w-10" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>₹{item.price}</p>
              <p className="cursor-pointer" onClick={()=>removeFood(item._id)}>X</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
