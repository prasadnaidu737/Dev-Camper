const mongoose = require("mongoose");
const jwt=require("jsonwebtoken")
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, min: 3 },
  email: { type: String, unique: true },
  password: String,
});

userSchema.methods.generateAuthToken= function(){
       const token =  jwt.sign({ _id:this._id }, process.env.PRIVATE_KEY);
       return token

}

const User=mongoose.model('User',userSchema)

module.exports=User