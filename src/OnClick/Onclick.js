import {useState} from "react";
import './Onclick.css'

export default function OnClick(){

   let [number , setNumber]=useState()
   let [Attempt , setAttempt] = useState(1)
   let [LuckyNumber,setLuckyNumber]=useState(Math.round((Math.random()*10)))

  console.log(LuckyNumber)
 
  function GetInput(e){
        setNumber(e.target.value)
  }
    
  function HandleInput(){
    if(number<0 || number>10){
        alert("WARNING: Enter number between 0 and 10")
        return
    }
   setAttempt(Attempt+1)
      if(number==LuckyNumber){
        alert(' CONGRATS YOU Won IN  "'+ Attempt + '"  ATTEMPT '  )
      }else if(number<LuckyNumber){
        alert("you Number is less than Lucky Number")
      }else{
        alert("You number is greater than Lucky Number")
      }
  
  } 


    return(

        <div class ="contain">
            <h3>Number is between  0 to 10</h3>
            <input onChange={GetInput} placeholder="Guess Lucky Number" type="number" ></input>
            <button onClick={HandleInput} value ="10"> Match Number </button>
        </div>
        
        
        
    )
}