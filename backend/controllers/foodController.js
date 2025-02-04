import { foodModel } from "../models/foodModel.js";
import fs from 'fs'
 
//add food item

const addfood = async(req,res)=>{
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save();
        res.json({success:true,message:"food Added"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"failure"})
        
    }
}

//all food list
const listFood = async(req,res)=>{
    try {
        const food= await foodModel.find({});
        res.json({success:true,data:food})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//remove food 
const removeFood = async(req,res)=>{
    try {
        const food = await foodModel.findById(req.body.id)
        if(food){
            fs.unlink(`uploads/${food.image}`,()=>{})
            await foodModel.findByIdAndDelete(req.body.id);
            res.json({success:true,message:"item removed"})
        }
        else{
            res.json({success:false,message:"item not found"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
        
    }
}
export {addfood,listFood,removeFood}  