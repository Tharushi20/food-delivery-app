import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"


//app config

const app = express()
const port = 4000

//middleware
app.use(express.json()) //pass frontend to backend
app.use(cors()) //access backend form frontend

//db connection
connectDB();

//api end points
app.use("/api/food",foodRouter)

app.get("/",(req,res)=>{
    res.send("API working")
})

//run express server
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

