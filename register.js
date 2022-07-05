const sql = require("./database")
// const uuid=require("uuid")
const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("hello")
})

router.post("/register", (req, res) => {
    // var id=uuid.v4()
    var id = req.body.id
    var name = req.body.name
    var password = req.body.password
    var email = req.body.email

    console.log(id,name,password,email);
    if(id && password && email){
        sql.query(`select * from students where email='${email}' or id=${id};`,(err,data)=>{
            // console.log({data,err},`select * from students where email='${email}';`);
            if(data.length>0){
                res.send("exist")

            }
            else{
                sql.query(`insert into students(id,name,password,email)values(${id},'${name}','${password}','${email}');`,(err,data)=>{
                    // console.log({err,data});
                    if(!err){
                        res.status(200).send("Successfully registered")
                    }
                    else{
                        res.send("Something went wrong")
                    }
                })
            }
        })

    }
})
module.exports = router