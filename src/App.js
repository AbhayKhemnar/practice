import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Benifits of using react...</h1>
      <ol>
        <li> 1.Component-based Architecture </li>
        <li> 2.Virtual DOM for efficient updates</li>
        <li> 3.Rich ecosystem and community </li>
        <li> 4.cross platform development </li>
        <li> 5.Strong community support </li>
      </ol>
      <a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
  >
  <button>
     GEt START...
    </button>
</a>
    
    </div>
  );
}

export default App;
