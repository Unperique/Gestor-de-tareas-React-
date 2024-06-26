import React, { useState } from 'react'; // Importar React y el hook useState
import TareaFormulario from './TareaFormulario'; // Importar componente TareaFormulario
import Tarea from './Tarea'; // Importar componente Tarea
import '../hojas-de-estilo/ListaDeTareas.css'; // Importar hoja de estilos

// Definir componente ListaDeTareas
function ListaDeTareas() {

  // Establecer estado inicial de tareas como un array vacío
  const [tareas, setTareas] = useState([]);

  // Función para agregar una tarea
  const agregarTarea = tarea => {
    // Si el texto de la tarea no está vacío, se quita el espacio en blanco al principio y al final
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      // Agregar la tarea al principio del array de tareas
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  // Función para eliminar una tarea
  const eliminarTarea = id => {
    // Filtrar el array de tareas para eliminar la tarea con el id proporcionado
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  // Función para marcar una tarea como completada
  const completarTarea = id => {
    // Mapear el array de tareas para marcar la tarea con el id proporcionado como completada
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };
  
  // Renderizar el componente
  return (
    <>
      {/* Renderizar el componente TareaFormulario con la función agregarTarea como prop */}
      <TareaFormulario onSubmit={agregarTarea} />
      {/* Renderizar un div con la clase tareas-lista-contenedor */}
      <div className='tareas-lista-contenedor'>
        {/* Mapear el array de tareas para renderizar un componente Tarea para cada tarea */}
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id} // Establecer la prop key como el id de la tarea
              id={tarea.id} // Establecer la prop id como el id de la tarea
              texto={tarea.texto} // Establecer la prop texto como el texto de la tarea
              completada={tarea.completada} // Establecer la prop completada como el estado de completada de la tarea
              completarTarea={completarTarea} // Establecer la prop completarTarea como la función completarTarea
              eliminarTarea={eliminarTarea} // Establecer la prop eliminarTarea como la función eliminarTarea
            />
          )
        }
      </div>
    </>
  );    
}

// Exportar el componente ListaDeTareas
export default ListaDeTareas;
