import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar name="Erik Gonzalez Bocio" edad="21"/> {/* Aqui se le pasan los valores de erik como nombre y edad de 21, por lo que imprime con esos datos */}
        <Saludar name="Jose" edad="22"/> {/* De igual forma aqui colocamos los valores de Jose y 22, que sera lo que imprime en esta parte */}
      </header> {/* Podemos colocar tantos como queramos pero si queremos que sea diferente habra que colocar diferentes valores en nombre y edad, dependiendo el caso */}
    </div>
  );
}

export default App;
