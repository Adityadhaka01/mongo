import React from "react";
import axios from "axios";

function AddShirt(){

 const addShirt = () => {

  axios.post("http://localhost:5000/ShirtaddShirts/add",{
   name:"suresh",
   course:"MERN",
   fees:100000
  })
  .then(res=>{
   console.log(res.data)
  })
 }

 return(
  <div>
   <button onClick={addShirtaddShirt}>Add ShirtaddShirt</button>
  </div>
 )

}

export default AddShirt;