import  { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import { assets } from '../assets/frontend_assets/assets';

export default function Orders() {

    const {url,token} = useContext(StoreContext)
    const [orederData,setOrderData] = useState([]);

    const fetchOrders = async() =>{
        const res =  await axios.post(url+'/api/order/Myorders',{},{headers:{token}})
        setOrderData(res.data.data)
        
    }

    useEffect(()=>{
        if(token){
            fetchOrders()
        }
    },[token])

  return (
    <div className='my-4 mx-0'>
        <h2>My Orders</h2>
        <div className="flex flex-col gap-5 mt-7">
            {orederData.map((order,index)=>{
                return(
                    <div key={index} className="grid grid-cols-[0.5fr,2fr,1fr,1fr,2fr,1fr] items-center gap-7 text-sm py-[10px] px-5 text-[#454545] border border-tomato
                                                max-md:grid-col-[1fr,2fr,1fr] max-md:gap-x-1 max-md:text-xs" >
                        <img className='w-12' src={assets.parcel_icon} alt="parcel_icon" />
                        <p>{order.items.map((items,index)=>{
                            if(index === order.items.length - 1){
                                return items.name+" x "+items.quantity
                            }
                            else{
                                return items.name+" x "+items.quantity+","
                            }

                        })}</p>
                        <p>₹{order.amount}.00</p>
                        <p>Items:{order.items.length}</p>
                        <p><span className='text-tomato'>&#x25cf;  </span>
                        <b className='font-medium text-[#454545]'>{order.status}</b></p>
                        <button className='border-none py-3 px-0 rounded bg-[#ffe1e1] cursor-pointer text-[#454545]
                                          max-md:text-[10px]
                                          hover:bg-tomato'>Track Order</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
