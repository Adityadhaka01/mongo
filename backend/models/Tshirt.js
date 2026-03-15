const express = require("express");
const router = express.Router();
const Tshirt = require("../models/Tshirt");

router.post("/add", async(req,res)=>{
 const Tshirt = new Tshirt(req.body)
 await Tshirt.save()
 res.send(Tshirt)
})

router.get("/all", async(req,res)=>{
 const Tshirt = await Tshirt.find()
 res.send(Tshirt)
})

module.exports = router