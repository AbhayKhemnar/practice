//import logo from './logo.svg';
import './App.css';
import Home from "./pages/home";
import Contact from './pages/contact';
import About from './pages/about';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

  <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/ab' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>


   </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
