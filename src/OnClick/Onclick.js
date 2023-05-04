
import { useState } from 'react'
//import axios from 'axios';
import './Onclick.css'



export default function OnClick(){
let [MobileNumber,setMobileNumber]=useState("")
//let [Number,setNumber]=useState(MobileNumber)


const mobileRegex = /^[0-9]{10}$/;

function GetMobileNumber(e){
    setMobileNumber(e.target.value)
  
}
 function summitNumber(){
        
          console.log(MobileNumber)
              if (!mobileRegex.test(MobileNumber)) {
                alert('Please enter a valid 10-digit mobile number.');
              }else{
               
                fetch('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', {
                  
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ mobile:MobileNumber }),
                })
                  .then((response) => {
                    if (!response.ok) {
                      alert('Failed to generate OTP. Please try again.');
                    } else{
                    alert("OtP send ")
                        setMobileNumber("")
                       }
              })
                  .catch((error) => {
                    alert('Failed to connect to the server. Please try again later.');
                    console.error(error);
                  });
              }
    

}

 

return(
  <div>
    <h1>{Number}</h1>
    <input
    type="tel"
    name="Mobile-Number"
    minLength={10}
    maxLength={10}
    onChange={GetMobileNumber}
    value={MobileNumber}
    />
    <button
    onClick={summitNumber}
    >Get Otp  </button>

  
  </div>
  

  )

}