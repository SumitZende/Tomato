import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js';
import { addCartItem, fetchCartItem, removeCartItem } from '../controllers/cartController.js';



const cartRouter = express.Router();


cartRouter.post('/addItem',authMiddleware,addCartItem);
cartRouter.post('/removeItem',authMiddleware,removeCartItem);
cartRouter.post('/getItem',authMiddleware,fetchCartItem)


export default cartRouter