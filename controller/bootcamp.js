// @desc      show all bootcamps
// @method     GET
// route      /app/v1/bootcamp
exports.getBootcamps=(req,res)=>{

  res.send({ success: true, msg: "show all bootcamps" });

}


// @desc      create bootcamp
// @method     POST
// route      /app/v1/bootcamp
exports.createBootcamp=(req,res)=>{

  res.status(200).json({ success: true, msg: "create new bootcamp" });


}

// @desc      show single bootcamp
// @method     GET
// route      /app/v1/bootcamp/:id
exports.getBootcamp=(req,res)=>{

  res.send({ success: true, msg: `show bootcamp number ${req.params.id}` });

}

// @desc       update bootcamps
// @method     PUT
// route      /app/v1/bootcamp:id
exports.updateBootcamp=(req,res)=>{

  res.send({ success: true, msg: `update bootcamp number ${req.params.id}` });

}

// @desc      delete bootcamps
// @method     DELETE
// route      /app/v1/bootcamp/;id
exports.deleteBootcamp=(req,res)=>{

  res.send({ success: true, msg: `delete bootcamp number ${req.params.id}` });


}


