

const User = require("../Models/user")
const _ = require("lodash");
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


// @desc      create user
// @method     POST
// route      /app/v1/user
exports.createUser=async(req,res)=>{
   const user=new User(_.pick(req.body,['name','email','password']))
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(user.password,salt)
    user.password=hashedPassword
    await user.save()
  const token=user.generateAuthToken();
   res.header("x-auth",token).status(200).send(_.pick(user, ["email", "name"]));
}

// @desc      get users
// @method     GET
// route      /app/v1/user
exports.getUser=async(req,res)=>{

    const result=await User.find()
    res.status(200).send(result)
}

// @desc      lgin users
// @method     POST
// route      /app/v1/user/login

exports.loginUser=async(req,res)=>{
   const user=await User.findOne({email:req.body.email})
   const valid=await bcrypt.compare(req.body.password,user.password)
   if(valid){
    console.log("cmg")
  const token = user.generateAuthToken();
  console.log("token",token)
   res.status(200).send(token);
   }
   else{
    res.send("invalid credentials")
   }
}
