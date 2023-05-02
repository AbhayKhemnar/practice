import { useRef } from "react"

funtion Child(props){

  const {name,name2}=props
    <h1>{name}</h1>
    <h1>{name2}</h1>

}

funtion parent(){

  

    return(
        <child name="Abhay" name2="Akshay"/>
    )
}

//npm create-react-app appNme


const name=useRef(Abhay)

name.current = "akshay"