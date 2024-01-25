import mongoose from "mongoose"

const connectDb=async()=>{
    try{
        await mongoose.connect(process.env.Mongose);
        console.log("connected to database")
    }
    catch(error){
        console.log(error)
    }
}

export default connectDb;