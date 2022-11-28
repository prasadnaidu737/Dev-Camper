const mongoose = require("mongoose");


dbconnect=()=>{
    mongoose
      .connect("mongodb://localhost/playgroud")
      .then(() => console.log("connected to DB"))
      .catch((err) => console.log(err));

}

exports.db=dbconnect