const express=require("express")
const connect=require("./config/db")
const app=express()
app.use(express.json());
const usercontroller=require(`./controller/user.controller`)
app.use("/user",usercontroller)

const bookcontroller=require(`./controller/book.controller`)
app.use("/book",bookcontroller)

app.listen(5000,async()=>{
    try{
        await connect()
        console.log("listening to 5000");
    }catch(error){
        console.log(error);
    }
})