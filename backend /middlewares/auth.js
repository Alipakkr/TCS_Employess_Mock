const jwt = require("jsonwebtoken")
const auth = async(req, res, next)=>{
    const token = req.headers.authorization?.split(" ")[1]
    if(token){
        try{
            const decode = jwt.verify(token,"Alipa");
            if(decode){
                console.log(decode)
                req.body.userID = decode.userID
                req.body.username = decode.username
                next()
            }
            else{
                res.json({msg:"Opps! User is not registered"})
            }
        }
        catch(err){
            res.json({error:err})
        }
    }
    else{
        res.json({msg:" Sorry!Please Login..."})
    }
}
module.exports={auth};
