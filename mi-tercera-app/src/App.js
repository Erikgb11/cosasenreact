import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';

function App() {

  /* const userName="Erik Gonzalez" */ /* podemos usar constantes para poner un valor */
  /* const edad ="21" */

  const user={
    nombre: "Erik Gonzalez",
    edad: 26,
    color:"Azul"
  }

  const saludarFn = (name, edad) => {
        /* console.log("Hola "+name); */ 
        console.log("Hola "+ name + ", tiene " + edad + " años.");

        /* template strings */
        console.log(`Hola ${name}, tiene ${edad} años.`); /* es lo mismo que el primero pero aqui no hay necesidad de concantenar por lo que es mas facil */
  };
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Saludar name={userName} edad={edad}/> */} {/* para usar una variable tenemos que colocarla entre llaves */}
        <Saludar userInfo={user} saludarFn={saludarFn}/>
      </header>
    </div>
  );
}

export default App;
