//import logo from './logo.svg';
import './App.css';
import Card from './Component/Card/card';

function App() {
 
//  const CardOne ={
//      Name:"afhfjjh",
//      img:"https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//      Describtion:"sport shoes",
//      price:60,
//  }


  return (
    <div className="App">
      <div class="First_row">
       <Card img="https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        Name="shoe"
        Describtion="Sport shoe" 
        price ="10"
        rating="5" />

          <Card img="https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        Name="watch"
        Describtion="Classic watch" 
        price ="50"
        rating="5" />

          <Card img="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        Name="T-Shirt"
        Describtion="casual Shirt" 
        price ="13"
        rating="4" />
    
    </div>
    <div class="Second_row">
    <Card img="https://images.pexels.com/photos/2313192/pexels-photo-2313192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        Name="shirt"
        Describtion="casusal shirt" 
        price ="10"
        rating="5" />
        
          <Card img="https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        Name="sun glass"
        Describtion="casual Sun glass" 
        price ="15"
        rating="5" />
    </div>
  </div>
  );
}

export default App;
