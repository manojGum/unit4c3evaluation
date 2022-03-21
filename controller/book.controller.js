const express=require("express")
const book=require(`../models/user.model`)
const router=express.Router()
router.post('',async(req,res)=>{
    const book=await book.create(req.body)
    return res.status(200).send(book)

})
module.exports=router