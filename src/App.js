import logo from './logo.svg';
import './App.css';
import Contacto1 from './components/pure/container/contacto1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contacto1></Contacto1>
      </header>
    </div>
  );
}

export default App;

