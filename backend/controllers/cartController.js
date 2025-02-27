import mongoose, { Query }  from "mongoose";
import userModel from "../models/userModel.js";


//add cart Item
const addCartItem =async(req,res)=>{
   try {
   let userData = await userModel.findById(req.body.userId)
   let cartData = await userData.cartData
   if(!cartData[req.body.itemId]){
    cartData[req.body.itemId]=1;
   }
   else{
      cartData[req.body.itemId]+=1
   }
   const query = await userModel.findByIdAndUpdate(req.body.userId,{cartData});  
   if(query){
      res.json({success:true,message:'item added into cart'})
   }
   else{
      res.json({success:false,message:'item not available'})
   }
   } catch (error) {
      console.log(error);
      res.json({success:false,message:'error'})
      
   }
}

//remove cart item
const removeCartItem = async(req,res)=>{
   try {
      let userData = await userModel.findById(req.body.userId)
      let cartData = await userData.cartData
      if(cartData[req.body.itemId]>0){
         cartData[req.body.itemId]-=1;
      }
      await userModel.findByIdAndUpdate(req.body.userId,{cartData});
      res.json({success:true,message:'item removed from the cart'})
   } catch (error) {
      console.log(error);
      res.json({success:false,message:'error'})
      
   }
}

//fetch cart item
const fetchCartItem = async(req,res)=>{
   try {
      let userData = await userModel.findById(req.body.userId)
      console.log(userData);
      
      let cartData = await userData.cartData
      console.log(cartData);
      
      if(cartData){
         res.json({success:true,cartData})

      }
      
   } catch (error) {
      console.log(error);
      res.json({success:false,message:'error'})
      
   }
}

export {addCartItem,removeCartItem,fetchCartItem}