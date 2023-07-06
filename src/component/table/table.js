import React, { useState } from 'react'
import Styles from './table.module.css'

function Table() {

 const [Name,setName]=useState("")
 const [rollNo,setRollNo]=useState("")



  return (
    <div>
   <div className={Styles.Input}>
      <input placeholder='Name' value={Name} onChange={(e)=>setName(e.target.value)}/>
      <input placeholder='RollNo' value={rollNo} onChange={(e)=>setRollNo(e.target.value)}/>
    </div>
    <div>
    <table className={Styles.table}>
     <tr>
        <th>Name</th>
        <th>RollNo</th>
     </tr>
     <tr>
        <td>{Name}</td>
        <td>{rollNo}</td>
     </tr>
    </table>
    </div>
    </div>
  )
}

export default Table