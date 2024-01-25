import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:{type:String},
    email:{type:String},
    address:{type:String},
    phone:{type:Number}
},{timestamps:true})

const user= mongoose.model('user',userSchema);

export default user;