import React, { useState, useEffect } from "react";
import "../LogViewer.css";

const LogViewer = () => {
  // Estado para almacenar las líneas del log
  const [logLines, setLogLines] = useState([]);
  const [error, setError] = useState(null);

 // Crear una instancia de Audio para el sonido
 const sonidoAlerta = new Audio("/Alerta.mp3");

   // Función para reproducir el sonido
   const reproducirSonido = () => {
    sonidoAlerta.play().catch((err) => console.error("Error al reproducir el sonido:", err));
  };


  // Función para obtener las últimas líneas del log desde el servidor
  const fetchLogLines = async () => {
    try {
      const response = await fetch("http://192.168.1.17:5000/logs");
      if (!response.ok) {
        throw new Error("Error al obtener las líneas del log");
      }
      const data = await response.json();

      if (Array.isArray(data.log)) {
        const nuevasLineas = data.log.slice(-6); // Usamos el array dentro de "log" y obtenemos las últimas 6 líneas
         // Verificar si alguna línea contiene la frase deseada
         if (nuevasLineas.some((line) => line.includes("Si Hay Cupos disponibles"))) {
          reproducirSonido(); // Reproducir el sonido si se detecta la frase
        }
        setLogLines(nuevasLineas); // Actualizar el estado con las últimas líneas
      } else {
        console.error('Los datos no contienen un array en "log":', data);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // useEffect para actualizar el log cada 30 segundos
  useEffect(() => {
    // Llamar a la función al montar el componente
    fetchLogLines();

    // Crear el intervalo que llama a fetchLogLines cada 30 segundos
    const interval = setInterval(() => {
      fetchLogLines();
    }, 30000); // 30000 milisegundos = 30 segundos

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []); // El array vacío asegura que el intervalo solo se establezca una vez

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="log-container">
      <h2>Log Actualizado</h2>
      <ul>
        {logLines.map((line, index) => (
           <div key={index} className={`log-line ${line.includes("Error") ? "error" : "info"}`}>
           {line}
         </div>
        ))}
      </ul>
    </div>
  );
};

export default LogViewer;
