// src/main.jsx (o .tsx)
import React from "react";
import ReactDOM from "react-dom"; // Importa sin "/client"
import App from "./App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);