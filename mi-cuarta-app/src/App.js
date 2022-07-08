import { Button, Alert} from 'react-bootstrap'; /* importamos el button, according del bootstrap */
import { ReactComponent as ReactIcon} from "./assets/react.svg"; /* Importamos el svg que vamos a usar */
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Bootstrap</h1>
      <Button variant="primary" onClick={() => console.log("Hola")}>Click</Button>{/* colocamos el boton */}
      <Alert variant="danger">Peligro!!!</Alert> {/* Se coloca el Alert */}
      <ReactIcon/> {/* Colocamos el svg que importamos */}
    </div>
  );
}

export default App;
