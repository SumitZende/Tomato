import { createContext, useEffect, useState } from "react";
import axios from 'axios'


export const StoreContext = createContext(null)

export const StoreContextProvider =(props)=>{

    const [cartItem,setCartItem]=useState({})
    const url='http://localhost:4000'
    const [token,setToken]=useState()
    const [food_list,setFood_List]=useState([])

    const addToCart=(itemid)=>{
        if(!cartItem[itemid]){
            setCartItem((prev)=>({...prev,[itemid]:1}))
        }
        else{
            setCartItem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        }
    }

    const removeFromCart=(itemid)=>{
        setCartItem((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }

    const getTotalCartAmount=()=>{
        let totalAmount=0
        for(const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo = food_list.find((product)=>product._id===item);
                totalAmount+=itemInfo.price*cartItem[item];
            }
        }
        return totalAmount;
    }

    const fetchFood_List =async()=>{
        try {
            const res = await axios.get(url+'/api/food/list')
            if(res.data.success){
                setFood_List(res.data.data)
                
            }
            else{
                console.log('data not fetched');
                
            }
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(()=>{

        async function loadData() {
            await fetchFood_List()
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
            }
        }
        loadData();
    },[])
    const contextValue ={
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}