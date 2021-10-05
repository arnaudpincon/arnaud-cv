import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.scss" //import du style
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode> 
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root') // Pointe vers le fichier index.html dans la div avec l'id root // le truc App appelle le composant App
);
