import express from 'express'
import { addfood } from '../controllers/foodController.js';
import { upload } from '../config/db.js';


const foodRouter=express.Router();

 
foodRouter.post("/add",upload.single("image"),addfood);

export default foodRouter
