import React, { useState, useEffect } from "react";
import "../BoxUpdate.css"; // Estilos para personalizar la tabla

const BoxUpdate = () => {
  // Estado para almacenar las materias
  const [materias, setMaterias] = useState([]);
  const [loading, setLoading] = useState(true);  // Estado de carga
  const [error, setError] = useState(null);      // Estado de error

  // Función para obtener las materias desde el servidor
  const fetchMaterias = async () => {
    try {
      const response = await fetch('http://192.168.1.17:5000/subjects');  // URL de tu API
      if (!response.ok) {
        throw new Error('Error al obtener las materias');
      }
      const data = await response.json();
      setMaterias(data);  // Actualizamos el estado con las materias
      setLoading(false);  // Finalizamos la carga
    } catch (err) {
      setError(err.message);
      setLoading(false);  // Finalizamos la carga aunque haya error
    }
  };

  // useEffect para hacer la solicitud GET al cargar el componente
  useEffect(() => {
    fetchMaterias();
  }, []);  // [] asegura que el efecto solo se ejecute una vez al montar el componente


  // Función para cambiar el estado 
  const handleActivoChange = async (id, nuevoEstado) => {
    try {
      const response = await fetch(`http://192.168.1.17:5000/subjects/${id}`, {
        method: 'PATCH', // O 'PUT' si tu API requiere un PUT
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ estado: nuevoEstado }),  // Actualiza solo el estado
      });
  
      if (response.ok) {
        // Si la actualización fue exitosa, actualiza el estado localmente
        const materiasActualizadas = materias.map((materia) =>
          materia.id === id ? { ...materia, estado: nuevoEstado } : materia
        );
        setMaterias(materiasActualizadas);
      } else {
        console.error("Error al actualizar la materia:", response.statusText);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };



  // Función para eliminar una materia
  const handleEliminarMateria = async (id) => {
    try {
      const response = await fetch(`http://192.168.1.17:5000/subjects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        // Si la eliminación fue exitosa, actualiza el estado eliminando la materia del array
        const materiasActualizadas = materias.filter((materia) => materia.id !== id);
        setMaterias(materiasActualizadas);
      } else {
        console.error("Error al eliminar la materia:", response.statusText);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };
  


  if (loading) return <div>Cargando materias...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <div className="materia-table-container">
      <h2>Lista de Materias y Grupos</h2>
      <table className="materia-table">
        <thead>
          <tr>
            <th>Materia</th>
            <th>Grupos</th>
            <th>En Busqueda</th>
            <th>Quitar Materia</th>
          </tr>
        </thead>
        <tbody>
          {materias.map((materia) => (
            <tr key={materia.id}>
              <td>{materia.nombre}</td>
              <td>{materia.grupo}</td>
              <td>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={materia.estado}
                    onChange={() => handleActivoChange(materia.id, !materia.estado)}
                  />
                  <span className="slider round"></span>
                </label>
              </td>
              <td>
                <button
                  className="eliminar-btn"
                  onClick={() => handleEliminarMateria(materia.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoxUpdate;
