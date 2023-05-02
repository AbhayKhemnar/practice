import {useEffect, useRef, useState,} from "react";
import './Onclick.css'



export default function OnClick(){



const img1="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
const img2="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80"
 let img=useRef(null)
 let [count,setcount]=useState(0)


    useEffect(()=>
    {  
      if(img.current.src==img1){
        img.current.src=img2
      }else{
        img.current.src=img1
      }
    },[count])


 function ChangeImage(){
  setcount(count+1)
  
 }

    return(

        <div class ="contain">
            <h3> images</h3>
           <img
           height={100}
           width={100}
           ref={img}
           alt="car"
           />
      
            <button onClick={ChangeImage}>Change Image</button>
        </div>
        
        
        
    )
}