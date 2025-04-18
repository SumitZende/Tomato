import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const url = "http://localhost:5173"

//placing order from fontend
const placeOrder = async(req,res)=>{
    try{
        const  neworder = new orderModel({
            userId:req.body.userId,    
            items:req.body.items,    
            amount:req.body.amount,    
            address:req.body.address,    
        })
        await neworder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

        const line_items = req.body.items.map((item)=>({
            price_data:{
                currency:"inr",
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*100
            },
            quantity:item.quantity
            
        }))

        line_items.push({
            price_data:{
                currency:"inr",
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount:2*100
            },
            quantity:1
        })

        const session = await  stripe.checkout.sessions.create({
            line_items:line_items,
            mode:'payment',
            success_url:`${url}/verify?success=true&orderId=${neworder._id}`,
            cancel_url:`${url}/verify?success=false&orderId=${neworder._id}`
        })
        res.json({success:true,session_url:session.url})
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error "})
    }
}

//verifying order
const verifyOrder = async (req,res)=>{
    const {orderId,success} = req.body;
    try {
        if(success=="true"){
            await orderModel.findByIdAndUpdate(orderId,{payment:true});
            res.json({success:true,message:"Paid"})
        }
        else{
            await orderModel.findByIdAndDelete(orderId);
            res.json({success:false,message:"Not Paid"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
    }
}


//users order for frontend
const useOrder = async (req,res)=>{
    try {
        const orders = await orderModel.find({userId:req.body.userId});
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
    }
}


//listing all order for admin pannel
const listOrder = async (req,res)=>{
    try {
        const order = await orderModel.find({})
        if(order){
            res.json({success:true,data:order})
        }
        else{
            res.json({success:false,message:"No Data Found"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
        
    }
}

//update order status
const updateOrder = async(req,res)=>{
    try {
        const order = await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
        res.json({success:true,message:"Status Updated"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
    }
}
export {placeOrder,verifyOrder,useOrder,listOrder,updateOrder}