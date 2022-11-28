const mongoose = require("mongoose");


const Author= mongoose.model('Auhtor',new mongoose.Schema({
    name:String,
    location:String,
    course:{
   type:mongoose.Schema.Types.ObjectId,
 ref:'Course'
    }

}))

module.exports=Author