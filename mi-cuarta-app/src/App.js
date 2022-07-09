import { Button, Alert} from 'react-bootstrap'; /* importamos el button, according del bootstrap */
import { ReactComponent as ReactIcon} from "./assets/react.svg"; /* Importamos el svg que vamos a usar */
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Contacto from './pages/Contacto'; /* Se importa tanto contacto como QuienSoy */
import QuienSoy from './pages/QuienSoy';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Bootstrap</h1>

      <Router>
        <div>
          <Link to="/"><Button>Home</Button></Link> 
          <Link to="/contacto"><Button>Contacto</Button></Link>
          <Link to="quien-soy"><Button>Quien Soy</Button></Link>
          {/* Se muestran varios botones, los links nos ayudan a llevarnos a ciertas paginas dadas por route */}
        </div>

        <Routes>
          <Route path="/contacto" element={<Contacto/>}>
          </Route>
          <Route path="/quien-soy" element={<QuienSoy/>}>
          </Route>
        </Routes>
        {/* routes sirve como un switch, mientras que route manda a un componente dependiendo del path que esta en el link */}
      </Router>
      {/* <Button variant="primary" onClick={() => console.log("Hola")}>Click</Button> */}{/* colocamos el boton */}
      {/* <Alert variant="danger">Peligro!!!</Alert> */} {/* Se coloca el Alert */}
      {/* <ReactIcon/> */} {/* Colocamos el svg que importamos */}
    </div>
  );
}

export default App;
