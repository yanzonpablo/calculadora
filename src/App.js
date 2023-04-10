import "./App.css";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import Boton from "./componentes/Boton";

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={freeCodeCampLogo}
          className="freecodecamp-logo"
          alt="Logo de freecodecamp" />
      </div>
      <div className="contenedor-calculadora">
        <div className="fila">
          <Boton>1</Boton>
          <Boton>+</Boton>

        </div>
        <div className="fila">
        </div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
      </div>
    </div>
  );
}

export default App;
