import express from "express"
import cors from "cors" 
import { connectDB } from "./config/db.js"


//app config

const app=express()
const port=4000

//middleware

app.use(express.json())
app.use(cors())

//database
connectDB();

app.get("/",(req,res)=>{
    res.send("API running")
})

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
    
})
//mongodb+srv://Tomato:<db_password>@cluster0.tyrdc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0