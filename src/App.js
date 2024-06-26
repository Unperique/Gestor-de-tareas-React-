import './App.css'; // Importa el archivo de hojas de estilo App.css para el archivo App.js
import freeCodeCampLogo from './imagenes/tares.png' // Importa la imagen freeCodeCampLogo desde el archivo tares.png
import ListaDeTareas from './componentes/ListaDeTareas'; // Importa el componente ListaDeTareas desde el archivo ListaDeTareas.js

/**
 * Componente principal de la aplicación.
 * @returns {JSX.Element} El componente principal de la aplicación.
 */
function App() {
  return (
    <div className="aplicacio-tareas"> {/* Div principal con la clase aplicacio-tareas */}
      <div className='freecodecamp-logo-contenedor'> {/* Div con la clase freecodecamp-logo-contenedor */}
        <img  /* Imagen con la clase freecodecamp-logo */
          src={freeCodeCampLogo} /* Atributo src con la ruta de la imagen freeCodeCampLogo */
          className='freecodecamp-logo' /> {/* Atributo className con la clase freecodecamp-logo */}
      </div>
      <div className='tareas-lista-principal'> {/* Div con la clase tareas-lista-principal */}
        <h1>Mis tareas</h1> {/* Etiqueta h1 con el texto Mis tareas */}
        <ListaDeTareas /> {/* Componente ListaDeTareas */}
      </div>
    </div>
  );
}

export default App; // Exporta el componente App como el componente principal de la aplicación

