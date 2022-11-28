const Course=require("../Models/course")

// @desc      show all bootcamps
// @method     GET
// route      /app/v1/bootcamp
exports.getBootcamps=async(req,res)=>{
    const courses=await Course.find()
 res.send(courses)
  // res.send({ success: true, msg: "show all bootcamps" });

}


// @desc      create bootcamp
// @method     POST
// route      /app/v1/bootcamp
exports.createBootcamp=async(req,res)=>{
 const course=new Course({
        name:req.body.name,
        author:req.body.author,
    })
    const result= await course.save()
    console.log(result)
  res.status(200).json({ success: true, msg: "create new bootcamp" });


}

// @desc      show single bootcamp
// @method     GET
// route      /app/v1/bootcamp/:id
exports.getBootcamp=async(req,res)=>{
  const id = req.params.id;
    const course=await Course.findById(id)
  console.log(course)
  res.send({ success: true, msg: `show bootcamp number ${req.params.id}` });

}

// @desc       update bootcamps
// @method     PUT
// route      /app/v1/bootcamp:id
exports.updateBootcamp=async(req,res)=>{
  const id = req.params.id;

 const course=await Course.findById(id)
     const result = course.set({
        name:"MongoDB"
     })
  res.send({ success: true, msg: `update bootcamp number ${req.params.id}` });

}

// @desc      delete bootcamps
// @method     DELETE
// route      /app/v1/bootcamp/;id
exports.deleteBootcamp=async(req,res)=>{
  const id = req.params.id;


    const course=await Course.findByIdAndDelete(id)

  res.send({ success: true, msg: `delete bootcamp number ${req.params.id}` });


}


