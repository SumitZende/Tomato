import  { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'

export default function Verify() {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url} = useContext(StoreContext)

    const verifyPayment = async()=>{
        const res =  await axios.post(url+'/api/order/verify',{success,orderId})
        if(res.data.success){
            navigate('/myOrders')
        }
        else{
            navigate('/')
        }
    }

    useEffect(()=>{
        verifyPayment()
    },[])

  return (
    <div className='min-h-[60vh] grid '>
        <div className="w-[100px] h-[100px] place-self-center border-4 border-[#bdbdbd] border-t-tomato rounded-[50%] animate-rotate">
        </div>
        
    </div>
  )
}
