import React from 'react'; // Importa el objeto React desde el paquete react
import ReactDOM from 'react-dom/client'; // Importa el objeto ReactDOM desde el paquete react-dom
import './index.css'; // Importa el archivo de hojas de estilo index.css para el archivo index.js
import App from './App'; // Importa el componente principal de la aplicación App

const root = ReactDOM.createRoot(document.getElementById('root')); // Crea un nodo raíz en el DOM, en el elemento con id 'root'
root.render( // Renderiza el componente App en el nodo raíz
  <React.StrictMode> {/* Permite un modo estricto en React, que verifica si se están utilizando características obsoletas en el código */}
    <App /> {/* Renderiza el componente principal de la aplicación */}
  </React.StrictMode>
);

