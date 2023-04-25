import Card from "./components/button/card";
import './App.css';

function App() {
  
  return (

    <div class='App' >
      
  
         <Card
          img="https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg?auto=compress&cs=tinysrgb&w=600"
          Name="Abhay Khemnar"
          Job_profile="Front-End web devloper" 
          Describtion="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" 
          />

         <Card
        img="https://images.pexels.com/photos/1835008/pexels-photo-1835008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        Name="Atharva Vennu" 
        Job_profile="Full Stack Developer" 
        Describtion="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
         />

         <Card 
         img="https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=600" 
         Name="Sourabh Wabale" 
         Job_profile="Data anylist"
          Describtion="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
         />
         
      </div>
      
    
  );
}

export default App;
