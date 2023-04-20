//import logo from './logo.svg';
import './App.css';
import { Button } from './components/button';
import { Logo } from './components/logo';
import { Benifits } from './info/benifies';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Logo/>
      <Benifits/>
      <Button/>
      </header>
    </div>
  );
}

export default App;
