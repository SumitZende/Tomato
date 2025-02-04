import mongoose from "mongoose";
import multer from "multer";


//databse  connection Config
export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://Tomato:kSzv74J1ut65hMgd@cluster0.tyrdc.mongodb.net/tomato')
    .then(()=>console.log("DB Connect"));
    
}


// Image Storage engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

export const upload=multer({storage:storage});