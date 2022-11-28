
const mongoose=require('mongoose')

   

    const Course = mongoose.model('Course',new mongoose.Schema({
      name: String,
      author: String,
      date: { type: Date, Default: Date.now },
    }))

    module.exports=Course