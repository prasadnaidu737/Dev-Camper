const express=require('express')

const router=express.Router()

router.get("/", (req, res) => {
  res.send({ success: true, msg: "get all bootcamps" });
});

router.get("/:id", (req, res) => {
  res.send({ success: true, msg: `show bootcamp number ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.status(200).json({ success: true, msg: "create new bootcamp" });
});

router.put("/:id", (req, res) => {
  res.send({ success: true, msg: `update bootcamp number ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.send({ success: true, msg: `delete bootcamp number ${req.params.id}` });
});


module.exports=router