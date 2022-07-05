const express = require("express")
const rout = express.Router()
const sql = require("./database.js")

const {createToken, verifyToken}=require("./jwt")

// rout.get("/login",(req,res)=>{
//     res.send("Welcome at login page")
// })
// const jwt=require("jsonwebtoken")

// var createToken=(data)=>{
//     // return jwt.sign(data,"secrete_Key")
//     token=jwt.sign(data,"secrete_Key")
//     console.log(token);
//     return token
// }

const validation=(req,res,next)=>{
    console.log("validation here");
    next()
}
rout.get("/homes",verifyToken,validation,(req,res)=>{
    // console.log(req.body,"last_Func");
    res.send(`Welcome to homepage ${req.body.meta.name}`)
})


rout.post("/about",verifyToken)

rout.post("/login", (req, res) => {
    var email = req.body.email
    var password = req.body.password
    // console.log(email,password);
    if (email && password) { 
        sql.query(`select * from students where email='${email}';`, (err, data) => {
            // console.log(data);
            if (data[0]) {
                // console.log(data[0].password);
                if (data[0].password == password) {
                    // console.log(password);
                 var token= createToken(JSON.stringify(data[0]))
                 console.log(token);
                    // var data=jwt.verify(token,"secrete_Key")
                    // console.log({data});

                    res.cookie("token",token).send("login successfully")

                }
                else {
                    res.send("password is not matching")
                }
            }
            else{
                res.send("email is not exist")
            }
            
        })
    }
    else {
        res.send("email and password is require")
    }
})

module.exports = rout
