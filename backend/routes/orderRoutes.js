import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js';
import { listOrder, placeOrder, updateOrder, useOrder, verifyOrder } from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.post('/place',authMiddleware,placeOrder);
orderRouter.post('/verify',verifyOrder);
orderRouter.post('/Myorders',authMiddleware,useOrder);
orderRouter.post('/listOrder',listOrder);
orderRouter.post('/updateStatus',updateOrder)

export default orderRouter