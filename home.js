const express=require("express")
const rout=express.Router()

rout.get("/home",(req,res)=>{
    res.send("welcome to home page")
})
module.exports=rout
