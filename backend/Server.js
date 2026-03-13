const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://AdityaDhaka:Adityadhaka123@cluster0.4w6lvox.mongodb.net/")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.get("/",(req,res)=>{
 res.send("API running");
})

app.listen(5000,()=>{
 console.log("Server running on port 5000");
})

const ShirtRoute = require("./routes/Shirt")
app.use("/Shirts",ShirtRoute)