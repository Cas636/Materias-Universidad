import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './components/App.js';
import Search from './Search.js'; // Componente de la nueva página

const MainApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default MainApp;