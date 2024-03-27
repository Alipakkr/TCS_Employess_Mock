const express=require('express');
const {connection}=require('./db');
const {userRouter}=require('./routes/user.route');


const app=express();
app.use(express.json());

app.use("/users",userRouter);

app.get('/',(req,res)=>{
    res.send("Hello ! Welcome to the home page ");
})

app.listen(4050,async()=>{
    try{
       await connection,
       console.log("connected to db");
       console.log("Server is running at port 4050");
    
    }
    catch(err){
        console.log(err);
    }
    
})