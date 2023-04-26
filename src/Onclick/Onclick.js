import {useState} from "react";


export default function OnClick(){

    let [count , setCount]= useState(1)
    function Incress(){
       let newcount=count+1;
       setCount(newcount)
    }

    function Decress(){
        if(count>0){
        let newcount=count-1;
        setCount(newcount)
     }if(count===0){
        alert("Can not go below 0")
     }
    }


    return(

        <div>
            <p>{count}</p>
            <button onClick={Incress}>Click me to Incress</button>
            <button onClick={Decress}>Click me to decress</button>
        </div>
        
        
        
    )
}