<<<<<<< HEAD
import { createContext, useEffect, useState } from "react";
=======
import { createContext } from "react";
>>>>>>> 2b2d4cc257cd6e990caf1d84170c9ec3d60d7e8d
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null)

export const StoreContextProvider =(props)=>{

<<<<<<< HEAD
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
=======
    const contextValue ={
        food_list
    }
>>>>>>> 2b2d4cc257cd6e990caf1d84170c9ec3d60d7e8d
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}