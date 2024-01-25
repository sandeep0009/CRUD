import express from "express";
import dotenv from "dotenv";
import connectDb from "./db.js";
import cors from "cors";
import route from "./routes/route.js"


dotenv.config()

const app=express()
const port=process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use('/api',route);

connectDb()


app.listen(port,()=>{
    console.log(`connected to port: ${port}`);
})