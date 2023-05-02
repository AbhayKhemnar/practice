import {useRef} from "react";
import './Onclick.css'



export default function OnClick(){

  let inputRef = useRef()
    

    function HandleInput(){
     inputRef.current.click()
     console.log(inputRef)
    }


 

    return(

        <div class ="contain">
            <h3> </h3>
            <input  type="file" ref={inputRef} ></input>
            <button onClick={HandleInput} > pick the file</button>
        </div>
        
        
        
    )
}