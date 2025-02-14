import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js';
import { addCartItem, fetchCartItem, removeCartItem } from '../controllers/cartController.js';



const cartRouter = express.Router();


cartRouter.post('/addItem',authMiddleware,addCartItem);
cartRouter.delete('/removeItem',authMiddleware,removeCartItem);
cartRouter.get('/getItem',authMiddleware,fetchCartItem)


export default cartRouter