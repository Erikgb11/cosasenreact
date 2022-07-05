import logo from './logo.svg';
import './App.css';
//import HolaMundo, {AdiosMundo} from './components/HolaMundo';//se importa el HolaMundo que hicimos, podemos ponerle otro nombre pero mejor el real
//envolvemos AdiosMundo entre llaves ya que no es default

import HolaMundo from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HolaMundo/>
        <AdiosMundo/>
      </header>
    </div>
  );
}

export default App;
