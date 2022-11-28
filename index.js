const express=require('express')
const dotenv=require('dotenv').config()
const bootcamp=require("./routes/bootcamp")
const mongoose=require('mongoose')
const morgan=require('morgan')
const {db}=require('./Database/db')
const app=express()

if (process.env.NODE_ENV=="developement") {
    console.log(process.env.NODE_ENV);
    app.use(morgan('dev'))
}

app.use(express.json())
app.use("/app/v1/bootcamp", bootcamp);
const PORT=4000

// mongoose.connect("mongodb://localhost/playgroud")
// .then(()=>console.log("connected to DB"))
// .catch(err=>console.log(err))
db()

app.listen(PORT,()=>{
    console.log(`listening to port at ${PORT} in  mode`)
})




