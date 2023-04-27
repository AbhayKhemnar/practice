import {useState} from "react";
import './Onclick.css'

export default function OnClick(){

   let [Name , setName]= useState()
   let [UpdatedName , setUpdatedName]=useState("________")
 

   function DisplayName(){
        setUpdatedName(Name)
         
   }

   function handleName(event){
    setName(event.target.value)
      
   }

    return(

        <div class ="contain">
            <input onChange={handleName} placeholder="Enter Your Name" ></input>
            <button onClick={DisplayName} >Summit</button>
            <h1>Your Name is {UpdatedName}</h1>
        </div>
        
        
        
    )
}