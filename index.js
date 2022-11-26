const express=require('express')
const dotenv=require('dotenv').config()
const bootcamp=require("./routes/bootcamp")
const app=express()


app.use("/app/v1/bootcamp",bootcamp)
const PORT=4000
app.listen(PORT,()=>{
    console.log(`listening to port at ${PORT} in  mode`)
})
