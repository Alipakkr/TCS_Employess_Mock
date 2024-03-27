const express=require('express');
const {UserModel}=require('../models/user.models');
const {blackListTokenModel}=require('../models/blacklist.models');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const userRouter=express.Router();
//user  Registration 
userRouter.post('/register',(req,res)=>{
    const {email,password}=req.body;
    try{
        bcrypt.hash(password,5,async(err,hash)=>{
           if(err){
            res.status(200).json({ error: err });
           }else{
            const user=new UserModel({email,password:hash});
            await user.save();
            console.log(user);
            res.status(200).json({msg:"Hurray! Register Succesfull "});
           }
        })
    }
    catch(err){
        res.status(400).json({msg:err});
    }
})
//user Login 
userRouter.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    try{
       const user = await UserModel.findOne({email});
       if(user){
        bcrypt.compare(password,user.password,(err,result)=>{
            if(result){
                const token=jwt.sign({userID:user._id},"Alipa");
                const refresh_token=jwt.sign({userID:user._id},"Alipa");
                res.status(200).json({msg:"Login Successfull!",token,refresh_token});
            }else{
                res.status(200).json({msg:"Wrong Password"});
            }
        })
       }
    }
    catch(err){
        res.status(400).json({msg:"Opps! Registration first "});
        console.log(err);
    }
})

// user Logout
userRouter.get('/logout',async(req,res)=>{
    const token=req.headers.authorization?.split(" ")[1];
    try{
     const blacklist=new blackListTokenModel({token});
     await blacklist.save();
     res.status(200).json({msg:"Logged out"});
    }
    catch(err){
        res.status(400).json({error:"err"})
    }
    
})
module.exports={
    userRouter,
}