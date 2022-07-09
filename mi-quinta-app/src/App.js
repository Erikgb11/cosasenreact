import React, {useState, useEffect} from "react"; /* Se importa un estado con {useState} y {useEffect} */
import logo from './logo.svg';
import './App.css';

function App() {
  const [stateCar, setStateCar]=useState(false); /* El primero es para el valor del estado, el otro es el que modifica, el estado se inicializa en false */
  const [contar, setContar]= useState(0);//cuenta las veces que el usuario le dara click al boton 

  useEffect(() =>{
    console.log("Total: "+ contar);
  },[contar]); /* cuando contar se actualice, la funcion se vuelve a ejecutar */
  const encenderApagar= () =>{
    setStateCar(!stateCar); /* cambia el valor de setStateCar, para poner el contrario se usa stateCar que es el valor actual del estado y el signo ! que es el contrario */
    /* setStateCar(prevValue => !prevValue); */ /* Misma funcionalidad que el de arriba pero sin usar stateCar, se usa setStateCar para actualizarlo con el valor contrario */
    setContar(contar+1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>El coche esta: {stateCar ? "Encendido" : "Apagado"}</h3> {/* Si stateCar es true se pone en encendido, si es false apagado */}
        <h4>Clicks :{contar}</h4>
        <button onClick={encenderApagar}>Encender / Apagar</button>
      </header>
    </div>
  );
}

export default App;
