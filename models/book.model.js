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


// const userSchema = new mongoose.Schema({
//     first_name:{type: String, required: true},
//     last_name:{type: String, required: false},
//     email:{type: String, required:true,unique:true},
//     pincode:{type: String, required:true}, 
//     age:{type: Number, required:true}, 
//     gender: {
//           type: String,
//           enum: ["Male", "Female"],
//           default: "Male",
//         }, 
       
//     }, 
//     {
//         versionKey: false,
//         timestamps: true,
//       })
    