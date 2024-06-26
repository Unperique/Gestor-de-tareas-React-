import React from 'react'; // Importar React para utilizar JSX
import '../hojas-de-estilo/Tarea.css'; // Importar hoja de estilos
import { AiOutlineCloseCircle } from "react-icons/ai"; // Importar icono de cerrar tarea

/**
 * Componente Tarea para representar una tarea en la lista de tareas.
 * @param {Object} props - Objeto de propiedades con las siguientes claves:
 *   - id: Identificador único de la tarea (number)
 *   - texto: Texto de la tarea (string)
 *   - completada: Indica si la tarea está completada o no (boolean)
 *   - completarTarea: Función para marcar la tarea como completada (function)
 *   - eliminarTarea: Función para eliminar la tarea (function)
 * @returns {JSX.Element} Componente Tarea
 */
function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      {/* Div para mostrar el texto de la tarea */}
      <div 
        className='tarea-texto'
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      {/* Div para mostrar el icono de cerrar tarea */}
      <div 
        className='tarea-contenedor-iconos'
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='tarea-icono' />
      </div>
    </div>
  );   
}

export default Tarea; // Exportar el componente Tarea
