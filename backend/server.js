import express from "express"
import cors from "cors" 
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"
import dotenv from 'dotenv'
import userRouter from "./routes/userRoutes.js"
import cartRouter from "./routes/cartRoutes.js"
import orderRouter from "./routes/orderRoutes.js"
dotenv.config()


//app config

const app=express()
const port=4000

//middleware

app.use(express.json())
app.use(cors())

//database connecton
connectDB();

//api endpoint
app.use("/api/food",foodRouter)
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get("/",(req,res)=>{
    res.send("API running")
})

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
    
})
