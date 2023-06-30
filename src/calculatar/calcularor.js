import { useState } from "react"


export default function Calculator(){
   const [Input1 ,setInput1]=useState(0)
   const [Input2 ,setInput2]=useState(0)
   const [Result ,setResult]=useState(0)

 
  
   function elete(){
    setResult("")
    setInput1("")
    setInput2("")
   }

   return(
          <div className="calculator">
            <input type="number"  value={Input1} className="Input1" onChange={(e)=>setInput1(e.target.value)}/>
            <br/>
            <input type="number"  value={Input2} className="Input2" onChange={(e)=>setInput2(e.target.value)}/>
            <br/>
            <button className="add" onClick={()=>setResult(parseInt(Input1)+parseInt(Input2)) }>add</button>
            <button className="Substraction" onClick={()=>setResult(Input1-Input2)}>Substraction</button>
            <button className="Multiplecation" onClick={()=>setResult(Input1*Input2)}>Multiplecation</button>
            <button className="Division" onClick={()=>setResult(Input1/Input2)}>Division</button>
            <br/>
            <button className="Delete" onClick={elete}>Delete</button>

            <h1>{Result}</h1>
          </div>
   )
}