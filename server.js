const express=require("express")
const app=express()

app.use(express.json())
app.use(("/",require("./home")))
app.use("/",require("./login"))
app.use("/",require("./register"))

.listen(8000,()=>{
    console.log("Listening at port 8000");
})
