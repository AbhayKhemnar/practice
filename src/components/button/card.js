import './card.css';

export default function Card(props)
{
  const {img,Job_profile,Name,Describtion}=props

   function Alert(){
     alert(Name)
   }
   return (
   <div class ="Card ">
     <div class="Upper-contaner">
     <div class="Image">
        <img class="img" src ={img} alt={Name}/>
        </div>
      </div>  
      <div class ="Lower-contaner">
      
          <p class ="job_profile" >{Job_profile}</p>

      
        <h2 class ="Name">{Name}</h2>
    
      
        <p class="Describtion">{Describtion}</p>
      
      
        <button class="Button" onClick={Alert} >Click to see me</button>
      
      </div>
    </div>
    )
}