import { useContext } from "react"
import { assets } from "../assets/frontend_assets/assets"
import { StoreContext } from "../context/StoreContext"

export default function FoodItem({id,name,description,price,image}) {

  const {cartItem,addToCart,removeFromCart,url}=useContext(StoreContext)
  return (
    <div className='w-full m-auto rounded-2xl shadow-1 duration-3000 animate-fade-in'>
        <div className="relative">
            <img  
              src={url+'/images/'+image}
             className='w-auto rounded-tl-[15px] rounded-tr-[15px] rounded-bl-[0px] rounded-br-[0px] ' 
             alt={name} />
             {!cartItem[id]
              ? <img 
                    className='w-9 absolute bottom-4 right-4 cursor-pointer rounded-full' src={assets.add_icon_white} alt="add_icon_white" 
                    onClick={()=>addToCart(id)}/>
              :<div className="absolute bottom-4 right-4 flex items-start gap-2 p-2 rounded-[50px] bg-white">
                  <img 
                    className='w-[30px]' src={assets.remove_icon_red} alt="remove_icon_red" 
                    onClick={()=>removeFromCart(id)}/>
                  <p>{cartItem[id]}</p>
                  <img 
                    className='w-[30px]' src={assets.add_icon_green} alt="add_icon_green" 
                    onClick={()=>addToCart(id)}/>
              </div>
             }

        </div>
        <div className='p-[20px] '>
            <div className='flex justify-between items-start mb-[10px]'>
                <p className="text-lg font-medium">{name}</p>
                <img className="w-16" src={assets.rating_starts} alt=''/>
            </div>
            <p className="text-custom-gray text-xs">{description}</p>
            <p className="text-tomato text-xl font-medium my-[10px] mx-0">₹{price}</p>
        </div>

    </div>
  )
}
