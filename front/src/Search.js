import React, { useState } from "react";
import App from "./components/App";
import BoxUpdate from "./components/BoxUpdate";
import LogViewer from "./components/LogViewer";

const Search = () => {
    const [refresh, setRefresh] = useState(false);  // Estado para forzar la actualización

    const handleNuevaBusqueda = () => {
        setRefresh((prev) => !prev);  // Cambiamos el valor de refresh para forzar la recarga
      };

  return (
    <div>
      <BoxUpdate key={refresh} /> {/* El key fuerza la actualización del componente */}
      <LogViewer />
      <App onNuevaBusqueda={handleNuevaBusqueda} />
    </div>
  );
};

export default Search;
