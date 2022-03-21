const mongoose=require("mongoose")
const bookSchema=new mongoose.Schema({
    likes:{type:Number,required:false,default:0},
    coverImage:{type:String,required:true,unique:true},
    content:{type:String,require:true}

},{
    Timestamp:{require:true,require:true}
})
const book=mongoose.model("book",bookSchema);
module.exports=book