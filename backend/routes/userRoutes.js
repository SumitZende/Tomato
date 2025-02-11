import express from 'express';
import { registerUser } from '../controllers/UserController.js';


const userRouter = express.Router();


userRouter.post('/register',registerUser);














export default userRouter;