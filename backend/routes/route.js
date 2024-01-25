import { Router } from "express";
import user from "../model/userSchema.js";

const route=Router();

route.post('/add',async(req,res)=>{
    try{
        const{name,email,address,phone}=req.body;

        const useDetails= await new user({name,email,address,phone});
        await useDetails.save();
        return res.status(201).json({message:"added successfully"});
    }
    catch(error){
        console.log(error)
    }
})

route.post('/show',async(req,res)=>{
    try{
        const userDetails= await user.find();
        console.log(userDetails)
        res.status(201).json({data:userDetails});

    }

    catch(error){
        console.log(error);
    }
})

route.put('/update/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        console.log(id);
        const{name,address,phone,email}=req.body;
        const updateUser= await user.findByIdAndUpdate(id,{name,email,address,phone},{new:true});
        console.log(updateUser);
        if(!updateUser){
            return res.status(404).json({message:"user not found"});
        }
        return res.status(200).json({message:"updated successfully"});
    }
    catch(error){
        console.log(error)
    }
})

route.delete('/delete/:id',async(req,res)=>{
    try{
        const id=req.params.id;
       const deleteUser= await user.findByIdAndDelete(id);
       if(!deleteUser){
        return res.status(404).json({message:"user not found"});
       }
       return res.status(200).json({message:"Deleted successfully"});


    }
    catch(error){
        console.log(error)
    }
})


export default route;