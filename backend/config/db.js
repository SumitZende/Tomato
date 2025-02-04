import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://Tomato:kSzv74J1ut65hMgd@cluster0.tyrdc.mongodb.net/tomato')
    .then(()=>console.log("DB Connect"));
    
}