const mysql=require("mysql")
const conection=mysql.createConnection({
    host:"localhost",
    password:"Sudha@123",
    user:"root",
    database:"demo"

})
conection.connect((err)=>{
    if(!err){
        console.log("Connected to database");
    }
})
module.exports=conection
