

const express = require("express");
const router = express.Router();
const Shirt = require("../models/Shirt");

router.post("/add", async(req,res)=>{
 const Shirt = new Shirt(req.body)
 await Shirt.save()
 res.send(Shirt)
})

router.get("/all", async(req,res)=>{
 const Shirts = await Shirt.find()
 res.send(Shirts)
})

module.exports = router