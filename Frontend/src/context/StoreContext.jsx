import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null)

export const StoreContextProvider =(props)=>{

    const [cartItem,setCartItem]=useState({})

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

    const contextValue ={
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart
    }

    useEffect(()=>{
        console.log(cartItem);
    },[cartItem])
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}