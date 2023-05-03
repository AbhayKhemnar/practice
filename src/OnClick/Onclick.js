import { useState} from "react";
import './Onclick.css'



export default function OnClick(){

  let [Data,setData]=useState([])


  fetch("https://reqres.in/api/users/")
  .then((responce)=>responce.json())
  .then((data)=>setData(data.data))
  .catch((error)=>console.log(error))
   console.log(Data)
     


return(
  <div>
<div class="container">
  {
    Data.map((x)=>((
       <div class="card">
          <div class="Upper_section">
              <img
              class="img"
              height={100}
              width={100}
              src={x.avatar} 
              alt={x.first_name}
              />
          </div>
          <div class="Lower_section">
              <h3>id :{x.id}</h3>
              <h1>{x.first_name }   {x.last_name}</h1>
              <h3>Email:{x.email}</h3>
           </div>

        </div>
  ))
    )



}

</div>
<div>
</div>
</div>
)



}