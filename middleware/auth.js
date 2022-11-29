const jwt = require("jsonwebtoken");

module.exports=function(req,res,next){
    const token=req.header('x-auth')
     if(!token) return res.send("pls provide token")
  try {
     console.log(process.env.PRIVATE_KEY);

      const result = jwt.verify(token,process.env.PRIVATE_KEY);
      req.user = result;
      next();

  } catch (error) {
     res.send(error) 
  }
}