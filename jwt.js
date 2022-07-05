const jwt=require("jsonwebtoken")

var createToken=(data)=>{
    // return jwt.sign(data,"secrete_Key")
    token=jwt.sign(data,"secrete_Key")
    console.log(token);//
    return token
}

var verifyToken=(req,res,next)=>{
    // console.log(req.headers)
   var token=req.headers.cookie
   if(token){
        let tokens=token.split("=")[1]
        console.log(tokens);
       var verify=jwt.verify(tokens,"secrete_Key")
       console.log(verify);//
       if(!verify){
        res.send("invalid token")
       }
       else{
        req.body.meta=verify//verify ho gya yha
        next()
       }
   }
   else{
    res.send("login first")
   }
}
module.exports={createToken,verifyToken}
