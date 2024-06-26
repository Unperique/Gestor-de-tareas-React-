import React, { useState } from 'react'; // Importamos React y el hook useState
import '../hojas-de-estilo/TareaFormulario.css'; // Importamos la hoja de estilos
import { v4 as uuidv4 } from 'uuid'; // Importamos el generador de ID únicos

/**
 * Componente TareaFormulario para agregar tareas.
 * @param {Object} props - Objeto de propiedades con la función onSubmit.
 * @returns {JSX.Element} Componente TareaFormulario.
 */
function TareaFormulario(props) {
  // Definimos el estado inicial de input como una cadena vacía
  const [input, setInput] = useState('');

  /**
   * Función para manejar los cambios en el input.
   * @param {Object} e - Objeto de evento.
   */
  const manejarCambio = e => {
    setInput(e.target.value);
  }

  /**
   * Función para manejar el envío del formulario.
   * @param {Object} e - Objeto de evento.
   */
  const manejarEnvio = e => {
    e.preventDefault(); // Evitamos el comportamiento predeterminado del envío del formulario

    const tareaNueva = { // Creamos un objeto con las propiedades de la nueva tarea
      id: uuidv4(), // Generamos un ID único para la nueva tarea
      texto: input, // Utilizamos el valor actual de input para el texto de la tarea
      completada: false // La nueva tarea no está completada inicialmente
    }

    props.onSubmit(tareaNueva); // Llamamos a la función onSubmit pasando la nueva tarea como argumento
  }

  return (
    <form // Renderizamos un formulario
      className='tarea-formulario' // Aplicamos la clase de estilo correspondiente
      onSubmit={manejarEnvio}> {/* Llamamos a la función manejarEnvio al enviar el formulario*/}
      <input // Renderizamos un input de texto
        className='tarea-input' // Aplicamos la clase de estilo correspondiente
        type='text' // Establecemos el tipo de input como texto
        placeholder='Escribe una Tarea' // Establecemos un placeholder para el input
        name='texto' // Establecemos el nombre del input
        onChange={manejarCambio}> {/* Llamamos a la función manejarCambio al cambiar el valor del input*/}
      </input>
      <button // Renderizamos un botón
        className='tarea-boton'> {/* Aplicamos la clase de estilo correspondiente*/}
        Agregar Tarea {/* Establecemos el texto del botón*/}
      </button>
    </form>
  );
}

export default TareaFormulario; // Exportamos el componente TareaFormulario
