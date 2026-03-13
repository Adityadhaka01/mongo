

const mongoose = require("mongoose");

const ShirtSchema = new mongoose.Schema({
 name:String,
 course:String,
 fees:Number,
          
})

module.exports = mongoose.model("Shirt",ShirtSchema)