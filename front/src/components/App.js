import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Importa el archivo CSS

const App = ({ onNuevaBusqueda }) => {
  //const [data, setData] = useState({});
  const navigate = useNavigate(); // Hook para navegar a otra página

  const [urlMateria, setUrlMateria] = useState("");
  const [grupos, setGrupos] = useState("");
  const [correos, setCorreos] = useState("");

  // Función que envía los datos al servidor usando POST
  const handleBusqueda = async () => {
    // Crea el objeto con los datos que vas a enviar
    const data = {
      urlMateria: urlMateria,
      grupos: grupos,
      correos: correos,
      estado: true,
    };

    try {
      // Realiza la solicitud POST
      const response = await fetch("http://192.168.1.17:5000/searching", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Convierte los datos a formato JSON
      });

      // Manejo de la respuesta del servidor
      if (response.ok) {
        const result = await response.json();
        console.log("Datos enviados con éxito:", result);
        if (typeof onNuevaBusqueda === "function") {
          onNuevaBusqueda();// Llamamos la función para recargar la lista de materias
        } 
        navigate("/Search");
      } else {
        console.error("Error al enviar los datos:", response.statusText);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <div className="App">
      <div className="form-group">
        <label>URL de la Materia:</label>
        <input
          type="text"
          value={urlMateria}
          onChange={(e) => setUrlMateria(e.target.value)}
          placeholder="Ingrese la URL de la materia"
          className="input-field"
        />
      </div>

      <div className="form-group">
        <label>Grupos a Monitorear (separados por comas):</label>
        <input
          type="text"
          value={grupos}
          onChange={(e) => setGrupos(e.target.value)}
          placeholder="Ej: 020-84,020-83,020-81"
          className="input-field"
        />
      </div>

      <div className="form-group">
        <label>Correos Electrónicos (separados por comas):</label>
        <input
          type="text"
          value={correos}
          onChange={(e) => setCorreos(e.target.value)}
          placeholder="Ej: email1@gmail.com, email2@gmail.com"
          className="input-field"
        />
      </div>

      <div className="form-group">
        <button onClick={handleBusqueda} className="search-button">
          Añadir a la Búsqueda
        </button>
      </div>
    </div>
  );
};

export default App;
