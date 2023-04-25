import './card.css';

export default function Card(props)
{
  const {Job_profile,Name,Describtion}=props

   function Alert(){
     alert(Name)
   }
   return (
   <div class ="Card ">
     <div class="Upper-contaner">
     <div class="Image">
        <img src ="" alt={Name}/>
        </div>
      </div>  
      <div class ="Lower-contaner">
      <div class ="job_profile">
          <p>{Job_profile}</p>
      </div>
      <div class ="Name">
        <h2>{Name}</h2>
      </div>
      <div class="Describtion">
        <p>{Describtion}</p>
      </div>
      <div class="Button">
        <button onClick={Alert} >Click to see me</button>
      </div>
    </div>
    </div>
    )
}