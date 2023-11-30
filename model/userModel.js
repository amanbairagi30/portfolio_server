const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true,"please provide username"],
       
    }   ,        
    email: {
        type : String,
        required : [true,"please provide email"],
       
    } ,
    number: {
        type : String,
        required : [true,"please provide number"],
        
    }, 
    mailmessage: {
        type : String,
        required : [true,"please write what u want"],
        
    }, 
   

})
const model = mongoose.model("user",userSchema)
module.exports = model;