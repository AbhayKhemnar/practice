import React, { useState } from 'react'
import Styles from './Input.module.css'

function Input() {

    const [name,setName]=useState()
    const [rollNo,setRollNo]=useState()
    const [Class,setClass]=useState()
    const [Marks,setMarks]=useState()

    const [arr,setArr]=useState([])
   
    
    function handle(){


        let obj={
           name:name,
           RollNo:rollNo,
           class:Class,
           Marks:Marks,
           
        }
        setArr([...arr, obj]);
    }

  return (
    <div className={Styles.Container}>
       <div className={Styles.Input}>
           <input placeholder='Name' type='text' value={name} onChange={(e)=>setName(e.target.value)}  />
           <input placeholder='Roll' type='number' value={rollNo} onChange={(e)=>setRollNo(e.target.value)} />
           <input placeholder='Class' type='text' value={Class} onChange={(e)=>setClass(e.target.value)}/>
           <input placeholder='Marks' type='number' value={Marks} onChange={(e)=>setMarks(e.target.value)}/>
           <button onClick={handle}>Summit</button>
       </div>

       <div className={Styles.Table}>
        <table>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Class</th>
            <th>Marks</th>
          </tr>
          {
            arr.map((data,Index)=>(
          <tr key={Index}>
            <td>{data.name}</td>
            <td>{data.RollNo}</td>
            <td>{data.class}</td>
            <td>{data.Marks}</td>
          </tr>
            ))
          }
        </table>
       </div>
    </div>
  )
}

export default Input