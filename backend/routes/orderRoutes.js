import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js';
import { placeOrder, useOrder, verifyOrder } from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.post('/place',authMiddleware,placeOrder);
orderRouter.post('/verify',verifyOrder);
orderRouter.post('/Myorders',authMiddleware,useOrder)

export default orderRouter