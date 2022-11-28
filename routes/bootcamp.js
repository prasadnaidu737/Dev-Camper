const express=require('express')
const { getBootcamps ,
        getBootcamp,
       createBootcamp,
       deleteBootcamp,
       updateBootcamp,
       getAuthors,
       createAuthor} = require("../controller/bootcamp");
const router=express.Router()
router.route("/author").get(getAuthors).post(createAuthor);
 router.route('/')
 .get(getBootcamps)
 router.route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp)
  
module.exports=router