import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import validator from "validator"


const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const userToken = (id)=>{
    return jwt.sign({id},process.env.JWT_KEY)
}
//register user

const registerUser = async(req,res)=>{
    const {name,password,email}=req.body;
    try{
        const exists = await userModel.findOne({email});
        //checking email is exists ?
        if (exists) {
            return res.json({success:false,message:"User Already Exists"})
        }
        //checking email is valid ?
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"enter valid EmailID"})
        }
        if(!passwordRegex.test(password)){
            return res.json({success:false,message:"Enter a strong password"})
        }
        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword =  await bcrypt.hash(password,salt);

        const newUser  = new userModel({
            name:name,
            password:hashedPassword,
            email:email
        })

        const user = await newUser.save()
        const token =  userToken(user._id)
        res.json({success:true,token})
    }
    catch(err){
        console.log(err);
        res.json({success:false,message:err})
        
    }
}



export {registerUser }