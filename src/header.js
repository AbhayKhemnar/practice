import { useNavigate } from "react-router-dom"

export default function Header(){
  const navigate=useNavigate()
    return(
        <div>
            <button onClick={()=>navigate('/')}>Home</button>
            <button onClick={()=>navigate('/ab')}>About</button>
            <button onClick={()=>navigate('/contact')}>Contact</button>
        </div>
    )
}