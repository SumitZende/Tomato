import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { assets } from "../assets/admin_assets/assets";
export default function Order() {
  const url = " http://localhost:4000";
  const [orderData, setOrderData] = useState([]);

  const fetchList = async () => {
    const res = await axios.post(url + "/api/order/listOrder");
    if (res.data.success) {
      setOrderData(res.data.data);
    } else {
      toast.error(res.data.message);
    }
  };


  const updateStatus =async(event,orderId)=>{
    const res = await axios.post(url+'/api/order/updateStatus',{
      orderId,
      status:event.target.value
    })
    if(res.data.success){
      fetchList()
    }
    
  }

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="container mx-auto px-4 py-6 min-h-screen overflow-auto">
      <h2 className="text-2xl font-semibold mb-6">Orders Page</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orderData.map((order, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 border border-gray-200"
          >
            <div className="flex items-center space-x-4">
              <img
                className="w-12 h-12"
                src={assets.parcel_icon}
                alt="parcel icon"
              />
              <p className="text-gray-700 font-medium">
                {order.items.map((item, i) => (
                  <span key={i}>
                    {item.name} x {item.quantity}
                    {i !== order.items.length - 1 && ", "}
                  </span>
                ))}
              </p>
            </div>

            <div className="mt-3">
              <p className="font-semibold text-lg">
                {order.address.firstName} {order.address.lastName}
              </p>
              <p className="text-gray-600">{order.address.street},</p>
              <p className="text-gray-600">
                {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipCode}
              </p>
              <p className="text-gray-700 font-medium mt-1">
                📞 {order.address.phone}
              </p>
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-800">
                <span className="font-semibold">Items:</span> {order.items.length}
              </p>
              <p className="text-green-600 font-semibold text-lg">
                ₹{order.amount}.00
              </p>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Order Status</label>
              <select className="w-full mt-1 p-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      onChange={(event)=>updateStatus(event,order._id)} value={order.status}>
                <option value="Food Processing">Food Processing</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>

            <p className="mt-4 text-gray-700 flex items-center">
              <span className={`text-lg mr-2 ${order.status === "Delivered" ? "text-green-500" : order.status === "Out for Delivery" ? "text-yellow-500" : "text-red-500"}`}>
                ●
              </span>
              <b>{order.status}</b>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
