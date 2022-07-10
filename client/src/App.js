import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Funcionalidad } from "./pages/Funcionalidad";

export function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route exact path="/" element={<Funcionalidad />} />
        </Routes>
      </main>
    </Router>
  );
}