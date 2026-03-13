const mongoose = require("mongoose");

const T-shirtSchema = new mongoose.Schema({
 name:String,
 course:String,
 fees:Number,
          

})

module.exports = mongoose.model("T-shirt",T-shirtSchema)