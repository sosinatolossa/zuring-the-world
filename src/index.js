import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { ZuringTheWorld } from "./components/zuring-the-world.js"
import './index.css'; 
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ZuringTheWorld />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
