
const { Timestamp } = require("bson");
const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
 firstName:{type:String,required:true,minlength:3,maxlength:30}  ,
 lastName:{type:String, required:false,minlength:3,maxlength:30},
 age:{type:Number,min:1,max:150,required:true},
 email:{type:String,required:true, unique:true} 
},{
    Timestamp:{require:true}
})
const user=mongoose.model("user",userSchema);
module.exports=User