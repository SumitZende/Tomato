import express from 'express'
import { addfood, listFood } from '../controllers/foodController.js';
import { upload } from '../config/db.js';


const foodRouter=express.Router();

 
foodRouter.post("/add",upload.single("image"),addfood);
foodRouter.get("/list",listFood)

export default foodRouter
